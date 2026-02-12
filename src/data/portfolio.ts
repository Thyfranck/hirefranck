export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  impacts: string[];
  techStack: string[];
  note?: string;
  url?: string;
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export interface Credential {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot for Job Matching',
    company: 'FrontlineGig',
    description: 'Built conversational AI chatbot using Voiceflow + Make.com + ChatGPT integration to onboard users and match them with green economy jobs. Designed two-way data flows and prompt engineering for dynamic content.',
    impacts: [
      'Became primary signup driver',
      'Delivered in 1 month vs. 3-4 months traditional approach',
      'Saved cost of hiring specialized engineer',
    ],
    techStack: ['Voiceflow', 'Make.com', 'ChatGPT API', 'HubSpot', 'Excel'],
  },
  {
    id: 'mobile-turnaround',
    title: 'Mobile App Turnaround',
    company: 'Trader Interactive',
    description: 'Inherited mobile apps with 1.5-star ratings. Led complete redesign and migration from hybrid to native development. Used multi-tool analytics approach to identify and fix critical UX issues.',
    impacts: [
      'Improved ratings from 1.5 to 4+ stars',
      'Increased MAU from 110K to 150K+',
      'Solved 50% drop-off issue through heat map analysis',
    ],
    techStack: ['React Native', 'Firebase', 'Adobe Analytics', 'Appsee', 'Crashlytics'],
  },
  {
    id: 'synthetic-data',
    title: 'Synthetic Data Pipeline for ML',
    company: 'FrontlineGig',
    description: 'Created automated pipeline using Claude AI to generate thousands of synthetic resumes for training job-matching ML model. Built end-to-end workflow from AI generation to Google Drive storage.',
    impacts: [
      'Enabled ML model training that would not have been possible otherwise',
      'Saved months of manual data collection',
      'Created reusable framework for future data needs',
    ],
    techStack: ['Claude AI', 'Excel', 'PDF API', 'Google Drive', 'Prompt Engineering'],
  },
  {
    id: 'customer-partnership',
    title: 'Customer Partnership & Technical Delivery',
    company: 'FrontlineGig x Chesapeake Bay Foundation',
    description: 'Led end-to-end customer engagement including technical solution design (landing page, CRM integration, analytics stack), stakeholder management, and delivery. Acted as technical consultant and implementation partner to achieve partnership goals.',
    impacts: [
      '10K+ impressions, 1K+ website visits',
      '10% conversion rate, 8% qualified candidate rate',
      'Delivered 5+ candidates in 3 weeks',
      'Maintained ongoing partnership relationship',
    ],
    techStack: ['HubSpot', 'Microsoft Clarity', 'Social Platforms', 'Video Editing'],
    note: 'Demonstrates ability to own customer relationships from scoping through delivery',
  },
  {
    id: 'analytics-automation',
    title: 'Analytics Automation',
    company: 'Homes.com',
    description: 'Collaborated with data team to automate monthly analytics consolidation using App Store and Play Store APIs, eliminating manual Excel work.',
    impacts: [
      'Saved 3 days of work monthly',
      'Automated reporting for 200K+ users across 4 mobile apps',
    ],
    techStack: ['App Store API', 'Play Store API', 'Excel Automation'],
  },
  {
    id: 'travelpoor',
    title: 'Budget Travel Planning Platform',
    company: 'TravelPoor',
    description: 'AI-assisted travel platform focused on helping users plan meaningful trips on minimal budgets. Built rapidly using vibe coding workflows and AI pair-programming across the full stack.',
    impacts: [
      'Smart destination discovery for low-cost travel',
      'Budget-first trip planning experience',
      'Clean, conversion-focused landing flow',
      'Rapid iteration using AI-assisted development',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Netlify', 'GitHub', 'Figma', 'Bolt', 'Cursor', 'Claude', 'ChatGPT'],
    note: 'Demonstrates ability to coordinate multiple AI coding tools across design, frontend, and deployment workflows — shipping a production-ready consumer product quickly. Built in 4–5 days.',
    url: 'https://www.travelpoor.com',
  },
  {
    id: 'joingrayrock',
    title: 'Private Network / Community Validation Platform',
    company: 'JoinGrayRock',
    description: 'Landing and validation platform built to test demand and capture early user interest. Focused on rapid experimentation, clean positioning, and user feedback loops.',
    impacts: [
      'Conversion-optimized landing page',
      'Integrated user testing workflow (Typeform)',
      'Rapid MVP validation build',
      'AI-assisted copy + development',
    ],
    techStack: ['React', 'GitHub', 'Typeform', 'Cursor', 'Claude'],
    note: 'Shows ability to rapidly validate product ideas, integrate external tools for feedback collection, and use AI to accelerate lean MVP execution. Built in 2–3 days.',
    url: 'https://www.joingrayrock.com',
  },
];

export const timeline: TimelineItem[] = [
  {
    id: 'frontlinegig',
    role: 'Senior Product Manager',
    company: 'FrontlineGig',
    period: '2023 - Present',
    current: true,
    highlights: [
      'Green economy job platform',
      'AI chatbot development, ML training data, partnership management',
      'Full product ownership end-to-end',
    ],
  },
  {
    id: 'freelance',
    role: 'Freelance Product Manager',
    company: 'Various Clients',
    period: '2018 - 2022',
    highlights: [
      'Chptr: Beta app launch (iOS/Android)',
      'CrossRiver Bank: PPP crisis response, 100%+ team productivity increase',
      'Travelaya: Subscription app development',
    ],
  },
  {
    id: 'trader-interactive',
    role: 'Mobile Product Manager',
    company: 'Trader Interactive',
    period: '2015 - 2018',
    highlights: [
      'First PM on mobile team',
      'App ratings: 1.5 to 4+ stars',
      'MAU growth: 110K to 150K+',
    ],
  },
  {
    id: 'rocket-science',
    role: 'Founder',
    company: 'Rocket Science Web Studio',
    period: '2015 - 2017',
    highlights: [
      'Generated $200K+ revenue',
      'Delivered 20+ client projects',
      'Built and managed freelance team',
    ],
  },
];

export const credentials: Credential[] = [
  {
    id: 'aws',
    icon: 'Award',
    title: 'AWS Solutions Architect',
    description: 'Associate Certified',
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: '10+ Mobile Apps',
    description: 'iOS & Android launches',
  },
  {
    id: 'ai',
    icon: 'Bot',
    title: 'AI in Production',
    description: 'Early adopter since 2023',
  },
  {
    id: 'partnerships',
    icon: 'Handshake',
    title: 'Strategic Partnerships',
    description: 'Dream.org, AWS, CBT',
  },
  {
    id: 'revenue',
    icon: 'DollarSign',
    title: '$200K+ Revenue',
    description: 'Generated as founder',
  },
  {
    id: 'ratings',
    icon: 'TrendingUp',
    title: '167% Rating Increase',
    description: '1.5 to 4+ stars',
  },
  {
    id: 'productivity',
    icon: 'Zap',
    title: '100%+ Productivity',
    description: 'Crisis response leadership',
  },
  {
    id: 'interviews',
    icon: 'Users',
    title: '100+ Interviews',
    description: 'Customer conversations',
  },
  {
    id: 'mau',
    icon: 'Target',
    title: '150K+ MAU',
    description: 'Product experience scale',
  },
  {
    id: 'ticket-closer',
    icon: 'MessageCircle',
    title: 'Ticket Closer',
    description: 'CrossRiver reputation',
  },
];

export const capabilities = {
  productManagement: [
    'Product strategy & roadmap',
    'User research & validation (100+ interviews)',
    'Cross-functional team leadership',
    'Stakeholder management & partnerships',
    'A/B testing & experimentation',
    'Metrics definition & tracking',
  ],
  solutionsCustomerSuccess: [
    'Technical solution design & architecture',
    'Customer discovery & needs assessment',
    'Proof-of-concept development & demos',
    'Implementation guidance & best practices',
    'Partnership management (Dream.org, AWS, Chesapeake Bay Trust)',
    'Crisis response & rapid problem-solving (100%+ productivity at CrossRiver)',
    'Technical troubleshooting & root cause analysis',
  ],
  aiAutomation: [
    'Conversational AI (Voiceflow, ChatGPT)',
    'Prompt engineering (Claude, GPT-4)',
    'Workflow automation (Make.com, Zapier)',
    'No-code/low-code tools',
    'AI-powered prototyping (Cursor, Lovable, Replit)',
  ],
  technical: [
    { category: 'Cloud', items: 'AWS Solutions Architect Associate certified' },
    { category: 'Development', items: 'API integration, webhooks, system design' },
    { category: 'Analytics', items: 'Firebase, Adobe Analytics, Microsoft Clarity, Appsee' },
    { category: 'Tools', items: 'Figma, Jira, ProductBoard, HubSpot, Monday' },
    { category: 'Data', items: 'Excel (advanced), SQL basics, Python familiarity' },
  ],
  domains: [
    'Mobile product (iOS/Android)',
    'SaaS & marketplace platforms',
    'Green tech & sustainability',
    'Financial services (PPP loans experience)',
    'Startup to Enterprise scale',
  ],
};
