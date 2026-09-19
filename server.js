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
const fromAddress = process.env.FROM_ADDRESS || 'onboarding@resend.dev'
const toAddress = process.env.TO_ADDRESS || 'support@axonixtechnologies.com'
const smtpTransport = smtpHost && smtpUser && smtpPass
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

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distPath))
}

app.post('/api/contact', async (req, res) => {
  const { name, organization, email, message } = req.body || {}

  if (!name || !organization || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  const htmlBody = `
    <h3>New Inquiry</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Organization:</strong> ${organization}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Project Details:</strong></p>
    <p>${String(message).replace(/\n/g, '<br />')}</p>
  `

  const textBody = `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\n\nProject Details:\n${message}`

  try {
    if (smtpTransport) {
      const info = await smtpTransport.sendMail({
        from: fromAddress,
        to: toAddress,
        replyTo: email,
        subject: `New inquiry from ${name} - ${organization}`,
        html: htmlBody,
        text: textBody,
      })

      return res.status(200).json({
        message: 'Inquiry sent successfully.',
        result: info.response || info,
      })
    }

    if (!resend) {
      return res.status(500).json({
        message: 'No email provider is configured. Add SMTP_HOST, SMTP_USER, SMTP_PASS or RESEND_API_KEY to the environment.',
      })
    }

    const result = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject: `New inquiry from ${name} - ${organization}`,
      html: htmlBody,
      text: textBody,
    })

    return res.status(200).json({ message: 'Inquiry sent successfully.', result })
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to send inquiry using the configured email service.',
      error: error.message,
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
