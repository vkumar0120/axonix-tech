import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const siteMeta = {
  title: 'Axonix Technologies | Custom Software Development & Digital Transformation',
  description:
    'Axonix Technologies provides custom software development, digital transformation consulting, public sector software solutions, workflow automation, enterprise modernization, and cloud-based application services.',
  url: 'https://www.axonixtechnologies.com/',
}

function Seo({ title, description, url = siteMeta.url }) {
  return (
    <Helmet>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3352721202761209" crossOrigin="anonymous" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="government software solutions, digital transformation company, enterprise software development, public sector technology, workflow automation, custom software solutions, cloud modernization services"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Axonix Technologies" />
      <meta property="og:image" content="https://www.axonixtechnologies.com/og-image.svg" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

const aiServices = [
  {
    title: 'AI Strategy & Roadmaps',
    description:
      'We assess your business, operations, and data maturity to design a realistic AI roadmap that identifies the highest-value opportunities and implementation priorities.',
    icon: 'AI',
  },
  {
    title: 'AI Workflow Automation',
    description:
      'We build intelligent processes to automate approvals, document triage, reporting, service routing, and repetitive operational tasks with AI-assisted decision support.',
    icon: 'AU',
  },
  {
    title: 'AI Experience Design',
    description:
      'We create AI-powered portals, assistants, recommendation systems, and smart user experiences that improve service access, engagement, and operational performance.',
    icon: 'UX',
  },
]

const solutions = [
  {
    title: 'AI Strategy & Innovation',
    description:
      'AI roadmap design, opportunity assessment, and intelligent automation strategies that help organizations prepare for the next era of digital transformation.',
    icon: '01',
  },
  {
    title: 'Digital Government Platforms',
    description:
      'Secure government software solutions, citizen portals, workflow automation, and public service applications built to improve accountability, transparency, and service delivery.',
    icon: '02',
  },
  {
    title: 'Enterprise Software Development',
    description:
      'Custom enterprise software development for internal systems, business applications, customer portals, and operational tools that streamline complex workflows.',
    icon: '03',
  },
  {
    title: 'Operational Automation',
    description:
      'Business process automation, document handling, approval routing, and reporting workflows engineered to reduce manual effort and improve operational efficiency.',
    icon: '03',
  },
  {
    title: 'Data & Analytics',
    description:
      'Business intelligence dashboards, reporting systems, and analytics platforms that turn operational data into actionable insights for leadership teams.',
    icon: '04',
  },
  {
    title: 'Cloud Infrastructure & Modernization',
    description:
      'Cloud migration, infrastructure modernization, DevOps enablement, and secure hosting strategies that improve resilience, performance, and scalability.',
    icon: '05',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Software support, monitoring, upgrades, and managed maintenance services that keep critical systems secure, stable, and fully operational.',
    icon: '06',
  },
]

const sectors = ['Government', 'Healthcare', 'Education', 'Utilities', 'Logistics', 'Finance', 'Manufacturing', 'NGOs']

const roadmap = [
  {
    step: '01',
    title: 'Discovery & Strategy Review',
    text: 'We assess your workflows, digital challenges, compliance needs, and business goals to define the right software strategy.',
  },
  {
    step: '02',
    title: 'Solution Design & Planning',
    text: 'We map user journeys, process automation opportunities, and secure system architecture for measurable operational gains.',
  },
  {
    step: '03',
    title: 'Build, Integrate & Launch',
    text: 'Our team develops the solution, connects critical systems, and validates performance before full deployment.',
  },
  {
    step: '04',
    title: 'Support, Optimization & Growth',
    text: 'We provide ongoing maintenance, reporting, upgrades, and optimization to keep your digital systems efficient and future-ready.',
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

const servicePages = [
  {
    slug: 'ai-innovation',
    label: 'AI Innovation & Intelligent Systems',
    shortTitle: 'AI Innovation',
    title: 'AI Innovation & Intelligent Systems | Axonix Technologies',
    description:
      'AI technology consulting, intelligent automation, and next-generation digital systems that help organizations invent and implement the new AI era.',
    h1: 'AI innovation that turns data, workflows, and decision-making into strategic business advantage.',
    intro:
      'The AI era is no longer a future concept—it is a practical opportunity for organizations to improve service delivery, reduce operational friction, and unlock new levels of productivity. Axonix Technologies helps public institutions, enterprises, and growth-focused businesses invent practical AI solutions that fit real operational needs. We design intelligent systems that improve workflows, automate repetitive work, support better decisions, and create new digital capabilities without losing control, transparency, or governance.',
    benefits: [
      'AI strategy tailored to your mission, operations, and decision-making needs',
      'Intelligent automation for repetitive tasks, approvals, and service workflows',
      'Smart analytics and insight generation from operational data',
      'Governed, secure AI systems built for real-world enterprise and public sector use',
    ],
    paragraphs: [
      'AI technology is transforming how organizations work, compete, and serve communities. The opportunity is not only to automate repetitive tasks but also to build systems that help people make faster, better, and more informed decisions. At Axonix Technologies, we focus on implementing AI in ways that are practical, measurable, and anchored in the realities of the business. Instead of chasing hype, we help organizations identify the business problems where AI can create genuine value.',
      'From workflow intelligence and document analysis to predictive decision support and conversational interfaces, AI can create powerful improvements across public service delivery and enterprise operations. We help clients evaluate where intelligent automation can reduce manual effort, improve clarity, and support stronger service outcomes. This may include recommendation engines, smart classification, summary generation, process augmentation, and agentic workflows that assist teams across high-volume or rules-based tasks.',
      'Our approach is grounded in governance and implementation quality. AI systems must be trustworthy, explainable, and aligned with organizational goals. That means paying attention to data quality, human oversight, and the operational context in which the system will be used. We design AI solutions that augment teams rather than replace judgment, helping organizations build capacity while keeping accountability and control intact.',
      'AI is especially valuable when it reduces friction in complex operational environments. For example, it can help triage incoming requests, route inquiries to the right team, summarize documents, detect anomalies in workflows, or generate first-pass recommendations for service teams. In public sector and enterprise settings, this can shorten response times, improve consistency, and reduce the time spent on repetitive administrative work.',
      'The new AI era is also about innovation: building new digital experiences, smarter internal tools, and connected systems that can adapt as the organization evolves. Axonix Technologies helps organizations move from experimentation to implementation by designing solutions that are secure, purposeful, and ready for long-term use. We combine AI engineering with practical delivery disciplines so the result is not just a demo but a real operating capability.',
      'Whether your organization is exploring AI for internal productivity, customer experience, or service modernization, our team can help turn that vision into a realistic implementation roadmap. We help define the problem, design the solution, integrate the technology responsibly, and support adoption across the organization. The outcome is a technology platform that helps you compete, innovate, and operate more effectively in the AI era.',
    ],
    faqs: [
      { question: 'What is the best first AI use case for an organization?', answer: 'The best AI use case is one that reduces repetitive work, improves decision quality, or speeds up service delivery while being grounded in clear operational data and business value.' },
      { question: 'Can AI be implemented safely in government or enterprise environments?', answer: 'Yes. Safe AI implementations rely on governance, data quality, human oversight, clear process boundaries, and responsible operational design. These are essential for trust and compliance.' },
      { question: 'What types of AI systems do you build?', answer: 'We build intelligent automation workflows, decision support tools, document intelligence systems, conversational interfaces, and AI-enabled operational dashboards tailored to the client’s business context.' },
    ],
  },
  {
    slug: 'custom-software-development',
    label: 'Custom Software Development',
    shortTitle: 'Custom Software Development',
    title: 'Custom Software Development Services | Axonix Technologies',
    description:
      'Custom software development services for government organizations, enterprises, and mission-critical teams that need digital systems built around real operational needs.',
    h1: 'Custom software development built for operational clarity, resilience, and measurable growth.',
    intro:
      'Every organization has unique processes, constraints, and service standards. Off-the-shelf platforms rarely address them fully, which is why Axonix Technologies delivers custom software development services designed around how your team actually works. We help public institutions, enterprises, and growth-focused organizations replace brittle legacy workflows with modern, secure, and scalable digital systems that support better decisions and stronger service outcomes.',
    benefits: [
      'Tailored workflows designed around specific operational needs',
      'Scalable architecture that supports growth and future integrations',
      'Secure development practices for regulated and mission-critical environments',
      'Ongoing support to keep systems efficient after launch',
    ],
    paragraphs: [
      'Custom software development gives organizations control over the systems that shape day-to-day operations. Instead of forcing teams to adapt to rigid software, we design tools that mirror real processes, user journeys, and reporting requirements. This approach is especially valuable for government agencies, enterprise teams, and service-oriented businesses that need dependable software without unnecessary complexity or workflow friction. When applications are built around actual operational needs, adoption improves, inefficiencies decrease, and teams can move faster with better visibility.',
      'Axonix Technologies partners with clients across sectors to build digital products and internal platforms that solve practical problems. We start by understanding the challenge in detail: what processes are broken, what information is fragmented, and what outcomes matter most. From there, we define a system architecture that balances usability, security, maintainability, and scalability. Whether the requirement is a customer portal, internal management dashboard, workflow application, or a strategic digital platform, the goal is the same — to create a reliable system that helps teams perform better and serve users more effectively.',
      'A well-designed custom solution does more than automate tasks; it creates operational clarity. Teams need accurate data, simplified approvals, predictable workflows, and a system they can trust. We build software with these realities in mind, working through business logic, integrations, automation opportunities, and future-proofing requirements. This ensures the final product supports current objectives without becoming a maintenance burden as the organization evolves.',
      'We also focus on continuity and long-term value. Modern software systems should not exist as isolated tools that require constant intervention. They should connect to the platforms already used by the business, handle reporting and analytics intelligently, and remain manageable as teams expand. By integrating with existing infrastructure and designing for maintainability, we help clients get more from their digital investments while minimizing disruption and technical risk.',
      'For organizations operating in regulated or policy-driven environments, custom software must also consider compliance, accountability, and resilience. We design with those needs in mind, prioritizing secure implementation practices, dependable architecture, and transparent system logic. This makes custom software a strategic operational asset rather than just a software purchase. It becomes part of the organization’s broader service model, helping teams work more confidently and make faster decisions based on reliable information.',
      'If your organization is dealing with manual processes, disconnected tools, or growing operational complexity, custom software development can provide a clear path forward. Axonix Technologies helps identify the right solution, build it intentionally, and support it as your workflows evolve. The result is a software system that improves business continuity, elevates service quality, and supports long-term goals with less friction and more clarity.',
    ],
    faqs: [
      { question: 'What types of businesses need custom software development?', answer: 'Organizations with unique workflows, compliance requirements, or integration needs usually benefit most from custom software. This often includes government teams, growing enterprises, and service providers with processes that off-the-shelf tools cannot adapt to easily.' },
      { question: 'How long does a custom software project take?', answer: 'Timeline depends on scope, complexity, integrations, and stakeholder review cycles. Small workflow systems may take a few weeks, while larger enterprise platforms often require a structured roadmap and phased delivery model.' },
      { question: 'Can the software integrate with legacy systems?', answer: 'Yes. We design systems to connect with current databases, internal tools, APIs, and operational platforms where needed, reducing the disruption of switching everything at once.' },
    ],
  },
  {
    slug: 'digital-transformation',
    label: 'Digital Transformation',
    shortTitle: 'Digital Transformation',
    title: 'Digital Transformation Services | Axonix Technologies',
    description:
      'Digital transformation consulting and implementation services that help organizations improve service delivery, automate operations, and modernize legacy systems.',
    h1: 'Digital transformation strategy that modernizes service delivery and strengthens operational performance.',
    intro:
      'Digital transformation is not just about adopting new tools; it is about changing the way an organization works to become more responsive, efficient, and resilient. At Axonix Technologies, we help public institutions and enterprises create practical transformation roadmaps that align technology with mission, operations, and measurable performance goals. Rather than layering on disconnected solutions, we design systems and processes that simplify service delivery and improve long-term adaptability.',
    benefits: [
      'Clear digital roadmap aligned with business and service goals',
      'Modernized operations with better visibility and accountability',
      'Automation of repetitive tasks to reduce manual effort',
      'Future-ready platforms for growth, compliance, and service quality',
    ],
    paragraphs: [
      'Many organizations begin digital transformation with a specific pain point: fragmented workflows, legacy systems, manual reporting, or delayed service delivery. These issues often create inefficiency across teams and erode trust among stakeholders. A focused transformation strategy helps define which processes should be automated, which systems should be upgraded, and which data sources need to be unified. The result is not just modernization for its own sake, but a more effective operating model that improves how work gets done.',
      'Axonix Technologies works with clients to map digital opportunities across their operations and service functions. We look at where information is trapped, where decision-making slows down, and where technology can reduce effort without compromising security or governance. This assessment leads to practical recommendations around portals, workflow redesign, reporting dashboards, communication systems, and process automation. The goal is to create a transformation plan that is realistic, measurable, and built for the realities of the organization.',
      'Digital transformation also requires leadership alignment. Technology initiatives succeed when they reflect organizational goals, user behavior, and operational constraints. That is why we combine technical delivery with business understanding. We help organizations prioritize where to invest first, how to phase the rollout, and what success looks like after deployment. This creates accountability and confidence at every stage of the transformation journey, which is critical in sectors where public trust and service continuity matter.',
      'When transformation is designed properly, it improves both internal efficiency and the experience of the people being served. Residents, citizens, employees, and partners benefit when systems are easier to use, information is more accurate, and decisions happen faster. Instead of fragmented processes and duplicate effort, teams gain streamlined procedures, better visibility, and improved responsiveness. These are the kinds of operational improvements that create lasting value, not only in the short term but across future growth plans.',
      'One of the biggest transformation mistakes is treating technology as a one-time project rather than a long-term capability. We avoid that trap by building systems with governance, scalability, and maintainability in mind. That means designing workflows that are easy to update, architecture that can absorb new integrations, and reporting that gives leaders real insight. This makes the organization more adaptable while reducing operational risk and future rework.',
      'For organizations ready to modernize, Axonix Technologies provides the strategy and delivery support needed to move from legacy complexity to a digital-first operating model. We build transformation plans that are actionable, measurable, and tailored to the unique context of the organization. The result is a more agile, user-centered, and resilient business or institution that is prepared for future demands and continues delivering value as it grows.',
    ],
    faqs: [
      { question: 'What is the first step in a digital transformation project?', answer: 'The first step is assessing current processes, technology gaps, and operational priorities. This gives leadership a realistic roadmap and helps identify the highest-value change opportunities.' },
      { question: 'Can digital transformation include legacy system modernization?', answer: 'Yes. Many transformation initiatives involve modernizing outdated systems while preserving essential functionality. We design phased strategies that reduce disruption and improve continuity.' },
      { question: 'How do you measure transformation success?', answer: 'We define measurable outcomes such as service turnaround time, reduction in manual effort, reporting accuracy, workflow efficiency, user adoption, and operational resilience.' },
    ],
  },
  {
    slug: 'workflow-automation',
    label: 'Workflow Automation',
    shortTitle: 'Workflow Automation',
    title: 'Workflow Automation Services | Axonix Technologies',
    description:
      'Workflow automation solutions that streamline approvals, reduce manual work, improve process visibility, and modernize operational services.',
    h1: 'Workflow automation that reduces friction, accelerates service delivery, and improves accountability.',
    intro:
      'Manual workflows create delays, unnecessary rework, and inconsistent service quality. Workflow automation helps organizations standardize approvals, improve transparency, and reduce the burden on staff who spend too much time on repetitive tasks. Axonix Technologies designs automation systems that connect forms, processes, notifications, compliance checks, and reporting into a unified operational flow.',
    benefits: [
      'Automated approvals, notifications, escalations, and routing',
      'Reduced human error and less operational bottlenecking',
      'Better visibility across complex multi-step processes',
      'Faster service delivery and improved internal accountability',
    ],
    paragraphs: [
      'Workflow automation is especially useful in organizations where approvals, service requests, or internal reviews involve multiple teams. Without automation, even simple processes can become slow, inconsistent, and difficult to audit. Teams may rely on spreadsheets, email threads, or duplicated follow-ups, which increases the risk of missed steps and poor service experiences. A well-designed workflow system changes that by creating a clear process, automatic status updates, and standardized decision points that are easier to track and improve.',
      'At Axonix Technologies, we design workflow solutions that reflect how work actually happens. We map the process first, identify delays or bottlenecks, and simplify the sequence so tasks move naturally from intake to approval to completion. This can apply to internal operations, citizen service requests, vendor onboarding, document approvals, and other repetitive processes that affect service quality. The end result is not just automation, but a more reliable and transparent way of working.',
      'Automation also improves data quality and reporting. When tasks move through a standard process, it becomes easier to collect the right information at the right time and produce accurate dashboards or operational reports. This gives leaders better visibility into workload, turnaround times, bottlenecks, and exception handling. Instead of chasing data manually, managers can focus on identifying improvements and making better decisions faster.',
      'Operational efficiency is often the clearest benefit of workflow automation, but there is also a service-quality benefit. When customers or internal teams receive faster responses, fewer handoff problems, and clearer communication, they trust the organization more. This matters in public service environments, regulated industries, and enterprise operations where reliability and responsiveness directly influence stakeholder confidence. Automation helps create consistency without sacrificing flexibility or oversight.',
      'We also focus on compliance and accountability. Many processes need a trail of who approved what, when the decision was made, and what documents or steps were involved. Workflow automation supports that by creating structured data records, audit-friendly process history, and rule-based enforcement. This reduces operational risk while making governance easier to maintain as teams scale or rules change. The system becomes more than a productivity tool; it becomes part of the organization’s process integrity framework.',
      'Whether the challenge is document-heavy approval chains, repetitive internal tasks, or service requests spread across teams, Axonix Technologies can design workflow automation that simplifies the work. We create automation strategies that reduce manual effort, improve consistency, and create better visibility over performance. When processes become predictable, service teams can focus on value-added work instead of administrative friction.',
    ],
    faqs: [
      { question: 'Which processes are best suited for workflow automation?', answer: 'Processes with repeated steps, approvals, escalation points, or document movement are ideal candidates. Common examples include service requests, onboarding, reporting, compliance workflows, and internal approvals.' },
      { question: 'Can workflow systems be integrated with other software?', answer: 'Yes. Workflow automation can connect with existing systems such as CRMs, databases, document repositories, and internal portals so information flows consistently across the organization.' },
      { question: 'Will automation reduce staff workload?', answer: 'Yes, especially for repetitive administrative work. The goal is not to eliminate human involvement, but to remove low-value tasks so teams can focus on exceptions, service quality, and strategic work.' },
    ],
  },
  {
    slug: 'public-sector-technology',
    label: 'Public Sector Technology',
    shortTitle: 'Public Sector Technology',
    title: 'Public Sector Technology Services | Axonix Technologies',
    description:
      'Public sector technology services for government agencies, institutions, and civic organizations seeking secure digital platforms and service modernization.',
    h1: 'Public sector technology solutions that improve service access, transparency, and citizen experience.',
    intro:
      'Public sector organizations face a difficult balance: they must serve communities effectively while operating within budget constraints, governance requirements, and increasingly high expectations for digital access. Axonix Technologies supports government agencies and public institutions with technology solutions designed for efficiency, transparency, and long-term accountability. We help organizations modernize service delivery without disrupting essential functions or eroding trust.',
    benefits: [
      'Citizen-centered digital experiences with clear service pathways',
      'Processes designed for accountability, oversight, and compliance',
      'Modern tools that support staff productivity and service quality',
      'Secure digital platforms built for long-term public service continuity',
    ],
    paragraphs: [
      'Government and public institutions often rely on legacy systems that were not designed for today’s service expectations. That creates friction for both staff and the public: access is slower, data is harder to verify, and operations may depend on manual processes that are difficult to scale. Public sector technology solutions can address these issues while improving transparency and making services easier to understand and use. The right approach is not just digitizing forms; it is improving how public services are delivered and managed.',
      'Axonix Technologies works with public agencies to identify where digital systems can create the greatest impact. This may include service portals, internal workflow systems, document processing tools, reporting dashboards, or citizen communication channels. Each solution is designed to support accessibility, reliability, and governance. We place strong emphasis on user experience, operational clarity, and the ability to manage complexity across departments, stakeholders, and compliance requirements.',
      'Governance and accountability are central to public sector technology. Workflows must be transparent, decision trails must be auditable, and service processes must support public trust. We build systems that reflect those realities by using structured logic, clear role-based access, and operational reporting that helps teams monitor performance and improve service quality over time. This gives leadership confidence that the system supports both operational needs and public accountability obligations.',
      'Public service modernization also requires a strong focus on continuity. Citizens expect reliable access to information and services, and agencies need systems that can support growing demand without breakdowns or data inconsistencies. We design solutions with scalability, maintainability, and resilience in mind so public institutions can adapt as needs evolve. This reduces the risk of losing momentum during expansion or while handling changing policy or reporting requirements.',
      'Technology should help public organizations serve people better, not make services harder to access or understand. We aim to create digital experiences that are straightforward, accessible, and aligned with how citizens and staff actually interact with the system. Whether the need is a citizen portal, internal process automation, or a complete digital modernization roadmap, our goal is to support services that are efficient, transparent, and sustainable over time.',
      'For agencies and institutions ready to modernize service delivery, Axonix Technologies provides practical, mission-aware technology solutions. We combine a deep understanding of public-sector realities with implementation expertise to deliver systems that improve operations and strengthen trust. The result is a public service environment that is more efficient, more responsive, and better prepared for the future.',
    ],
    faqs: [
      { question: 'Do public sector agencies need custom software solutions?', answer: 'Often yes. Public agencies frequently need systems tailored to their policy requirements, service models, data structures, and reporting obligations. Custom solutions can align technology with those realities more effectively than generic tools.' },
      { question: 'How do you ensure public service systems remain secure and accountable?', answer: 'We focus on role-based access, clear process logic, audit-ready records, and secure system design. This helps support governance, accountability, and operational continuity.' },
      { question: 'Can public sector technology improve service access for citizens?', answer: 'Yes. Better workflow design, digital portals, and accessible interfaces can reduce delays, improve transparency, and make it easier for citizens to access services and information.' },
    ],
  },
  {
    slug: 'enterprise-software-development',
    label: 'Enterprise Software Development',
    shortTitle: 'Enterprise Software Development',
    title: 'Enterprise Software Development Services | Axonix Technologies',
    description:
      'Enterprise software development services for organizations that need secure, scalable, and operationally aligned business systems.',
    h1: 'Enterprise software development that improves execution, visibility, and service performance.',
    intro:
      'Enterprise organizations depend on software systems that connect teams, processes, and data without creating friction. Axonix Technologies delivers enterprise software development services designed to improve operational execution, strengthen reporting, and support scalable growth. We build applications that help modern businesses manage data, automate work, and connect business-critical systems in ways that are practical and sustainable.',
    benefits: [
      'Business systems designed for scale, visibility, and performance',
      'Integrated data flows across operational teams and platforms',
      'Secure application architecture for growing enterprises',
      'High-value software that reduces manual complexity and delays',
    ],
    paragraphs: [
      'Enterprise software must do more than simply exist; it must support high-volume operations, cross-functional collaboration, and clear decision-making. Many organizations struggle with fragmented systems, incomplete reporting, or service bottlenecks caused by disconnected tools. Instead of adding more complexity, enterprise software should unify critical workflows and provide teams with a clearer picture of performance, risk, and execution. That is where strategic software development becomes valuable.',
      'At Axonix Technologies, we design enterprise systems around real business needs rather than generic templates. We begin by understanding how teams work, what information is required at each stage, and which integrations are necessary for smooth operations. This lets us design software that supports workflows, reporting, approvals, and operational visibility without creating additional administrative burden. The result is a system that actually matches how the business operates.',
      'Practical enterprise software also helps leadership act sooner. Dashboards, analytics, role-based access, and integrated data flows give decision-makers timely insight into performance, exceptions, and opportunities. Instead of relying on disconnected reports or time-consuming manual aggregation, teams can work from a common operational view. This leads to faster actions, fewer errors, and more consistent execution across departments.',
      'We also recognize that enterprise systems must be maintainable over time. Growth, restructuring, new regulations, and expanded service areas all require software that can evolve without creating long-term technical debt. Our architecture and implementation approach focuses on scalability, modular design, and maintainability. That helps organizations avoid expensive rework and ensures the software remains useful as the business changes.',
      'Security and reliability are especially important in enterprise environments. Business systems often hold sensitive data, support critical workflows, and connect with multiple platforms. We design software with secure practices, system resilience, and operational continuity in mind so organizations can trust the systems supporting their work. This enables safer scaling while reducing the risk of downtime, data issues, or inconsistent operations.',
      'If your organization is dealing with slow processes, disconnected tools, or a lack of operational visibility, enterprise software development can solve those challenges at the source. Axonix Technologies delivers custom solutions built for real business demands, from operational dashboards to full-scale process platforms. The outcome is better execution, stronger data visibility, and a technology foundation that helps the enterprise move forward with confidence.',
    ],
    faqs: [
      { question: 'What kinds of enterprise systems do you build?', answer: 'We commonly build operational dashboards, internal management applications, workflow systems, customer portals, data platforms, and system integrations that support a business’s day-to-day execution.' },
      { question: 'Can enterprise software be phased in gradually?', answer: 'Yes. Many organizations benefit from phased rollouts, especially where they need to provide continuity while introducing new workflows or replacing legacy tools.' },
      { question: 'How does enterprise software improve decision-making?', answer: 'By centralizing process data, standardizing reporting, and reducing manual effort, enterprise software provides leaders with better visibility into operations and performance.' },
    ],
  },
]

const blogPosts = [
  {
    slug: 'digital-transformation-roadmap',
    title: 'Digital Transformation Roadmap for Government and Enterprise Teams',
    description:
      'A practical digital transformation roadmap for organizations modernizing legacy systems, employee workflows, and public service delivery.',
    excerpt:
      'A step-by-step roadmap for building a digital transformation plan that improves visibility, automates repetitive work, and aligns technology with service goals.',
    hero: 'A practical roadmap for digital transformation that balances service delivery, operational efficiency, and long-term resilience.',
    takeaways: [
      'Start by mapping the highest-friction processes and service bottlenecks',
      'Design around user experience, staff capability, and governance requirements',
      'Deliver in phases so teams maintain continuity while modernizing',
      'Measure improvements with service performance and process efficiency metrics',
    ],
    sections: [
      'Digital transformation is most effective when it is framed as an operational improvement strategy, not just a technology refresh. Organizations often begin to modernize because of legacy system limitations, lack of visibility, manual bottlenecks, or service delays. A clear transformation roadmap helps leaders decide where to act first, which systems to replace or integrate, and how to measure the return on effort. Without that direction, modernization creates more complexity rather than less.',
      'The first step is to audit where work slows down and where service quality suffers. This could mean manual approvals, inconsistent reporting, duplicated data entry, lack of integration between core systems, or poor user experience for staff or citizens. These issues surface in many public and enterprise environments. By identifying the true root causes, teams can focus on the processes with the highest impact rather than pursuing scattered software purchases that do not align with operational priorities.',
      'A strong digital transformation roadmap also includes governance and accountability. Transformation work should be tied to real outputs such as faster service response times, reduced administrative burden, improved reporting accuracy, and stronger stakeholder confidence. It is important to define the metrics before implementation so the organization can track improvements objectively. This makes the strategy easier to defend and easier to scale as additional initiatives are introduced.',
      'The most sustainable transformation programs are phased. Instead of replacing everything at once, organizations often move in focused stages: simplifying workflows, consolidating operational data, modernizing access layers, automating repetitive processes, and improving reporting and oversight. This approach reduces disruption while still creating momentum. It also allows leadership to review progress, adapt to lessons learned, and refine the roadmap as the organization matures.',
      'Technology should support the mission, not distract from it. In public sector and enterprise contexts, that means digital systems must be secure, accessible, maintainable, and aligned with real user needs. A roadmap built around these principles tends to deliver more durable value. It improves internal performance, supports digital service quality, and gives teams a more confident path toward long-term modernization.',
    ],
  },
  {
    slug: 'workflow-automation-for-public-services',
    title: 'Workflow Automation for Public Services and Internal Operations',
    description:
      'How workflow automation reduces manual effort, improves accountability, and speeds up service delivery in government and enterprise operations.',
    excerpt:
      'A look at how workflow automation removes administrative friction and creates better visibility across approvals, requests, and internal operations.',
    hero: 'Workflow automation turns repetitive processes into faster, more accountable service operations.',
    takeaways: [
      'Automate repetitive tasks so teams can focus on exceptions and strategic work',
      'Create clearer approval trails and operational visibility',
      'Improve service turnaround times with consistent routing and reminders',
      'Reduce human error while keeping governance and oversight intact',
    ],
    sections: [
      'Many organizations experience similar operational frustrations: approvals are delayed, documents move through too many hands, and staff spend valuable time chasing updates rather than solving problems. Workflow automation addresses this by standardizing processes, routing requests automatically, and making service progress visible in real time. The result is not just faster processing; it is better operational reliability and a stronger experience for both staff and users.',
      'For public agencies and service-driven companies, workflow automation is especially valuable when requests or approvals need to move across teams. A request might need validation, review, escalation, and final clearance before completion. Without automation, that sequence often relies on manual follow-ups and inconsistent communication. A structured workflow removes that friction by assigning steps, triggering alerts, and ensuring the right actions happen in the correct order.',
      'This also improves data quality. When every step is captured in a structured process, organizations can monitor where delays occur and which tasks require intervention. That visibility leads to improved decision-making and more accurate reporting. It also helps teams identify policy or process gaps that may not be obvious in a manually managed flow.',
      'Workflow automation is most effective when businesses focus on process design before implementation. That means mapping the current process, identifying where exceptions arise, and clarifying how approvals should work. Once the workflow is well defined, the technology can support it consistently. This makes the automation effort much more effective than simply digitizing an old process without fixing the underlying friction.',
      'The opportunity is not just speed; it is accountability. A structured workflow creates a clear trail of who handled what and when. In regulated or public-facing environments, that auditability matters. It supports compliance, reduces operational confusion, and makes it easier to resolve disputes or follow-up on service requests. In short, automation improves both the experience and the integrity of the operation.',
    ],
  },
  {
    slug: 'custom-software-vs-off-the-shelf',
    title: 'When Custom Software Is the Better Choice Than Off-the-Shelf Platforms',
    description:
      'A practical evaluation of when custom software delivers more value than commercial platforms for operations, service delivery, and growth.',
    excerpt:
      'A guide to deciding whether custom software is the right fit when your workflows, reporting, and service model do not match standard software.',
    hero: 'Custom software becomes the smarter investment when business needs are unique and growth depends on operational clarity.',
    takeaways: [
      'Off-the-shelf platforms work well for standard processes, not specialized workflows',
      'Custom systems reduce friction when compliance and integration requirements are complex',
      'Software should match organizational needs, not the other way around',
      'Long-term flexibility often outweighs the upfront cost of a tailored solution',
    ],
    sections: [
      'Off-the-shelf software remains useful for organizations with standard processes and low customization needs. However, many government teams, enterprises, and growing service businesses face unique business rules, reporting structures, and operational workflows that standard platforms simply cannot adapt to without significant workarounds. In those cases, custom software is often the better choice because it is built around the organization rather than forcing the organization to change around the tool.',
      'A critical factor is process complexity. If a business relies on a workflow that is highly specific, integrates with multiple systems, or requires role-based control and audit visibility, then a custom application may be more effective. The software then supports how people actually work instead of forcing them into rigid templates with limited flexibility. This reduces friction and lowers the risk of poorly adopted systems.',
      'Another reason to choose custom software is long-term scalability. Businesses often outgrow the capabilities of generic software because their data volume, stakeholder needs, or service processes become more advanced. Rather than repeatedly patching around platform limitations, a tailored system can expand alongside the business. That gives leadership more control over reliability, security, and feature prioritization as the organization evolves.',
      'Custom software also creates a stronger strategic advantage when the organization wants a specific service experience or internal capability that cannot be matched by a standard product. For example, a public body may need a citizen workflow with a precise approval model, or an enterprise team may need a dashboard that integrates data from multiple internal sources. In both cases, custom software can deliver a clearer fit and a more effective result.',
      'The decision should not be based only on upfront cost. A standardized platform may cost less initially, but if it creates manual workarounds, integration problems, or governance issues, the total cost can be much higher over time. Custom software should be evaluated on operational fit, flexibility, maintainability, and long-term business value. For many organizations, that makes it the stronger investment.',
    ],
  },
]

const industryPages = [
  {
    slug: 'government-technology',
    label: 'Government Technology',
    title: 'Government Technology Solutions | Axonix Technologies',
    description:
      'Government technology solutions for agencies and public institutions seeking digital services, workflow automation, and secure modernization.',
    h1: 'Government technology solutions that improve public service delivery and operational accountability.',
    intro:
      'Public agencies need technology that helps them deliver faster, more transparent services without sacrificing governance or accountability. Axonix Technologies supports government teams with digital platforms, workflow modernization, and secure operational systems designed for public service excellence.',
    focusAreas: [
      'Digital citizen service platforms',
      'Workflow automation for approvals and service requests',
      'Reporting, dashboards, and operational visibility',
      'Secure modernization of legacy public systems',
    ],
    paragraphs: [
      'Government organizations face a unique mix of service expectations, policy constraints, and operational pressures. Citizens expect faster service access and better transparency, while internal teams need reliable infrastructure and clear accountability. Technology can help meet both goals, but only when it is designed around the realities of public operations and governance requirements.',
      'Axonix Technologies helps public-sector organizations modernize the tools they use every day. This may include digital service portals, workflow automation, document handling systems, internal operational dashboards, or secure modernization strategies for legacy systems. We design solutions that reduce delays, improve visibility, and provide a more consistent service experience for both staff and the public.',
      'Public sector digital transformation is not just about adopting software. It is about creating dependable systems that support service continuity, compliance, and public trust. We focus on operational clarity, measurable outcomes, and systems that are easy to maintain as policy or service demands evolve. That creates a stronger foundation for long-term service delivery improvement.',
    ],
    faqs: [
      { question: 'Why do government agencies need digital transformation?', answer: 'Government agencies need better service delivery, stronger visibility, and more efficient internal workflows. Digital systems help reduce delays, improve accountability, and support public trust.' },
      { question: 'Can legacy systems be modernized without disruption?', answer: 'Yes. We often recommend phased modernization that updates systems gradually while maintaining continuity for staff and service users.' },
      { question: 'What outcomes matter most in public-sector technology?', answer: 'The most important outcomes are service speed, data accuracy, accountability, transparency, and the ability to support growing demand without operational friction.' },
    ],
  },
  {
    slug: 'healthcare-technology',
    label: 'Healthcare Technology',
    title: 'Healthcare Technology Solutions | Axonix Technologies',
    description:
      'Healthcare technology services that improve patient workflows, operational visibility, and digital service delivery for modern care organizations.',
    h1: 'Healthcare technology systems that support safer, smarter, and more connected care delivery.',
    intro:
      'Healthcare organizations need systems that support both patient experience and operational reliability. Axonix Technologies works with health-focused organizations to build digital tools that streamline workflows, improve coordination, and strengthen service quality.',
    focusAreas: [
      'Operational workflow digitization',
      'Appointment and service process automation',
      'Internal visibility and reporting dashboards',
      'Secure digital service modernization',
    ],
    paragraphs: [
      'Healthcare environments depend on precision, coordination, and timely service. Manual processes, disconnected systems, and inconsistent workflows can slow down care delivery and create avoidable friction. Technology is most powerful here when it helps teams reduce administrative burden while supporting better patient experiences and stronger operational oversight.',
      'Axonix Technologies helps healthcare organizations simplify their digital operations through workflow automation, custom software, and service modernization. These systems can support internal coordination, patient communication, service requests, operational reporting, and process improvement activities that strengthen the efficiency of the organization.',
      'The right healthcare technology investment is not just about adopting new tools. It is about creating systems that support staff, improve visibility, and help the organization respond faster to operational and service challenges. That makes technology a practical lever for better resilience and better patient outcomes.',
    ],
    faqs: [
      { question: 'How can healthcare teams benefit from workflow automation?', answer: 'Automation can reduce repetitive administrative tasks, improve service routing, and ensure consistent follow-ups across operational teams.' },
      { question: 'Is custom software useful for healthcare operations?', answer: 'Yes. Many healthcare organizations need tailored workflows and reporting, especially when their processes differ from standard commercial platforms.' },
      { question: 'What should a healthcare technology strategy prioritize?', answer: 'Operational efficiency, service continuity, visibility, and secure digital service delivery are all critical to effective healthcare modernization.' },
    ],
  },
  {
    slug: 'education-technology',
    label: 'Education Technology',
    title: 'Education Technology Solutions | Axonix Technologies',
    description:
      'Education technology services that improve student services, internal operations, and digital administration for schools and institutions.',
    h1: 'Education technology solutions built for better administration, engagement, and service delivery.',
    intro:
      'Education institutions must balance student experience, academic operations, and internal process efficiency. We build digital solutions that help schools and institutions improve service quality and reduce administrative friction.',
    focusAreas: [
      'Student service and enrollment workflows',
      'Process automation for administration',
      'Reporting and operational dashboards',
      'Digital tools for public-facing services',
    ],
    paragraphs: [
      'Schools, colleges, and education organizations need technology that supports both learning and administration. When administrative workflows are slow or fragmented, it affects the experience for students, staff, and leadership. A better digital foundation can reduce duplication, improve access to information, and streamline service functions across the institution.',
      'Axonix Technologies helps educational organizations design and implement digital workflows that support enrollment, service requests, student engagement, and internal reporting. The goal is to create systems that simplify administration while improving transparency and service responsiveness for the people using the institution.',
      'Education technology should strengthen the user experience without creating unnecessary complexity. By focusing on the process design, data flow, and reporting needs of the institution, we build systems that help teams operate more effectively and serve students better.',
    ],
    faqs: [
      { question: 'What digital systems do education institutions need?', answer: 'Common needs include enrollment workflows, service request portals, administrative dashboards, and automation for repetitive student support processes.' },
      { question: 'Can education technology reduce administrative workload?', answer: 'Yes. Workflow automation and digital process design can dramatically reduce repetitive administrative tasks and improve overall institutional efficiency.' },
      { question: 'Is custom software useful in education?', answer: 'It is often valuable where institutions need tailored admission, support, or reporting workflows that generic tools cannot support properly.' },
    ],
  },
  {
    slug: 'enterprise-operations',
    label: 'Enterprise Operations',
    title: 'Enterprise Operations & Digital Systems | Axonix Technologies',
    description:
      'Enterprise operations solutions that improve process visibility, productivity, and business system performance for growing organizations.',
    h1: 'Enterprise operations technology built to improve performance, visibility, and execution.',
    intro:
      'Modern enterprises need software systems that help teams work clearly, scale reliably, and make better decisions. Axonix Technologies supports enterprise operations with digital tools that streamline internal processes and connect critical business systems.',
    focusAreas: [
      'Operational dashboards and reporting',
      'Internal workflow automation',
      'Custom business applications',
      'Integration and modernization of business systems',
    ],
    paragraphs: [
      'Enterprise organizations often rely on a mix of internal tools, spreadsheets, and legacy applications that do not work as a cohesive system. That creates inefficiencies, slows operations, and limits visibility for leadership. A unified operational technology strategy can improve workflow performance and reduce the friction that slows business execution.',
      'Axonix Technologies designs systems for operational clarity, centralizing data, automating repetitive work, and improving how teams coordinate. This can include custom dashboards, process automation, employee service portals, and enterprise application modernization work that helps the organization operate more effectively.',
      'The most valuable enterprise systems are those that reduce complexity without sacrificing reliability. We design them to be scalable, maintainable, and aligned with real operational requirements so the business can keep growing without being held back by disconnected software or inefficient processes.',
    ],
    faqs: [
      { question: 'What types of systems do enterprises need?', answer: 'These often include internal management systems, workflow automation, operational dashboards, process portals, and integration layers for critical business systems.' },
      { question: 'Why custom enterprise software is important?', answer: 'Because enterprise workflows often differ significantly from standard products, custom software helps fit the organization’s process model instead of forcing teams to adapt to the software.' },
      { question: 'How does software improve enterprise operations?', answer: 'It improves speed, reduces manual work, strengthens reporting, and gives teams better visibility across departments and business processes.' },
    ],
  },
  {
    slug: 'digital-transformation-consulting',
    label: 'Digital Transformation Consulting',
    title: 'Digital Transformation Consulting Services | Axonix Technologies',
    description:
      'Digital transformation consulting services that help organizations modernize workflows, systems, and service operations with measurable business value.',
    h1: 'Transformation consulting that aligns technology with service goals and operational realities.',
    intro:
      'Digital transformation requires a clear plan, not just software purchases. Axonix Technologies helps organizations assess operational bottlenecks, define modernization priorities, and build practical transformation roadmaps around real business goals.',
    focusAreas: [
      'Transformation strategy and roadmap design',
      'Workflow and process redesign',
      'Technology prioritization and modernization planning',
      'Operational KPI and value measurement',
    ],
    paragraphs: [
      'The most successful transformation programs start with identifying where the business truly loses time, trust, or efficiency. That usually involves more than software—it requires reviewing the service model, the process design, and the operational culture around it. A strong transformation strategy starts with the core problem and turns it into a roadmap for change.',
      'Axonix Technologies supports leadership teams in mapping digital opportunities, defining modernization priorities, and designing phased implementation plans. This makes it easier to invest where the impact is highest and to maintain continuity while the organization changes.',
      'Transformation is most sustainable when it is measurable. We help organizations identify the metrics that matter, whether that is turnaround time, reporting quality, process consistency, staffing efficiency, or service satisfaction. This keeps the effort grounded in clear operational value.',
    ],
    faqs: [
      { question: 'What is digital transformation consulting?', answer: 'It is the strategy and planning function that evaluates current systems, processes, and business goals to define a pragmatic modernization roadmap.' },
      { question: 'How is transformation measured?', answer: 'By measuring improvements in service speed, process quality, automation results, visibility, and organizational capacity to scale efficiently.' },
      { question: 'Why is phased transformation better?', answer: 'It allows teams to modernize without interrupting service and gives decision-makers a way to review progress before additional investment.' },
    ],
  },
]

const locationPages = [
  {
    slug: 'delhi-ncr',
    city: 'Delhi NCR',
    title: 'Software Company in Delhi NCR | Axonix Technologies',
    description:
      'Custom software development and digital transformation services in Delhi NCR for government, enterprise, and service-focused organizations.',
    h1: 'Software development company in Delhi NCR helping businesses modernize operations and digital services.',
    intro:
      'Businesses and institutions in Delhi NCR need reliable digital systems that support service delivery, operational efficiency, and growth. Axonix Technologies provides custom software and transformation support to organizations across the region.',
    focusAreas: [
      'Custom software development in Delhi NCR',
      'Digital transformation consulting for regional organizations',
      'Workflow automation and internal process modernization',
      'Public sector and enterprise digital service upgrades',
    ],
    paragraphs: [
      'Delhi NCR is home to one of the most dynamic business and public service environments in India, with organizations needing technology that keeps pace with rapid operational demands. Whether you are in government, enterprise, healthcare, education, or service delivery, the need for reliable digital systems is growing. Custom software and digital transformation support can provide the foundation for more efficient operations and better stakeholder experience.',
      'Axonix Technologies works with organizations across Delhi NCR to improve service workflows, automate repetitive processes, and modernize legacy systems. We focus on practical solutions built around each client’s goals, operational realities, and growth roadmap. The result is software that supports business continuity and service quality without adding excessive complexity.',
      'For companies in Delhi NCR, local project support and operational alignment matter just as much as technical capability. We design systems that integrate with existing processes, improve visibility, and create a stronger digital foundation for long-term scalability.',
    ],
    faqs: [
      { question: 'Do you provide custom software services in Delhi NCR?', answer: 'Yes. We support clients across Delhi NCR with custom software development, workflow automation, and digital modernization projects.' },
      { question: 'Which industries do you serve in Delhi NCR?', answer: 'We support public sector, enterprise, education, healthcare, and service-focused organizations seeking digital operational improvements.' },
      { question: 'Can you help modernize legacy systems in Delhi NCR?', answer: 'Yes. We design phased modernization strategies to reduce operational disruption while improving system performance and service delivery.' },
    ],
  },
  {
    slug: 'mumbai',
    city: 'Mumbai',
    title: 'Custom Software Company in Mumbai | Axonix Technologies',
    description:
      'Custom software and digital transformation services in Mumbai for enterprises and public institutions improving service efficiency and system resilience.',
    h1: 'Custom software company in Mumbai for digital modernization and operational efficiency.',
    intro:
      'Mumbai businesses and institutions need systems that support high-volume operations, better service coordination, and long-term resilience. Axonix Technologies helps organizations across the city build digital systems that improve execution and accountability.',
    focusAreas: [
      'Enterprise software for Mumbai businesses',
      'Operational workflow automation',
      'Public service modernization support',
      'Scalable digital systems for growing teams',
    ],
    paragraphs: [
      'Mumbai hosts a mix of established enterprises, public institutions, and fast-growing service organizations. That creates a strong need for software systems that can support scale without adding operational friction. Custom digital platforms and process automation help teams reduce delays, improve visibility, and support more consistent service delivery.',
      'Axonix Technologies partners with organizations in Mumbai to design and deliver software solutions that match their operational realities. Whether the need is workflow automation, dashboard reporting, internal tools, or broader digital transformation, we focus on systems that support practical business outcomes and long-term maintainability.',
      'A strong digital foundation helps Mumbai-based organizations remain competitive and service-focused while managing complexity. We build systems with that goal in mind—clear operational processes, scalable architecture, and measurable business value.',
    ],
    faqs: [
      { question: 'Do you work with businesses in Mumbai?', answer: 'Yes. We support Mumbai organizations with custom software, workflow systems, and transformation projects that improve business operations.' },
      { question: 'Why choose custom software in Mumbai?', answer: 'Because city-based organizations often need tailored systems to support unique workflows, integrations, and service expectations.' },
      { question: 'Can you improve internal business workflows in Mumbai?', answer: 'Yes. Workflow automation and system optimization can make processes quicker, more transparent, and easier to manage as operations scale.' },
    ],
  },
  {
    slug: 'bangalore',
    city: 'Bangalore',
    title: 'Technology Partner in Bangalore | Axonix Technologies',
    description:
      'Digital transformation and technology services in Bangalore for businesses seeking automation, custom software, and scalable digital systems.',
    h1: 'Technology partner in Bangalore for scalable software and smarter business systems.',
    intro:
      'Bangalore is a center of digital innovation, and organizations here often need software platforms that support speed, operational clarity, and scalable business growth. Axonix Technologies helps companies build digital systems that match those requirements.',
    focusAreas: [
      'Enterprise technology modernization',
      'Custom software and internal system development',
      'Automation and data visibility',
      'Digital transformation roadmaps',
    ],
    paragraphs: [
      'Organizations in Bangalore operate in highly competitive and fast-moving markets, where digital capability directly influences performance. Many teams need systems that support fast execution, better decision-making, and operational consistency. Custom software and workflow modernization are often the most effective way to achieve that without overcomplicating the technology stack.',
      'Axonix Technologies helps Bangalore-based organizations design and implement business systems built around actual workflows, service demands, and growth goals. We focus on systems that are practical, maintainable, and aligned with how teams already operate.',
      'Whether the need is a workflow platform, a custom application, or a broader modernization strategy, the goal is the same: create a digital foundation that helps the business move faster and more confidently.',
    ],
    faqs: [
      { question: 'Do you work with businesses in Bangalore?', answer: 'Yes. We partner with Bangalore-based organizations across multiple sectors to improve software systems and operational processes.' },
      { question: 'What services are popular in Bangalore?', answer: 'Custom software development, enterprise workflow automation, dashboarding, and digital transformation planning are widely relevant for growing businesses.' },
      { question: 'Can you support scaling organizations in Bangalore?', answer: 'Yes. We design digital systems that can scale with the organization while reducing local process complexity and operational friction.' },
    ],
  },
  {
    slug: 'hyderabad',
    city: 'Hyderabad',
    title: 'Software Development Company in Hyderabad | Axonix Technologies',
    description:
      'Software development and transformation services in Hyderabad for organizations building more resilient digital operations and service systems.',
    h1: 'Software development support in Hyderabad for digital modernization and efficient operations.',
    intro:
      'Hyderabad businesses and institutions need software systems that support rapid growth, process standardization, and better service execution. Axonix Technologies helps transform those operational needs into secure, scalable digital solutions.',
    focusAreas: [
      'Custom business software',
      'Workflow automation and reporting',
      'Operational modernization',
      'Digital strategy for growing organizations',
    ],
    paragraphs: [
      'Hyderabad is increasingly home to organizations that need stronger digital infrastructure to support growth, service quality, and internal efficiency. The challenge is often not a lack of ambition but a need for systems that keep pace with operational complexity. A focused digital approach provides a way to streamline work without compromising service standards.',
      'Axonix Technologies partners with Hyderabad teams to improve how core systems, workflows, and service operations function. We design software around real business requirements so it helps teams move faster, coordinate better, and make decisions with stronger visibility.',
      'The right local technology partner helps organizations become more adaptable while maintaining operational continuity. That is the foundation we build around for businesses and institutions in Hyderabad.',
    ],
    faqs: [
      { question: 'Do you support Hyderabad clients?', answer: 'Yes. We provide software and transformation services to organizations across Hyderabad seeking refined digital operations and custom business systems.' },
      { question: 'What is a good first step for Hyderabad businesses?', answer: 'Review current workflows, pain points, and modernization priorities to identify which systems and processes create the greatest business value.' },
      { question: 'Can software help scale a Hyderabad business?', answer: 'Yes. Custom systems and operational automation can support scale while reducing bottlenecks and manual work.' },
    ],
  },
  {
    slug: 'pune',
    city: 'Pune',
    title: 'Software Services in Pune | Axonix Technologies',
    description:
      'Technology services in Pune for organizations seeking custom software development, workflow automation, and digital modernization support.',
    h1: 'Technology services in Pune helping teams modernize operations and service delivery.',
    intro:
      'Pune organizations need practical technology solutions that improve productivity, service quality, and operational resilience. Axonix Technologies helps clients build digital systems that support business continuity and future growth.',
    focusAreas: [
      'Workflow automation and process redesign',
      'Custom software development',
      'Business reporting and operational systems',
      'Digital transformation strategy',
    ],
    paragraphs: [
      'Pune is a strong business and innovation hub, which means organizations here often need software solutions that are efficient, well-designed, and aligned with growth goals. A strong digital foundation supports service quality and internal execution, especially when teams are managing complex processes or multiple stakeholders.',
      'Axonix Technologies works with Pune-based organizations to improve internal systems, automate workloads, and modernize digital experiences. We focus on software that supports operational clarity and gives team leaders better access to the information they need to act.',
      'The result is a more resilient and adaptable organization, with software that improves service quality and supports sustainable long-term growth.',
    ],
    faqs: [
      { question: 'Do you work with Pune clients?', answer: 'Yes. We support Pune-based organizations in custom software development, digital transformation, and workflow optimization.' },
      { question: 'Why do Pune businesses need custom IT support?', answer: 'Because many organizations need digital systems designed around their workflows and scale requirements rather than generic solutions.' },
      { question: 'Can digital transformation help Pune teams?', answer: 'Yes. It can reduce manual effort, increase visibility, and improve how teams deliver value to clients and internal stakeholders.' },
    ],
  },
  {
    slug: 'chennai',
    city: 'Chennai',
    title: 'Software Development Company in Chennai | Axonix Technologies',
    description:
      'Digital transformation and custom software services in Chennai for businesses, institutions, and growing enterprises looking for efficient operational systems.',
    h1: 'Software development company in Chennai helping organizations modernize processes and digital operations.',
    intro:
      'Chennai businesses and institutions need digital systems that support growth, service quality, and operational consistency. Axonix Technologies helps teams build modern software that improves efficiency and long-term scalability.',
    focusAreas: [
      'Custom software development in Chennai',
      'Workflow automation and reporting systems',
      'Digital modernization for growing teams',
      'Operational strategy and process optimization',
    ],
    paragraphs: [
      'Chennai is a major business and industrial center, and organizations here often need solutions that can support scale without introducing operational friction. Digital systems help teams manage growing complexity while improving service quality and business continuity.',
      'Axonix Technologies works with organizations across Chennai to design software and process solutions that are practical, maintainable, and aligned with business goals. We focus on workflow improvement, operational visibility, and software that reduces the burden of manual work.',
      'For companies in Chennai, smart technology is not just an upgrade; it is an enabler of better execution, clearer decision-making, and stronger service delivery over time.',
    ],
    faqs: [
      { question: 'Do you provide software services in Chennai?', answer: 'Yes. We support Chennai-based companies and institutions with custom development, workflow automation, and digital transformation planning.' },
      { question: 'Why is custom software relevant in Chennai?', answer: 'Because growing organizations often need systems tailored to their operational rules, reporting needs, and service workflows.' },
      { question: 'Can software improve operational efficiency in Chennai?', answer: 'Yes. Workflow automation and better system design can reduce delays, increase visibility, and support business scalability.' },
    ],
  },
  {
    slug: 'saudi-arabia',
    city: 'Saudi Arabia',
    title: 'Software Company in Saudi Arabia | Axonix Technologies',
    description:
      'Custom software and digital transformation services in Saudi Arabia for institutions, enterprises, and public-sector organizations seeking scalable digital systems.',
    h1: 'Software company in Saudi Arabia supporting digital modernization and business transformation.',
    intro:
      'Saudi organizations are accelerating digital transformation across public, private, and enterprise sectors. Axonix Technologies helps companies and institutions build software systems that improve service delivery and operational performance.',
    focusAreas: [
      'Digital transformation in Saudi Arabia',
      'Enterprise software and workflow systems',
      'Public sector digital service modernization',
      'Operational automation and reporting',
    ],
    paragraphs: [
      'Saudi Arabia is investing heavily in digital infrastructure, service modernization, and business transformation. Organizations in the region need software that supports scale, governance, and stronger digital service quality. The right digital systems can improve operational execution while making complex services easier to manage and monitor.',
      'Axonix Technologies supports Saudi businesses and institutions with custom software development, workflow automation, and transformation strategy. We help organizations align technology with their service goals, operating model, and growth priorities so digital initiatives create real value instead of friction.',
      'Whether the need is a government-facing portal, internal operational platform, or enterprise software system, our approach is practical, scalable, and built for measurable business impact.',
    ],
    faqs: [
      { question: 'Do you provide software services in Saudi Arabia?', answer: 'Yes. We support organizations across Saudi Arabia with custom software, digital transformation planning, and workflow optimization services.' },
      { question: 'Which sectors do you serve in Saudi Arabia?', answer: 'We support public sector, enterprise, healthcare, education, and service-focused organizations with digital modernization needs.' },
      { question: 'Can you help digitalize business processes in Saudi Arabia?', answer: 'Yes. We design digital workflows and system solutions that improve visibility, service quality, and operational efficiency.' },
    ],
  },
  {
    slug: 'riyadh',
    city: 'Riyadh',
    title: 'Software Services in Riyadh | Axonix Technologies',
    description:
      'Digital transformation and software services in Riyadh for organizations improving service delivery, workflows, and operational systems.',
    h1: 'Software and digital modernization services in Riyadh for efficient business operations.',
    intro:
      'Riyadh organizations need digital systems that support city-scale operations, public services, and enterprise growth. Axonix Technologies helps clients modernize workflows and software systems to better serve users and teams.',
    focusAreas: [
      'Public and enterprise system modernization',
      'Automation and document workflow systems',
      'Operational dashboards and reporting',
      'Custom software solutions for growing organizations',
    ],
    paragraphs: [
      'In Riyadh, organizations are increasingly focused on digital readiness, service efficiency, and technology-driven growth. The challenge is balancing modernization with operational continuity and governance. A practical digital approach supports better service outcomes while keeping organization-wide operations stable.',
      'Axonix Technologies partners with Riyadh-based teams to improve internal workflows, automate repetitive processes, and build the custom systems needed for service and business growth. We place emphasis on maintainability, usability, and value creation.',
      'This makes digital transformation more practical and more useful for organizations that need to improve performance without adding unnecessary complexity.',
    ],
    faqs: [
      { question: 'Do you support Riyadh organizations?', answer: 'Yes. We help Riyadh businesses and public institutions modernize workflows and improve software-backed operations.' },
      { question: 'Which types of projects fit Riyadh clients?', answer: 'Custom software, transformation planning, service automation, and internal operational systems are common priorities.' },
      { question: 'Why does Riyadh need digital modernization?', answer: 'Because organizations need systems that support service growth, transparency, operational consistency, and long-term agility.' },
    ],
  },
  {
    slug: 'jeddah',
    city: 'Jeddah',
    title: 'Software Development in Jeddah | Axonix Technologies',
    description:
      'Custom software and digital transformation support in Jeddah for public sector, enterprise, and service-oriented organizations.',
    h1: 'Software development support in Jeddah for smarter service and operational systems.',
    intro:
      'Jeddah companies and institutions need software systems that improve internal efficiency, customer service quality, and digital continuity. Axonix Technologies supports organizations seeking more resilient and scalable digital operations.',
    focusAreas: [
      'Custom software projects in Jeddah',
      'Workflow automation and public-service modernization',
      'Reporting and operational visibility',
      'Transformation strategy for business growth',
    ],
    paragraphs: [
      'Jeddah organizations often need to balance service expansion with operational reliability. Software systems can improve this balance by automating routine tasks, clarifying decision-making, and supporting more consistent service delivery across functions.',
      'Axonix Technologies develops practical software solutions for organizations in Jeddah, with emphasis on process clarity, maintainability, and real-world business value. These systems become more than tools; they become operational infrastructure for growth and better service delivery.',
      'Our work helps teams modernize at a realistic pace, improving service quality while reducing the burden of manual or disconnected processes.',
    ],
    faqs: [
      { question: 'Do you work in Jeddah?', answer: 'Yes. We assist Jeddah organizations with software, transformation, and digital workflow projects aligned to operational priorities.' },
      { question: 'What businesses benefit most?', answer: 'Public services, enterprise teams, and organizations with growing operational complexity usually benefit most from custom digital systems.' },
      { question: 'Can you assist with process automation in Jeddah?', answer: 'Yes. We build systems that automate approvals, service flows, reporting, and operational coordination to reduce delays.' },
    ],
  },
  {
    slug: 'dubai',
    city: 'Dubai',
    title: 'Digital Transformation Company in Dubai | Axonix Technologies',
    description:
      'Digital transformation and software services in Dubai for organizations seeking scalable systems, automation, and operational modernization.',
    h1: 'Digital transformation support in Dubai for performance-driven business and service modernization.',
    intro:
      'Dubai organizations operate in a highly competitive environment where digital capability can differentiate service quality and operational performance. Axonix Technologies supports the city’s businesses with custom systems and transformation strategy.',
    focusAreas: [
      'Enterprise software in Dubai',
      'Workflow automation for growing organizations',
      'Business digital transformation planning',
      'Operational visibility and reporting',
    ],
    paragraphs: [
      'Dubai businesses are often focused on speed, quality, and adaptability. Those goals depend on having software systems that remove friction, improve visibility, and support the organization’s service model. Digital transformation is a practical lever for operational performance and long-term resilience.',
      'Axonix Technologies partners with Dubai-based organizations to improve internal systems, automate repetitive processes, and build custom software where standard tools do not fit. We focus on solutions that are maintainable, scalable, and aligned with real business needs.',
      'Whether the goal is enterprise modernization, a new operational platform, or service workflow optimization, we help organizations reduce complexity and improve execution without unnecessary disruption.',
    ],
    faqs: [
      { question: 'Do you serve Dubai clients?', answer: 'Yes. We support Dubai organizations with software strategy, custom development, digital transformation, and workflow modernization services.' },
      { question: 'What types of digital projects are common in Dubai?', answer: 'Operational dashboards, workflow systems, internal portals, service automation, and modernization of legacy processes are common areas of need.' },
      { question: 'Why is custom software valuable in Dubai?', answer: 'Because fast-moving businesses and institutions often need systems tailored to their service model, compliance, and operational complexity.' },
    ],
  },
  {
    slug: 'abu-dhabi',
    city: 'Abu Dhabi',
    title: 'Software Services in Abu Dhabi | Axonix Technologies',
    description:
      'Software and digital transformation solutions in Abu Dhabi for organizations seeking operational excellence and scalable business systems.',
    h1: 'Software and transformation support in Abu Dhabi for modern, resilient organizations.',
    intro:
      'Abu Dhabi organizations increasingly rely on digital systems to support business continuity, public service quality, and long-term strategic growth. Axonix Technologies provides the software design and modernization support required to make that shift practical.',
    focusAreas: [
      'Digital strategy and modernization planning',
      'Custom software development',
      'Internal process automation',
      'Operational dashboards and governance tools',
    ],
    paragraphs: [
      'The public and private sectors in Abu Dhabi operate in a high-expectation environment where service quality and transparency matter. Digital tools can help organizations deliver better experiences while also improving operational control and reporting quality.',
      'Axonix Technologies works with Abu Dhabi organizations to design systems that support real operational goals: faster workflows, better data visibility, fewer manual bottlenecks, and a clearer path to sustainable digital growth.',
      'By focusing on process design and maintainable technology, we help organizations build digital capabilities that are aligned with long-term goals instead of quick fixes.',
    ],
    faqs: [
      { question: 'Do you support Abu Dhabi projects?', answer: 'Yes. We help Abu Dhabi organizations plan and deliver transformation, custom software, and workflow improvements aligned to business goals.' },
      { question: 'How do you help Abu Dhabi teams?', answer: 'By improving operational visibility, automating repetitive work, and modernizing software systems with a practical and scalable approach.' },
      { question: 'Is custom software useful for Abu Dhabi organizations?', answer: 'Yes, especially where business workflows, governance, or integrations are more complex than standard applications can accommodate.' },
    ],
  },
  {
    slug: 'doha',
    city: 'Doha',
    title: 'Software Solutions in Doha | Axonix Technologies',
    description:
      'Digital transformation and software solutions in Doha for public organizations, enterprises, and service-driven businesses seeking better systems.',
    h1: 'Software and transformation services in Doha designed for scalable growth and service quality.',
    intro:
      'Doha organizations need digital tools that support modern service delivery, streamlined operations, and long-term planning. Axonix Technologies helps public and private organizations adopt software systems that fit their needs and goals.',
    focusAreas: [
      'Workflow modernization and digital service tools',
      'Custom software for operations and service delivery',
      'Reporting and business intelligence systems',
      'Transformation planning and implementation',
    ],
    paragraphs: [
      'Digital transformation has become a strategic requirement for organizations in Doha, particularly when they need to improve service experience while managing operational complexity. The right software can support both goals by improving visibility, standardizing workflows, and reducing unnecessary administrative work.',
      'Axonix Technologies supports Doha-based organizations with software and transformation services designed around real business priorities. We create systems that fit operational needs, support governance, and allow the organization to evolve with confidence.',
      'This helps teams move from fragmented digital processes to a more reliable, service-focused model based on data, automation, and systematic improvement.',
    ],
    faqs: [
      { question: 'Do you work in Doha?', answer: 'Yes. We support Doha organizations with digital transformation planning, custom software development, and operational process modernization.' },
      { question: 'What matters most to Doha organizations?', answer: 'Service efficiency, reporting quality, automation, and the ability to modernize without disrupting essential operations.' },
      { question: 'Can software help expand public and business services?', answer: 'Yes. Digital systems can support better service access, improved visibility, and greater operational consistency for growing organizations.' },
    ],
  },
  {
    slug: 'singapore',
    city: 'Singapore',
    title: 'Technology Services in Singapore | Axonix Technologies',
    description:
      'Technology and digital transformation services in Singapore for organizations improving operations, customer experience, and software performance.',
    h1: 'Technology services in Singapore helping businesses modernize and scale effectively.',
    intro:
      'Singapore businesses and institutions require agile, tech-enabled systems that improve service quality and support growth. Axonix Technologies helps organizations build and modernize software that supports smart operations and decision-making.',
    focusAreas: [
      'Digital transformation in Singapore',
      'Custom business applications',
      'Workflow automation and reporting',
      'Operational modernization strategy',
    ],
    paragraphs: [
      'Singapore is a highly digital and performance-focused market, where business systems must support speed, precision, and scalability. Organizations here often need software that aligns with operational complexity and service expectations while maintaining maintainability.',
      'Axonix Technologies helps Singapore-based organizations improve internal workflows and digital service capabilities through practical transformation planning and custom software delivery. We focus on systems that create measurable improvements rather than just new layers of technology.',
      'By aligning software to the business’s needs, we help organizations work faster, with better visibility and a clearer path to sustainable growth.',
    ],
    faqs: [
      { question: 'Do you serve Singapore clients?', answer: 'Yes. We support Singapore-based organizations with custom software, workflow automation, and digital transformation initiatives.' },
      { question: 'What is your approach in Singapore?', answer: 'We focus on process clarity, business alignment, and practical technology systems that improve operational outcomes.' },
      { question: 'Can software support growth in Singapore?', answer: 'Yes. The right systems can improve efficiency, visibility, and service quality as organizations scale.' },
    ],
  },
]

const stats = [
  { value: '120+', label: 'projects delivered' },
  { value: '15+', label: 'sectors supported' },
  { value: '99%', label: 'client retention' },
  { value: '24/7', label: 'operational support' },
]

const valuePillars = [
  {
    title: 'Strategy before software',
    text: 'We align each engagement to real operational pain points, service goals, and compliance realities before choosing a digital solution.',
  },
  {
    title: 'Public-sector and enterprise fit',
    text: 'Our systems are designed for accountability, transparency, process clarity, and long-term maintainability in regulated environments.',
  },
  {
    title: 'Operational modernization',
    text: 'We improve workflows, reporting, and digital service experiences so teams spend less time on manual work and more on value creation.',
  },
  {
    title: 'Support that lasts',
    text: 'From rollout to post-launch refinement, we help organizations keep systems stable, secure, and adaptable as needs evolve.',
  },
]

const companyStory = [
  {
    title: 'Discovery-led design',
    text: 'We begin by studying the actual work, systems, and service bottlenecks before drawing up a roadmap or writing code.',
  },
  {
    title: 'Operationally practical technology',
    text: 'Our solutions are designed for daily use, workflow clarity, and accountability rather than novelty for its own sake.',
  },
  {
    title: 'Measured outcomes',
    text: 'We help organizations track service quality, turnaround times, manual effort, and reporting improvements after implementation.',
  },
]

const outcomeHighlights = [
  {
    title: 'Simplified citizen and employee journeys',
    text: 'We redesign service flows to make information access, approvals, and request handling clearer and faster.',
  },
  {
    title: 'Better visibility for leadership',
    text: 'Dashboards and reporting systems give teams a reliable view of performance, bottlenecks, and service quality.',
  },
  {
    title: 'Automation that reduces friction',
    text: 'Routine approvals, alerts, and document workflows are structured so staff can focus on exceptions instead of repetitive admin work.',
  },
]

const homeFaqs = [
  {
    question: 'What kinds of organizations do you work with?',
    answer: 'We support government agencies, public institutions, enterprises, healthcare organizations, educational bodies, and service-focused businesses that need digital systems designed around operational realities.',
  },
  {
    question: 'How do you approach a project?',
    answer: 'We start with discovery, process mapping, and business goals. Then we design a solution, validate scope, build the system in phases where needed, and support delivery with clear reporting and follow-up.',
  },
  {
    question: 'Can Axonix help modernize legacy systems?',
    answer: 'Yes. We often work on legacy modernization, workflow redesign, integration planning, and phased technology upgrades that improve performance without disrupting essential services.',
  },
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
          <NavLink to="/ai-solutions">AI Solutions</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/industries">Industries</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <NavLink to="/contact" className="primary-btn">
          Book a Consultation
        </NavLink>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-solutions" element={<AiSolutionsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {servicePages.map((service) => (
          <Route
            key={service.slug}
            path={`/services/${service.slug}`}
            element={<ServiceLandingPage service={service} />}
          />
        ))}
        <Route path="/industries" element={<IndustriesPage />} />
        {industryPages.map((industry) => (
          <Route
            key={industry.slug}
            path={`/industries/${industry.slug}`}
            element={<IndustryLandingPage industry={industry} />}
          />
        ))}
        <Route path="/locations" element={<LocationsPage />} />
        {locationPages.map((location) => (
          <Route
            key={location.slug}
            path={`/locations/${location.slug}`}
            element={<LocationLandingPage location={location} />}
          />
        ))}
        <Route path="/insights" element={<InsightsPage />} />
        {blogPosts.map((post) => (
          <Route
            key={post.slug}
            path={`/insights/${post.slug}`}
            element={<BlogPostPage post={post} />}
          />
        ))}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <AdSenseBlock />

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

function AdSenseBlock() {
  return (
    <div className="adsense-wrap" aria-label="Advertisement">
      <div className="ad-label">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: '90px' }}
        data-ad-client="ca-pub-3352721202761209"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

function HomePage() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <>
      <Seo
        title="Axonix Technologies | Custom Software Development & Digital Transformation"
        description="Axonix Technologies helps government agencies, public institutions, and enterprises with custom software development, workflow automation, digital transformation strategy, and cloud modernization services."
      />
      <main>
      <section className="hero-section reveal">
        <div className="hero-copy">
          <p className="eyebrow">AI innovation, software engineering, and digital transformation</p>
          <h1>Building the next era of intelligent systems for public service and enterprise growth.</h1>
          <p className="hero-text">
            Axonix Technologies helps government agencies, public institutions, and businesses design
            practical AI solutions, custom software systems, and digital transformation strategies that
            modernize operations, improve decision-making, and unlock better service outcomes.
          </p>

          <div className="hero-actions">
            <NavLink to="/services" className="primary-btn">Explore Services</NavLink>
            <NavLink to="/contact" className="secondary-btn">Talk to Our Team</NavLink>
          </div>

          <p className="hero-text">
            From AI-powered workflow automation and intelligent service platforms to custom enterprise
            software, digital government systems, and cloud modernization, we create technology that is
            efficient, accountable, secure, and ready for the AI era.
          </p>

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

      <section className="content-section reveal">
        <div className="section-heading">
          <p className="eyebrow">AI services</p>
          <h2>Invent the next AI era with practical strategy, automation, and intelligent systems that work in the real world.</h2>
        </div>

        <div className="ai-grid">
          {aiServices.map((item) => (
            <article key={item.title} className="ai-card">
              <span className="solution-index">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="cta-banner">
          <div>
            <p className="eyebrow">AI strategy starts here</p>
            <h3>Build Your AI Strategy</h3>
          </div>
          <NavLink to="/ai-solutions" className="primary-btn">Invent the Next AI Era</NavLink>
        </div>
      </section>

      <section className="content-section reveal">
        <div className="story-layout">
          <div className="story-copy">
            <p className="eyebrow">Why organizations choose Axonix</p>
            <h2>We help public and private organizations modernize the systems that shape service quality and operational performance.</h2>
            <p>
              Axonix Technologies works with government agencies, enterprises, healthcare organizations,
              education providers, and growth-focused businesses that need practical digital solutions.
              Our work sits at the intersection of strategy, software engineering, workflow design, and
              service modernization. We focus on the systems that create friction in the real world: manual
              approvals, fragmented reporting, legacy processes, slow service response, and disconnected data.
            </p>
            <p>
              Rather than chasing technology trends, we build solutions around operational reality. That
              means understanding where the work breaks down, what stakeholders need to see, and how a
              better system improves trust, accountability, and service outcomes over time. Every engagement
              aims to create a long-term digital capability, not just a one-time software project.
            </p>
          </div>

          <div className="story-grid">
            {companyStory.map((item) => (
              <article key={item.title} className="story-card">
                <span className="solution-index">A</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Why Axonix</p>
          <h2>Clear technology strategy paired with delivery that supports real operational outcomes.</h2>
        </div>

        <div className="feature-grid">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="feature-card">
              <span className="solution-index">A</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section alt-section reveal">
        <div className="section-heading narrow">
          <p className="eyebrow">Outcome-focused delivery</p>
          <h2>We help organizations simplify service workflows and improve decision-making with better digital systems.</h2>
        </div>

        <div className="outcome-grid">
          {outcomeHighlights.map((item) => (
            <article key={item.title} className="outcome-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
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
          {solutions.map((item) => {
            const route = servicePages.find((page) => page.label === item.title)?.slug
            return (
              <NavLink key={item.title} to={route ? `/services/${route}` : '/services'} className="content-card-link">
                <article className="solution-card">
                  <span className="solution-index">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </NavLink>
            )
          })}
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
          <h2>A practical roadmap from digital strategy to deployment and continuous improvement.</h2>
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

      <section className="content-section reveal ">
        <div className="section-heading">
          <p className="eyebrow">Insights & strategy</p>
          <h2>Practical guidance for digital transformation, automation, and public service modernization.</h2>
        </div>

        <div className="insights-grid">
          {blogPosts.map((post) => (
            <NavLink key={post.slug} to={`/insights/${post.slug}`} className="content-card-link">
              <article className="solution-card insight-card">
                <span className="solution-index">IN</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            </NavLink>
          ))}
        </div>
      </section>

      <section className="content-section reveal">
        <div className="section-heading center-heading">
          <p className="eyebrow">Frequently asked questions</p>
          <h2>Questions organizations ask before starting a digital transformation project.</h2>
        </div>

        <div className="faq-list home-faq-list">
          {homeFaqs.map((item) => (
            <div key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    </>
  )
}

function AiSolutionsPage() {
  return (
    <>
      <Seo
        title="AI Solutions | Axonix Technologies"
        description="Explore AI strategy, intelligent automation, AI experience design, and practical AI implementation services for public, enterprise, and digital-first organizations."
      />
      <main className="page-content service-landing-page reveal">
        <header className="service-hero">
          <p className="eyebrow">Axonix Technologies</p>
          <h1>AI solutions designed to modernize operations and help organizations lead the next AI era.</h1>
          <p className="hero-text">
            The next AI era is not just about experimentation. It is about practical innovation that improves service delivery, automates repetitive work, and helps teams make better decisions with trusted, secure, and measurable technology systems.
          </p>
        </header>

        <div className="service-cta-row">
          <NavLink to="/contact" className="primary-btn">Build Your AI Strategy</NavLink>
          <NavLink to="/services" className="secondary-btn">Explore other services</NavLink>
        </div>

        <section className="service-article">
          <p>
            AI adoption works best when it aligns to business reality. Organizations often struggle with fragmented data, inconsistent workflows, manual reporting, and slow service operations. That is where AI solutions become valuable: they simplify complexity, surface insight, automate repetitive work, and create a better experience for both staff and the people they serve.
          </p>
          <p>
            Axonix Technologies works with public institutions, enterprises, and growth-focused organizations to turn AI from a concept into a practical capability. We support AI roadmapping, intelligent workflow design, document and decision support systems, and AI-enabled service experiences that are grounded in governance, business value, and long-term maintainability.
          </p>
          <p>
            Whether your need is AI-assisted service triage, workflow optimization, data enrichment, or customer-facing intelligent experiences, our approach is designed to help your organization move responsibly into the AI era with clarity and confidence.
          </p>
        </section>

        <div className="service-benefits">
          <h2>What AI solutions can unlock</h2>
          <ul>
            <li>Faster operational decisions with AI-assisted analysis and prioritization</li>
            <li>Reduced manual effort through task classification, routing, and workflow automation</li>
            <li>Better stakeholder experiences through conversational and intelligent service interfaces</li>
            <li>More strategic use of data with predictive insight and reporting support</li>
            <li>Improved governance through structured AI implementation and human oversight</li>
          </ul>
        </div>

        <section className="service-faqs">
          <h2>AI engagement questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What is a realistic first AI initiative?</h3>
              <p>Start with a process that has repetitive work, clear business rules, and high-value outcomes when automated or assisted using AI.</p>
            </div>
            <div className="faq-item">
              <h3>Can AI be implemented securely?</h3>
              <p>Yes. Security, data quality, governance, and human review are essential parts of responsible AI implementation.</p>
            </div>
            <div className="faq-item">
              <h3>How do you decide where AI fits?</h3>
              <p>We map the business process, assess operational pain points, and identify where AI can reduce delay, improve quality, and create measurable value.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <Seo
        title="Software Services | Axonix Technologies"
        description="Explore custom software development, digital government platforms, workflow automation, enterprise application services, cloud modernization, and ongoing software support."
      />
      <main className="page-content reveal">
      <div className="section-heading">
        <p className="eyebrow">Software services for public sector and enterprise organizations</p>
        <h2>Technology services built to modernize operations, reduce inefficiency, and improve service delivery.</h2>
      </div>

      <div className="service-page-grid">
        {servicePages.map((service) => (
          <NavLink key={service.slug} to={`/services/${service.slug}`} className="service-card-link">
            <article className="solution-card service-card">
              <span className="solution-index">{service.slug.slice(0, 2).toUpperCase()}</span>
              <h3>{service.label}</h3>
              <p>{service.description}</p>
            </article>
          </NavLink>
        ))}
      </div>
    </main>
    </>
  )
}

function ServiceLandingPage({ service }) {
  return (
    <>
      <Seo title={service.title} description={service.description} />
      <main className="page-content service-landing-page reveal">
        <header className="service-hero">
          <p className="eyebrow">Axonix Technologies</p>
          <h1>{service.h1}</h1>
          <p className="hero-text">{service.intro}</p>
        </header>

        <div className="service-cta-row">
          <NavLink to="/contact" className="primary-btn">Book a consultation</NavLink>
          <NavLink to="/services" className="secondary-btn">View all services</NavLink>
        </div>

        <section className="service-article">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </section>

        <div className="service-benefits">
          <h2>What this solution includes</h2>
          <ul>
            {service.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <section className="service-faqs">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {service.faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-related">
          <h2>Related services</h2>
          <div className="service-pills">
            {servicePages
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <NavLink key={item.slug} to={`/services/${item.slug}`} className="service-pill">
                  {item.label}
                </NavLink>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}

function InsightsPage() {
  return (
    <>
      <Seo
        title="Insights & Strategy | Axonix Technologies"
        description="Explore practical insights on digital transformation, workflow automation, custom software development, and public sector technology modernization."
      />
      <main className="page-content reveal">
        <div className="section-heading">
          <p className="eyebrow">Insights & strategy</p>
          <h2>Practical guidance for organizations modernizing services, workflows, and business systems.</h2>
        </div>

        <div className="insights-grid">
          {blogPosts.map((post) => (
            <NavLink key={post.slug} to={`/insights/${post.slug}`} className="service-card-link">
              <article className="solution-card insight-card">
                <span className="solution-index">AI</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            </NavLink>
          ))}
        </div>
      </main>
    </>
  )
}

function BlogPostPage({ post }) {
  return (
    <>
      <Seo title={`${post.title} | Axonix Technologies`} description={post.description} />
      <main className="page-content service-landing-page reveal">
        <header className="service-hero">
          <p className="eyebrow">Axonix Insights</p>
          <h1>{post.hero}</h1>
        </header>

        <div className="service-cta-row">
          <NavLink to="/insights" className="secondary-btn">Back to insights</NavLink>
          <NavLink to="/contact" className="primary-btn">Discuss your project</NavLink>
        </div>

        <article className="service-article">
          {post.sections.map((section) => (
            <p key={section.slice(0, 24)}>{section}</p>
          ))}
        </article>

        <div className="service-benefits">
          <h2>Key takeaways</h2>
          <ul>
            {post.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <section className="service-related">
          <h2>Related services</h2>
          <div className="service-pills">
            {servicePages.map((service) => (
              <NavLink key={service.slug} to={`/services/${service.slug}`} className="service-pill">
                {service.label}
              </NavLink>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industry Solutions | Axonix Technologies"
        description="Explore digital transformation, workflow automation, and custom software solutions for government, healthcare, education, and enterprise organizations."
      />
      <main className="page-content reveal">
        <div className="section-heading">
          <p className="eyebrow">Industry-focused solutions</p>
          <h2>Technology built around the realities of public service, healthcare, education, and enterprise operations.</h2>
        </div>

        <div className="industry-grid">
          {industryPages.map((industry) => (
            <NavLink key={industry.slug} to={`/industries/${industry.slug}`} className="service-card-link">
              <article className="solution-card industry-card">
                <span className="solution-index">IND</span>
                <h3>{industry.label}</h3>
                <p>{industry.description}</p>
              </article>
            </NavLink>
          ))}
        </div>
      </main>
    </>
  )
}

function IndustryLandingPage({ industry }) {
  return (
    <>
      <Seo title={industry.title} description={industry.description} />
      <main className="page-content service-landing-page reveal">
        <header className="service-hero">
          <p className="eyebrow">Axonix Technologies</p>
          <h1>{industry.h1}</h1>
          <p className="hero-text">{industry.intro}</p>
        </header>

        <div className="service-cta-row">
          <NavLink to="/industries" className="secondary-btn">View all industries</NavLink>
          <NavLink to="/contact" className="primary-btn">Discuss this industry need</NavLink>
        </div>

        <section className="service-article">
          {industry.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </section>

        <div className="service-benefits">
          <h2>Core focus areas</h2>
          <ul>
            {industry.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <section className="service-faqs">
          <h2>Industry questions</h2>
          <div className="faq-list">
            {industry.faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-related">
          <h2>Related industries</h2>
          <div className="service-pills">
            {industryPages
              .filter((item) => item.slug !== industry.slug)
              .map((item) => (
                <NavLink key={item.slug} to={`/industries/${item.slug}`} className="service-pill">
                  {item.label}
                </NavLink>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}

function LocationsPage() {
  return (
    <>
      <Seo
        title="Regional Software Services | Axonix Technologies"
        description="Find Axonix Technologies software and digital transformation support in Delhi NCR, Mumbai, Bangalore, Hyderabad, and Pune."
      />
      <main className="page-content reveal">
        <div className="section-heading">
          <p className="eyebrow">Regional service coverage</p>
          <h2>Local software and transformation support for organizations across major Indian business hubs.</h2>
        </div>

        <div className="location-grid">
          {locationPages.map((location) => (
            <NavLink key={location.slug} to={`/locations/${location.slug}`} className="service-card-link">
              <article className="solution-card location-card">
                <span className="solution-index">LOC</span>
                <h3>{location.city}</h3>
                <p>{location.description}</p>
              </article>
            </NavLink>
          ))}
        </div>
      </main>
    </>
  )
}

function LocationLandingPage({ location }) {
  return (
    <>
      <Seo title={location.title} description={location.description} />
      <main className="page-content service-landing-page reveal">
        <header className="service-hero">
          <p className="eyebrow">Axonix Technologies</p>
          <h1>{location.h1}</h1>
          <p className="hero-text">{location.intro}</p>
        </header>

        <div className="service-cta-row">
          <NavLink to="/locations" className="secondary-btn">View all locations</NavLink>
          <NavLink to="/contact" className="primary-btn">Talk to our team</NavLink>
        </div>

        <section className="service-article">
          {location.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </section>

        <div className="service-benefits">
          <h2>Regional service focus</h2>
          <ul>
            {location.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <section className="service-faqs">
          <h2>Questions about {location.city}</h2>
          <div className="faq-list">
            {location.faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-related">
          <h2>Other locations</h2>
          <div className="service-pills">
            {locationPages
              .filter((item) => item.slug !== location.slug)
              .map((item) => (
                <NavLink key={item.slug} to={`/locations/${item.slug}`} className="service-pill">
                  {item.city}
                </NavLink>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}

function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing | Axonix Technologies"
        description="Explore flexible pricing for public sector software solutions, digital transformation consulting, workflow automation, and enterprise modernization engagements."
      />
      <main className="page-content reveal">
      <div className="section-heading center-heading">
        <p className="eyebrow">Flexible engagement models</p>
        <h2>Transparent pricing for digital transformation, software modernization, and business process automation.</h2>
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
    </>
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
    <>
      <Seo
        title="Contact Axonix Technologies | Software Development & Digital Transformation"
        description="Contact Axonix Technologies to discuss custom software development, enterprise modernization, digital transformation consulting, workflow automation, and public sector technology projects."
      />
      <main className="page-content contact-page reveal">
      <div className="contact-copy">
        <p className="eyebrow">Let’s talk</p>
        <h2>Hire a digital transformation partner for smarter systems and better service outcomes.</h2>
        <p>
          Whether you need custom software development, workflow automation, public sector technology,
          or a digital modernization strategy, Axonix Technologies helps organizations build secure,
          scalable, and high-impact solutions.
        </p>
      </div>

      <div className="contact-details-card">
        <div className="contact-detail-item">
          <span className="detail-label">Email</span>
          <a href="mailto:support@axonixtechnologies.com">support@axonixtechnologies.com</a>
        </div>
        <div className="contact-detail-item">
          <span className="detail-label">Phone</span>
          <a href="tel:+917448554709">+917448554709</a>
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
    </>
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
