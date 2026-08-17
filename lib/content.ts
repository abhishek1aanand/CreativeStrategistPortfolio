// Single source of truth for portfolio copy, stats, and links.
// Update numbers/links here without touching component JSX.

// TODO: no resume/portfolio PDF link has been provided yet. Add it here (and
// wire it into Nav/Hero/Footer as needed) once a URL exists.
export const links = {
  linkedin: "https://www.linkedin.com/in/abhisshhekaananda/",
  calendly: "https://calendly.com/abhi_copywriter/30min",
  email: "abhishek1aanand@gmail.com",
  phone: "+91 9955548795",
};

export const site = {
  name: "Abhishek Anand",
  title: "Performance Creative Strategist & Direct-Response Copywriter",
  description:
    "Abhishek Anand — Performance Creative Strategist and direct-response copywriter for D2C, eCommerce, and performance marketing agencies. Research the customer, find the angle, make the ad that wins.",
};

export type StatCardData = {
  label: string;
  value: string;
  sublabel: string;
};

export const nav = {
  brand: "Abhishek Anand",
  links: [
    { label: "LinkedIn", href: links.linkedin, external: true },
    { label: "Book Your Call", href: links.calendly, external: true, primary: true },
  ],
};

export const hero = {
  eyebrow: "Performance Creative Strategist · Direct-Response Copywriter · D2C",
  headlineLines: [
    "Research the customer.",
    "Find the angle.",
    { text: "Make the ad that wins.", accent: true },
  ],
  subhead:
    "I'm Abhishek Anand. I own creative strategy end to end, from audience research through hooks, scripts, creative direction, and performance-driven iteration, with the deepest focus on eCommerce and D2C brands.",
  meta: "Remote (India-based) · Open to US-based roles · 320+ client engagements",
  ctas: [
    { label: "Email Me", href: `mailto:${links.email}`, external: false, kind: "outline" as const },
    { label: "LinkedIn", href: links.linkedin, external: true, kind: "outline" as const },
    { label: "See Case Studies", href: "#case-studies", external: false, kind: "ghost" as const },
  ],
  stats: [
    {
      label: "Airlinepops / ROAS",
      value: "~3.0x",
      sublabel: "Sustained over 6 consecutive months",
    },
    {
      label: "Multi-account Meta revenue",
      value: "$100K+",
      sublabel: "At 4.73x ROAS across 8 campaigns",
    },
    {
      label: "Dr. James Farley / CPL",
      value: "~$3",
      sublabel: "~500 leads/month on $50/day spend",
    },
  ] satisfies StatCardData[],
};

export const process = {
  heading: "How I Work",
  subheading: "A repeatable system, not a one-off sprint.",
  steps: [
    {
      number: "01",
      title: "Research",
      description: "Audience research, review mining, competitor and existing-ad analysis.",
    },
    {
      number: "02",
      title: "Messaging Strategy",
      description: "Pain points, desires, and objections turned into a clear message.",
    },
    {
      number: "03",
      title: "Angles, Hooks & Concepts",
      description: "Multiple ways to sell the same offer to different customer segments.",
    },
    {
      number: "04",
      title: "Scripts & Copy",
      description: "Ad copy, UGC scripts, landing pages, PDPs, VSLs, email sequences.",
    },
    {
      number: "05",
      title: "Creative Direction",
      description: "Briefing and directing graphic designers and video editors to execute.",
    },
    {
      number: "06",
      title: "Performance Review",
      description: "Reading CTR, ROAS, and cost-per-result alongside the media buying team.",
    },
    {
      number: "07",
      title: "Iteration",
      description: "Winning hooks and angles feed directly into the next batch of creative.",
    },
    {
      number: "08",
      title: "Repeat",
      description: "Every result becomes an input for the next offer, client, or campaign.",
    },
  ],
};

export type CaseStudy = {
  id: string;
  kicker: string;
  headline: string;
  narrative: string;
  stats: StatCardData[];
  note?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "airlinepops",
    kicker: "Airlinepops · eCommerce",
    headline: "A 3x ROAS that held for six months",
    narrative:
      "Led creative strategy and wrote Meta ad copy and UGC video scripts for Airlinepops, contributing to a sustained ~3x ROAS over 6 consecutive months on ~$700–800/week in Meta spend. Also wrote the brand's product description page copy and developed bundled offers aimed at growing AOV and LTV.",
    stats: [
      { label: "7-day ROAS", value: "3.28x", sublabel: "$518.29 spend" },
      { label: "Cost per purchase", value: "$6.73", sublabel: "77 purchases" },
      { label: "CTR", value: "5.56%", sublabel: "Meta ad campaign" },
    ],
    note: "Worked on copy and creative strategy for Airlinepops, an eCommerce brand later invited to appear on Shark Tank US.",
  },
  {
    id: "multi-account",
    kicker: "eCommerce · Multi-account portfolio",
    headline: "Eight campaigns, one creative system",
    narrative:
      "Created performance-focused creative and direct-response copy for a portfolio of active Meta campaigns, applying the same research-to-iteration process across every account rather than treating each as a one-off.",
    stats: [
      { label: "Meta revenue", value: "$100K+", sublabel: "30-day" },
      { label: "ROAS", value: "4.73x", sublabel: "Across 8 active campaigns" },
      { label: "Ad spend", value: "~$21K", sublabel: "30-day" },
    ],
  },
  {
    id: "meta-vs-google",
    kicker: "eCommerce · Meta vs. Google",
    headline: "The same message, two platforms",
    narrative:
      "Developed and directed the creative for a campaign that ran in parallel on Meta and Google, keeping the core message and offer consistent while letting each platform's format do its own work.",
    stats: [
      { label: "Meta ROAS", value: "4.42x", sublabel: "$18,320.96 revenue" },
      { label: "Meta spend", value: "$4,149.56", sublabel: "Campaign total" },
      { label: "Google ROAS", value: "7.10x", sublabel: "Parallel campaign" },
    ],
  },
  {
    id: "dr-james-farley",
    kicker: "Dr. James Farley · Healthcare",
    headline: "From $3 leads to $40K collected",
    narrative:
      "Wrote the full funnel for a Parkinson's and neurological-conditions awareness practice: nurture and retargeting emails that kept lead cost low, feeding a $15K webinar package. The client confirmed roughly $40K in cash collected off the webinar funnel alone.",
    stats: [
      { label: "Cash collected", value: "~$40K", sublabel: "Client-confirmed, webinar funnel" },
      { label: "Webinar ROAS", value: "15.5x", sublabel: "166% ROI on ~$2,568 spend" },
      { label: "Top-of-funnel", value: "~$3 CPL", sublabel: "~500/month on $50/day spend" },
    ],
  },
  {
    id: "monae-everett",
    kicker: "Monae Everett · Coaching",
    headline: "Two closed deals, $4,194 in a week",
    narrative:
      "Wrote webinar and campaign copy for the Celeb Framework, a coaching program for hairstylists, barbers, and makeup artists, contributing to two closed deals worth roughly $4,194 in a single 7-day window off a 10.23x webinar ROAS, backed by a low-cost lead flow for the live event that fed it.",
    stats: [
      { label: "7-day sales", value: "~$4,194", sublabel: "Two closed deals" },
      { label: "Webinar ROAS", value: "10.23x", sublabel: "Sales roughly doubled week over week" },
      { label: "Event lead flow", value: "$3.73 CPL", sublabel: "45 leads, 3.24% CTR" },
    ],
  },
  {
    id: "real-estate",
    kicker: "Real Estate · Freelance",
    headline: "High-ticket leads, low-ticket cost",
    narrative:
      "Developed ad copy and static creatives and personally managed Meta campaigns for a high-ticket real estate offer, the one engagement here where media buying was owned directly rather than working alongside a separate buyer.",
    stats: [
      { label: "Cost per result", value: "~$4", sublabel: "Leads & conversations" },
      { label: "Sales", value: "5", sublabel: "Apartments in one month" },
      { label: "Property value", value: "$55–75K", sublabel: "Per unit" },
    ],
  },
];

export type SwipeFileItem = {
  type: string;
  client: string;
  href: string;
};

export const swipeFile: SwipeFileItem[] = [
  { type: "Long-Form Ad", client: "Airlinepops", href: "https://docs.google.com/document/d/19sWq3aBANFtXjY3Gqzm6SZC1nxxZV7EokS5ayF3-xiA/edit?usp=sharing" },
  { type: "Graphics Copy", client: "Airlinepops", href: "https://docs.google.com/document/d/19sWq3aBANFtXjY3Gqzm6SZC1nxxZV7EokS5ayF3-xiA/edit?usp=sharing" },
  { type: "PDP Copy (live)", client: "Airlinepops.com", href: "https://airlinepops.com/products/airlinepops" },
  { type: "Long-Form Ad", client: "Dr. James Farley", href: "https://docs.google.com/document/d/1yoZgwENxQTXNI7t6-UYb1FetRO8GRUe6NHGGY1dhw_M/edit?usp=sharing" },
  { type: "Ad Script (VO)", client: "Dr. James Farley", href: "https://docs.google.com/document/d/1yoZgwENxQTXNI7t6-UYb1FetRO8GRUe6NHGGY1dhw_M/edit?usp=sharing" },
  { type: "Email Sequence", client: "Dr. James Farley", href: "https://docs.google.com/document/d/1C0Hwq-m4ibvY3nsad_HUpx7hGkayMbTOIqtc4xw1gyU/edit?usp=sharing" },
  { type: "Long-Form Ad", client: "Monae Everett", href: "https://docs.google.com/document/d/1d_KE6pAnL_Pto_4ITTIpl0ZvRpGITHWiray8HR5vi1k/edit?usp=sharing" },
  { type: "TikTok Script", client: "Shanelle Lopez (United Academy)", href: "https://docs.google.com/document/d/1YWdJw4SQ7ZP-HoD5XOxdvagNYhW1BnOIqaM1YAAQWBA/edit?usp=sharing" },
  { type: "Landing Page", client: "Dr. CJ Benkert (PuraVida Wellness)", href: "https://docs.google.com/document/d/1Y658_NtdVHbzNaFu8A3kOWvbN9MFbnEAj81CX9Lur-4/edit?usp=sharing" },
  { type: "VSL", client: "Dr. CJ Benkert", href: "https://docs.google.com/document/d/1ZFQlChIm65tlSnRCZ7r1mGPW-J6-u6O7Q752ybhi2Wk/edit?usp=sharing" },
  { type: "VSL", client: "Oscar Bonilla (Elite One Trading)", href: "https://docs.google.com/document/d/14nhlCeMvz-zsA7udvVFyAmAH3WuAYSclc8OjNsucduY/edit?usp=sharing" },
  // TODO: confirm sharing permissions on this doc before launch — link may currently be restricted.
  { type: "Static Graphics", client: "—", href: "https://docs.google.com/document/d/1r5W4TRNtpZPWzBhOSJJqwkValJtZ8qnPTcCWFgGD904/edit?usp=sharing" },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Creative Strategy",
    skills: [
      "Audience & Customer Research",
      "Review Mining",
      "Competitor Analysis",
      "Creative/Ad Audits",
      "Messaging Strategy",
      "Angle Development",
      "Hook Development",
      "Creative Concepting",
      "Creative Testing",
      "Performance Analysis",
      "Creative Iteration",
    ],
  },
  {
    label: "Performance Creative",
    skills: [
      "Meta Ads",
      "UGC Strategy & Scripting",
      "Static Ad Creative",
      "Video Creative",
      "Creative Direction",
      "Direct-Response Copywriting",
      "Offer Positioning",
    ],
  },
  {
    label: "Conversion & Funnel",
    skills: [
      "Landing Page Copy",
      "PDP Copy",
      "VSL Scripts",
      "Webinar Funnels",
      "Nurture & Retargeting Email Sequences",
      "CRO",
      "Funnel Mapping",
      "GoHighLevel (Landing Pages, Pop-Ups, Thank-You Funnels)",
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      "GoHighLevel",
      "Meta Ads Manager",
      "Google Analytics",
      "Canva",
      "Google Docs/Slides",
      "Monday.com",
      "ClickUp",
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Copywriter & Creative Strategist",
    org: "Wojo Media",
    dates: "Sep 2025 – Aug 2026",
    bullets: [
      "Owned end-to-end creative strategy across 320+ client engagements spanning eCommerce, coaching, healthcare, home services, and financial services.",
      "Researched target audiences, mined customer reviews, and audited competitors and existing ad creative before developing angles, hooks, and concepts for each new offer.",
      "Wrote the resulting ad copy, UGC scripts, landing page and PDP copy, VSL scripts, webinar decks, and nurture/retargeting email sequences.",
      "Directed graphic designers and video editors, briefing creative teams and guiding execution to keep output aligned with strategic messaging.",
      "Reviewed creative performance data alongside the media buying team to identify winning and losing hooks and angles, feeding insights back into ongoing iteration.",
    ],
  },
  {
    role: "Freelance Performance Marketer",
    org: "Real Estate Firm",
    dates: "Jun 2025 – Sep 2025",
    bullets: [
      "Developed ad copy and static creatives and managed Meta campaigns for a high-ticket real estate offer.",
      "Generated leads and messaging conversations at an average cost of ~$4 per result, contributing to 5 apartment sales in one month, with individual properties valued at ~$55K–75K.",
    ],
  },
];

export const education = {
  heading: "Education & Certifications",
  degree: {
    title: "B.Tech in Computer Science & Engineering",
    org: "Techno International Batanagar, Kolkata",
    detail: "CGPA 8.8",
  },
  certifications: [
    "HubSpot Inbound Certification",
    "Canva Essentials Badge",
    "Graphic Design Essentials Badge",
  ],
  trainingNote:
    "Trained in direct-response copywriting and creative strategy under senior industry practitioners.",
};

export const bookCall = {
  heading: "Let's talk about your next campaign",
  subtext: "Pick a time that works for you, 30 minutes, no pressure.",
  ctaLabel: "Book a 30-Minute Call →",
};

export const footer = {
  closingLine: "Building creative that performs, not just creative that looks good.",
  location: "Remote, India-based, open to US-based roles",
};
