import { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const solutions = [
  {
    title: 'Digital Government Platforms',
    description:
      'Secure portals, workflow automation, and information systems designed to improve public service delivery and accountability.',
    icon: '01',
  },
  {
    title: 'Enterprise Software Development',
    description:
      'Custom business applications that streamline operations, strengthen data visibility, and support decision-making across departments.',
    icon: '02',
  },
  {
    title: 'Operational Automation',
    description:
      'Automated processes for approvals, reporting, document handling, and internal coordination to reduce delays and manual errors.',
    icon: '03',
  },
  {
    title: 'Data & Analytics',
    description:
      'Dashboards and analytics tools that transform operational data into reliable insight for leadership and service teams.',
    icon: '04',
  },
  {
    title: 'Cloud Infrastructure',
    description:
      'Modern, secure cloud-native deployments with scalability, resilience, and governance alignment for the public and private sector.',
    icon: '05',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Ongoing performance monitoring, system support, and software continuity services that keep critical systems dependable.',
    icon: '06',
  },
]

const sectors = ['Government', 'Healthcare', 'Education', 'Utilities', 'Logistics', 'Finance', 'Manufacturing', 'NGOs']

const roadmap = [
  {
    step: '01',
    title: 'Discovery & Needs Review',
    text: 'We assess your processes, compliance requirements, and strategic priorities to define the right digital approach.',
  },
  {
    step: '02',
    title: 'Solution Design',
    text: 'We map secure workflows, user journeys, and system architecture for measurable service improvements.',
  },
  {
    step: '03',
    title: 'Build & Integrate',
    text: 'Our team delivers the platform, connects critical systems, and validates performance before rollout.',
  },
  {
    step: '04',
    title: 'Support & Optimization',
    text: 'We provide maintenance, reporting, and continuous improvement to sustain performance and trust.',
  },
]

const pricingPlans = [
  {
    name: 'Public Service Essentials',
    price: '$1,500',
    description: 'For small departments and agencies needing a reliable digital foundation.',
    features: ['Workflow consultation', 'Basic portal design', 'Core automation setup', 'Monthly support']
  },
  {
    name: 'Digital Transformation',
    price: '$3,800',
    description: 'Built for organizations modernizing internal systems and citizen-facing services.',
    features: ['Custom software build', 'System integration', 'Analytics dashboard', 'Priority support'],
    popular: true,
  },
  {
    name: 'Mission-Critical Platform',
    price: 'Custom',
    description: 'For large-scale institutions requiring secure, scalable, enterprise-grade systems.',
    features: ['Full architecture design', 'Advanced security review', 'DevOps deployment', 'Dedicated project team'],
  },
]

const stats = [
  { value: '120+', label: 'projects delivered' },
  { value: '15+', label: 'sectors supported' },
  { value: '99%', label: 'client retention' },
  { value: '24/7', label: 'operational support' },
]

function Layout() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <div>
            <span className="brand-name">Axonix Technologies</span>
            <small>Public Sector Technology Solutions</small>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <NavLink to="/contact" className="primary-btn">
          Book a Consultation
        </NavLink>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Let’s build resilient digital services</p>
          <h2>Technology that supports trust, efficiency, and public impact.</h2>
        </div>
        <div className="footer-contact-links">
          <a href="mailto:support@axonixtechnologies.com">support@axonixtechnologies.com</a>
          <a href="tel:+917448554709">+91 74485 54709</a>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <main>
      <section className="hero-section reveal">
        <div className="hero-copy">
          <p className="eyebrow">Digital transformation for public trust</p>
          <h1>Software solutions designed for government and enterprise growth.</h1>
          <p className="hero-text">
            Axonix Technologies delivers secure, scalable technology systems that help public agencies,
            institutions, and private organizations improve service delivery, reduce inefficiencies,
            and support long-term operational resilience.
          </p>

          <div className="hero-actions">
            <NavLink to="/services" className="primary-btn">Explore Services</NavLink>
            <NavLink to="/contact" className="secondary-btn">Talk to Our Team</NavLink>
          </div>

          <div className="metrics-grid" aria-label="Key metrics">
            {stats.map((item) => (
              <div key={item.label} className="metric-card reveal-delay">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel reveal-delay" aria-label="Company overview panel">
          <div className="mini-card highlight-card">
            <span>Mission-ready delivery</span>
            <strong>Secure systems built for accountability and service excellence.</strong>
          </div>
          <div className="mini-card">
            <span>Primary focus</span>
            <strong>Government services, workflows, automation, and modernization.</strong>
          </div>
          <div className="mini-card">
            <span>Delivery model</span>
            <strong>Agile, compliant, and tailored to operational realities.</strong>
          </div>
        </div>
      </section>

      <section className="trust-bar reveal" aria-label="Value proposition banner">
        <span>Trusted by institutions that prioritize reliability and impact.</span>
        <div className="trust-logos">
          <span>Government</span>
          <span>Healthcare</span>
          <span>Education</span>
          <span>Enterprise</span>
        </div>
      </section>

      <section className="promo-video-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Company overview</p>
          <h2>Axonix Technologies helps organizations modernize the way they serve people.</h2>
        </div>
        <div className="video-wrapper">
          <video
            className="promo-video"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            poster="/axonix-promo-poster.png"
          >
            <source src="/axonix-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            type="button"
            className="audio-toggle"
            aria-label={isMuted ? 'Enable sound' : 'Mute sound'}
            onClick={() => setIsMuted((prev) => !prev)}
            title={isMuted ? 'Enable sound' : 'Mute sound'}
          >
            <span aria-hidden="true">{isMuted ? '🔇' : '🔊'}</span>
            <span>{isMuted ? 'Sound off' : 'Sound on'}</span>
          </button>
        </div>
      </section>

      <section className="content-section reveal">
        <div className="section-heading">
          <p className="eyebrow">What we solve</p>
          <h2>Technology systems that improve service, accountability, and performance.</h2>
        </div>

        <div className="solutions-grid">
          {solutions.map((item) => (
            <article key={item.title} className="solution-card">
              <span className="solution-index">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section alt-section reveal">
        <div className="section-heading narrow">
          <p className="eyebrow">Industry alignment</p>
          <h2>Solutions shaped around the needs of public and regulated environments.</h2>
        </div>

        <div className="industry-grid">
          {sectors.map((sector) => (
            <div key={sector} className="industry-pill">
              {sector}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Our process</p>
          <h2>From discovery to deployment with measurable, mission-focused outcomes.</h2>
        </div>

        <div className="process-grid">
          {roadmap.map((item) => (
            <div key={item.step} className="process-card">
              <span className="process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function ServicesPage() {
  return (
    <main className="page-content reveal">
      <div className="section-heading">
        <p className="eyebrow">Our capabilities</p>
        <h2>Comprehensive software services for institutions, agencies, and modern enterprises.</h2>
      </div>

      <div className="service-page-grid">
        {solutions.map((item) => (
          <article key={item.title} className="solution-card service-card">
            <span className="solution-index">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

function PricingPage() {
  return (
    <main className="page-content reveal">
      <div className="section-heading center-heading">
        <p className="eyebrow">Flexible engagement models</p>
        <h2>Transparent pricing for strategic digital transformation.</h2>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular ? <span className="badge">Most Popular</span> : null}
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <NavLink to="/contact" className="primary-btn pricing-button">
              Request Proposal
            </NavLink>
          </article>
        ))}
      </div>
    </main>
  )
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get('name')?.toString().trim() || 'Customer',
      organization: formData.get('organization')?.toString().trim() || 'Not provided',
      email: formData.get('email')?.toString().trim() || 'Not provided',
      message: formData.get('message')?.toString().trim() || 'No details provided',
    }

    const mailtoSubject = encodeURIComponent(`New inquiry from ${payload.name} - ${payload.organization}`)
    const mailtoBody = encodeURIComponent(
      `Name: ${payload.name}\nOrganization: ${payload.organization}\nEmail: ${payload.email}\n\nProject Details:\n${payload.message}`,
    )

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || 'Mail service error')
      }

      form.reset()
      setErrorMessage('')
      setSubmitted(true)
    } catch (error) {
      setErrorMessage(
        'The mail service is not configured yet. Your mail app is opening so you can send the inquiry manually.',
      )
      window.location.href = `mailto:support@axonixtechnologies.com?subject=${mailtoSubject}&body=${mailtoBody}`
      form.reset()
      setSubmitted(true)
    }
  }

  return (
    <main className="page-content contact-page reveal">
      <div className="contact-copy">
        <p className="eyebrow">Let’s talk</p>
        <h2>Plan a smarter digital future for your organization.</h2>
        <p>
          Whether you are modernizing public services, improving workflow efficiency, or building a
          secure digital platform, Axonix Technologies is ready to help.
        </p>
      </div>

      <div className="contact-details-card">
        <div className="contact-detail-item">
          <span className="detail-label">Email</span>
          <a href="mailto:support@axonixtechnologies.com">support@axonixtechnologies.com</a>
        </div>
        <div className="contact-detail-item">
          <span className="detail-label">Phone</span>
          <a href="tel:+917448554709">7448554709</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Organization
          <input type="text" name="organization" placeholder="Organization or agency" required />
        </label>
        <label>
          Email Address
          <input type="email" name="email" placeholder="name@company.com" required />
        </label>
        <label>
          Project Details
          <textarea name="message" rows="5" placeholder="Tell us about your software needs" required />
        </label>

        <button type="submit" className="primary-btn submit-btn">Send Inquiry</button>

        {submitted ? (
          <p className="success-message">
            {errorMessage ||
              'Your inquiry has been submitted. If your mail client opens, please send the prepared message to complete the request.'}
          </p>
        ) : null}
      </form>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
