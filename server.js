import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'
import { Resend } from 'resend'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = process.env.PORT || 4000
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null
const smtpHost = process.env.SMTP_HOST
const smtpPort = Number(process.env.SMTP_PORT || 587)
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS
const smtpTransporter = smtpHost && smtpUser && smtpPass
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
  : null
const distPath = path.join(__dirname, 'dist')
const businessPrompt = `You are Axonix AI Strategy Advisor for Axonix Technologies.

Your role is to help visitors understand the company's AI strategy, custom software, workflow automation, digital transformation, and government technology services.

Guidelines:
- Be professional, helpful, and concise.
- Suggest the most relevant Axonix service based on the user's challenge.
- Keep answers grounded in enterprise, public sector, and digital transformation realities.
- If the user is clearly a potential client, encourage them to book a consultation or contact the team.
- If they ask for a general explanation, explain it simply.
- Do not claim unsupported facts or make guarantees.

Common service mappings:
- AI strategy, AI roadmap, business automation, AI adoption -> AI Strategy & Innovation
- internal process workflows, approvals, forms, manual work -> Workflow Automation
- legacy modernization, new systems, software replacement -> Custom Software Development
- digital service rollout, process redesign, business change -> Digital Transformation
- public agencies, government workflows, citizen services -> Public Sector Technology

Always answer as if you represent Axonix Technologies.`

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distPath))
}

const calculateLeadScore = (userMessage) => {
  const text = (userMessage || '').toLowerCase()
  let score = 0

  if (text.includes('ai') || text.includes('automation') || text.includes('workflow')) score += 20
  if (text.includes('software') || text.includes('system') || text.includes('custom')) score += 20
  if (text.includes('strategy') || text.includes('roadmap') || text.includes('digital transformation')) score += 18
  if (text.includes('government') || text.includes('agency') || text.includes('public')) score += 12
  if (text.includes('need') || text.includes('want') || text.includes('looking') || text.includes('improve')) score += 10
  if (text.includes('manual') || text.includes('slow') || text.includes('process') || text.includes('bottleneck')) score += 12
  if (text.includes('cost') || text.includes('revenue') || text.includes('efficiency') || text.includes('service')) score += 8

  return Math.min(100, Math.max(0, score))
}

const buildFallbackResponse = (userMessage) => {
  const text = userMessage.toLowerCase()
  const leadScore = calculateLeadScore(userMessage)

  if (text.includes('ai') || text.includes('strategy') || text.includes('roadmap')) {
    return {
      message:
        'Axonix recommends starting with an AI readiness assessment, a business-process story, and a prioritized roadmap. The best first move is usually an AI use-case review tied to real operational pain points and service goals.',
      leadScore,
      cta: 'Best next step: book a consultation to map your highest-value AI opportunity.',
    }
  }

  if (text.includes('workflow') || text.includes('automation') || text.includes('manual')) {
    return {
      message:
        'Workflow automation is often the highest-value starting point when teams are stuck with approvals, repetitive tasks, routing, or slow service requests. Axonix can help map the process, identify bottlenecks, and design the right workflow solution.',
      leadScore,
      cta: 'Best next step: review your current workflow and identify the first process to automate.',
    }
  }

  if (text.includes('software') || text.includes('custom') || text.includes('system')) {
    return {
      message:
        'Custom software is the best fit when your organization has unique workflows, regulatory requirements, or process complexity that off-the-shelf tools cannot support well. Axonix designs software around operational realities rather than forcing the business to adapt to generic tools.',
      leadScore,
      cta: 'Best next step: define the core workflow, integrations, and success metrics for your solution.',
    }
  }

  if (text.includes('government') || text.includes('public')) {
    return {
      message:
        'Public sector technology work is best when it focuses on accountability, citizen service quality, workflow transparency, and durable modernization. Axonix helps agencies improve service delivery through practical digital systems and governed process design.',
      leadScore,
      cta: 'Best next step: schedule a modernization review for the service or workflow you want to improve.',
    }
  }

  if (text.includes('digital transformation') || text.includes('transformation')) {
    return {
      message:
        'Digital transformation works best when it is treated as a structured business improvement initiative. Axonix helps organizations define the right roadmap, identify the right priorities, and modernize systems in a phased and measurable way.',
      leadScore,
      cta: 'Best next step: identify the business service or capability that needs the highest-value transformation first.',
    }
  }

  return {
    message:
      'Axonix Technologies helps organizations with AI strategy, workflow automation, custom software, public sector modernization, and digital transformation. If you share your challenge, I can suggest the most relevant service path and the next best step for your team.',
    leadScore,
    cta: 'Best next step: tell us your challenge and we can recommend the most relevant growth or modernization path.',
  }
}

const callOpenAI = async (userMessage) => {
  const azureEndpoint = process.env.AZURE_OPENAI_ENDPOINT
  const azureKey = process.env.AZURE_OPENAI_API_KEY
  const azureDeployment = process.env.AZURE_OPENAI_DEPLOYMENT

  if (azureEndpoint && azureKey && azureDeployment) {
    const normalizedEndpoint = azureEndpoint.trim().replace(/\/$/, '')
    const projectEndpoint = normalizedEndpoint.includes('/api/projects/')
    const url = projectEndpoint
      ? `${normalizedEndpoint}/models/chat/completions?api-version=${process.env.AZURE_OPENAI_API_VERSION || '2024-05-01-preview'}`
      : `${normalizedEndpoint.replace(/\/openai\/v1\/?$/i, '').replace(/\/openai\/?$/i, '')}/openai/deployments/${azureDeployment}/chat/completions?api-version=${process.env.AZURE_OPENAI_API_VERSION || '2024-02-01'}`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': azureKey,
      },
      body: JSON.stringify(projectEndpoint
        ? {
            messages: [
              { role: 'system', content: businessPrompt },
              { role: 'user', content: userMessage },
            ],
            model: azureDeployment,
            temperature: 0.7,
            max_tokens: 300,
          }
        : {
            messages: [
              { role: 'system', content: businessPrompt },
              { role: 'user', content: userMessage },
            ],
            temperature: 0.7,
            max_tokens: 300,
          }),
    })

    if (!response.ok) {
      throw new Error(`Azure OpenAI request failed: ${response.status}`)
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content

    if (content) {
      return {
        message: content,
        leadScore: calculateLeadScore(userMessage),
        cta: 'Book a consultation to turn this opportunity into a focused strategy or delivery plan.',
      }
    }

    return buildFallbackResponse(userMessage)
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (apiKey) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [
          { role: 'system', content: businessPrompt },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI request failed: ${response.status}`)
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content

    if (content) {
      return {
        message: content,
        leadScore: calculateLeadScore(userMessage),
        cta: 'Book a consultation to turn this opportunity into a focused strategy or delivery plan.',
      }
    }

    return buildFallbackResponse(userMessage)
  }

  return buildFallbackResponse(userMessage)
}

app.post('/api/contact', async (req, res) => {
  const { name, organization, email, message } = req.body || {}

  if (!name || !organization || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  const fromAddress = process.env.FROM_ADDRESS || 'onboarding@resend.dev'
  const toAddress = process.env.TO_ADDRESS || 'support@axonixtechnologies.com'
  const emailText = `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\n\nProject Details:\n${message}`
  const emailHtml = `
    <h3>New Inquiry</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Organization:</strong> ${organization}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Project Details:</strong></p>
    <p>${message.replace(/\n/g, '<br />')}</p>
  `

  try {
    if (smtpTransporter) {
      const smtpResult = await smtpTransporter.sendMail({
        from: fromAddress,
        to: toAddress,
        replyTo: email,
        subject: `New inquiry from ${name} - ${organization}`,
        text: emailText,
        html: emailHtml,
      })

      return res.status(200).json({ message: 'Inquiry sent successfully.', result: smtpResult })
    }

    if (!resend) {
      return res.status(500).json({
        message: 'No email provider is configured. Add RESEND_API_KEY or SMTP credentials to the environment.',
      })
    }

    const result = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject: `New inquiry from ${name} - ${organization}`,
      html: emailHtml,
      text: emailText,
    })

    return res.status(200).json({ message: 'Inquiry sent successfully.', result })
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to send inquiry using the configured email provider.',
      error: error.message,
    })
  }
})

app.post('/api/agent', async (req, res) => {
  try {
    const message = req.body?.message || ''

    if (!message.trim()) {
      return res.status(400).json({ message: 'Please enter a question or challenge.' })
    }

    const response = await callOpenAI(message)
    return res.status(200).json({
      message: response.message || response,
      leadScore: response.leadScore ?? calculateLeadScore(message),
      cta: response.cta || 'Book a consultation to turn this opportunity into a focused strategy or delivery plan.',
    })
  } catch (error) {
    const fallback = buildFallbackResponse(req.body?.message || '')
    return res.status(500).json({
      message: 'The AI advisor is not fully configured yet. Add OPENAI_API_KEY or Azure OpenAI settings to enable live responses.',
      fallback: fallback.message,
      leadScore: fallback.leadScore,
      cta: fallback.cta,
    })
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next()
    }

    return res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
