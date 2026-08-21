export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed.' })
  }

  const { name, organization, email, message } = request.body || {}

  if (!name || !organization || !email || !message) {
    return response.status(400).json({ message: 'All fields are required.' })
  }

  const { Resend } = await import('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)

  const fromAddress = process.env.FROM_ADDRESS || 'onboarding@resend.dev'
  const toAddress = process.env.TO_ADDRESS || 'support@axonixtechnologies.com'

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({
      message: 'Resend API key is missing. Add RESEND_API_KEY and FROM_ADDRESS in Vercel environment settings.',
    })
  }

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject: `New inquiry from ${name} - ${organization}`,
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Details:</strong></p>
        <p>${String(message).replace(/\n/g, '<br />')}</p>
      `,
      text: `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\n\nProject Details:\n${message}`,
    })

    return response.status(200).json({ message: 'Inquiry sent successfully.', result })
  } catch (error) {
    return response.status(500).json({
      message: 'Failed to send inquiry using the hosted email service.',
      error: error.message,
    })
  }
}
