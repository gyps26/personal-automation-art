export type Platform = "Zapier" | "Make.com" | "n8n" | "GoHighLevel";

export const platformColor: Record<Platform, string> = {
  Zapier: "var(--zapier)",
  "Make.com": "var(--make)",
  n8n: "var(--n8n)",
  GoHighLevel: "var(--ghl)",
};

export const techStack = [
  "n8n",
  "Zapier",
  "Make.com",
  "ChatGPT",
  "Claude Code",
  "Gemini",
  "Grok AI",
  "ElevenLabs",
  "Lovable.dev",
  "Pipedrive",
  "GoHighLevel",
  "GitHub",
  "Apify",
  "Facebook Graph API",
  "Google Drive",
  "Messenger",
  "Notion",
  "Apollo.io",
  "Xero",
  "Asana",
  "Reddit",
  "Firecrawl",
  "Webhooks",
  "REST APIs",
  "Google Workspace",
];

export type Funnel = {
  name: string;
  tag: string;
  niche: string;
  description: string;
  sections: string[];
};

export const funnels: Funnel[] = [
  {
    name: "Voyara Luggage Bold",
    tag: "Premium",
    niche: "Premium Travel & Lifestyle E-commerce",
    description:
      "Luxury luggage product launch funnel built in GoHighLevel. Editorial hero with the Elite Set offer, problem-solution storytelling, detailed compartment breakdowns, tiered pricing at $399, social proof testimonials, FAQ accordion, and a final scarcity CTA with discount incentive.",
    sections: ["Hero", "Problem", "Engineered Features", "Fit Guide", "Pricing", "Testimonials", "FAQ"],
  },
  {
    name: "Dental Care",
    tag: "Dental",
    niche: "Dental & Healthcare Services",
    description:
      "Patient-friendly dental practice funnel built around transparent pricing and anxiety-free booking. Prominent $59 new-patient offer, online scheduling, insurance clarity, and social proof to reduce appointment hesitation.",
    sections: ["Hero + Pricing", "Social Proof", "Features", "FAQ", "Booking", "Insurance"],
  },
  {
    name: "SafeCare Dental",
    tag: "Dental",
    niche: "Dental & Healthcare Services",
    description:
      "A patient-focused dental practice funnel featuring transparent new-patient pricing, educational content on restorative care, social proof from happy patients, and an easy online appointment booking system with insurance clarity.",
    sections: ["Hero", "Services", "Restorative Care", "Testimonials", "Pricing", "Booking", "FAQ", "Contact"],
  },
];

export type Workflow = {
  platform: Platform;
  title: string;
  description: string;
  steps: string[];
  tags: string[];
};

export const workflows: Workflow[] = [
  {
    platform: "Zapier",
    title: "AI Content Repurposing",
    description:
      "Automated Zapier workflow that monitors Google Drive for new files, uses AI to generate transcriptions and blog posts, then distributes content across Facebook Pages and LinkedIn through conditional paths.",
    steps: ["New File in Drive", "AI Transcription", "Generate Blog Post", "Content Router", "Post to Facebook", "Post to LinkedIn"],
    tags: ["AI Transcription", "Blog Generation", "Multi-platform Publishing"],
  },
  {
    platform: "Zapier",
    title: "Lead Actions Automation",
    description:
      "Complex Zapier workflow triggered by Asana task updates. Routes leads through different paths based on status with automated email notifications and folder creation.",
    steps: ["Task Updated", "Status Filter", "Status Router", "Send Email", "Create Folder", "Add Subtask"],
    tags: ["Status-based Routing", "Gmail Integration", "Google Drive Automation"],
  },
  {
    platform: "Zapier",
    title: "Automated Leads Enrichment",
    description:
      "Lead enrichment pipeline using Webhooks to capture incoming leads, Apollo for company data enrichment, then routing high-priority vs low-priority leads to Slack notifications and AI-drafted emails.",
    steps: ["Catch Webhook", "Enrich Lead", "Priority Filter", "Priority Router", "Notify Team", "Draft Email"],
    tags: ["Apollo Enrichment", "Priority Routing", "Slack Notifications"],
  },
  {
    platform: "Make.com",
    title: "Xero-Asana Transaction Export",
    description:
      "Make.com scenario that watches Asana for completed tasks, pulls account transactions from Xero, processes data through iterators and aggregators, exports to Google Sheets as CSV, and uploads attachments back to Asana.",
    steps: ["Watch Tasks", "Get Transactions", "Iterator", "Array Aggregator", "Create CSV", "Upload Attachment"],
    tags: ["Xero API Integration", "CSV Generation", "Data Aggregation"],
  },
  {
    platform: "Make.com",
    title: "Google Forms Multi-Channel Router",
    description:
      "Form response automation that watches Google Forms submissions, adds rows to Google Sheets, then routes notifications to both Gmail and Microsoft Teams based on configurable conditions.",
    steps: ["Watch Responses", "Add Row", "Router", "Send Email", "Post to Teams"],
    tags: ["Google Forms Trigger", "Conditional Routing", "Gmail Notifications"],
  },
  {
    platform: "Make.com",
    title: "AI Social Media Personalization",
    description:
      "Content distribution workflow using Google Gemini to summarize articles from Google Sheets, then personalize and post across LinkedIn, Telegram Bot, and Facebook Pages with platform-specific formatting.",
    steps: ["Get Articles", "AI Summarize", "Personalize Content", "Post LinkedIn", "Send Telegram", "Post Facebook"],
    tags: ["Google Gemini AI", "Content Personalization", "Multi-platform Posting"],
  },
  {
    platform: "Make.com",
    title: "Content Summarizer & Distributor",
    description:
      "Automated content pipeline that fetches data from Google Sheets, uses AI Summarizer for condensation, then routes personalized messages to LinkedIn and Telegram with platform-optimized formatting.",
    steps: ["Search Rows", "AI Summarizer", "Personalize Message", "Share Update", "Send Message"],
    tags: ["AI Summarization", "LinkedIn Publishing", "Telegram Bot Integration"],
  },
  {
    platform: "n8n",
    title: "Email Automation AI Agent",
    description:
      "AI-powered email automation triggered by chat messages. Uses OpenAI Chat Model with Simple Memory for context retention, creates Gmail drafts automatically, and logs data to Google Sheets.",
    steps: ["Chat Trigger", "AI Agent", "OpenAI Chat", "Simple Memory", "Create Draft", "Log to Sheets"],
    tags: ["OpenAI Integration", "Simple Memory", "Gmail Draft Creation"],
  },
  {
    platform: "n8n",
    title: "Store Stock AI Assistant",
    description:
      "Intelligent inventory management system using an AI Agent with Google Gemini Chat Model. Handles chat messages to update stock levels, search inventory, and maintain memory for contextual conversations.",
    steps: ["Chat Message", "AI Agent", "Gemini Chat", "Update Stock", "Search Inventory", "Window Buffer"],
    tags: ["Google Gemini AI", "Stock Updates", "Inventory Search"],
  },
  {
    platform: "n8n",
    title: "Doctor Appointment Scheduler",
    description:
      "WhatsApp-integrated AI agent for medical appointment scheduling. Manages patient data and appointments in Google Sheets, with add, get, and reschedule capabilities through natural language.",
    steps: ["WhatsApp Message", "AI Agent", "OpenAI Chat", "Add Appointment", "Get Appointments", "Reschedule"],
    tags: ["WhatsApp Integration", "Patient Management", "Appointment Scheduling"],
  },
  {
    platform: "n8n",
    title: "AI Receptionist Kylie — MCP Server",
    description:
      "Advanced AI receptionist using an MCP Server with VAPI integration. Handles CRM client lookup, calendar availability, appointment booking, updating and deletion with routing for new vs existing clients.",
    steps: ["MCP Server Webhook", "Extract Tool Request", "Client/Action Router", "Search Client in CRM", "Calendar Operations", "Format & Respond"],
    tags: ["MCP Server Integration", "CRM Client Lookup", "Calendar Management"],
  },
  {
    platform: "n8n",
    title: "Automated Image Translation System",
    description:
      "Monitors Google Drive for new images, detects source language with Gemini Vision, translates images into multiple target languages via AI, then routes success/failure with Google Sheets logging and Slack alerts.",
    steps: ["Watch Incoming Folder", "Download Image", "Detect Source Language", "Build Translation Context", "Translate Image", "Check Translation Status"],
    tags: ["Google Drive Monitoring", "Gemini Vision API", "Multi-language Translation"],
  },
  {
    platform: "n8n",
    title: "Nano Banana Pro — Ad Machine",
    description:
      "AI-powered ad generation workflow that processes form submissions with image uploads, analyzes creative requirements, leverages Nano Banana models, and produces structured ad copy with file conversion and cloud storage.",
    steps: ["On Form Submission", "Host Image", "Analyze an Image", "Creative Metadata Builder", "OpenRouter Chat Model", "Structured Output Parser", "Upload File"],
    tags: ["Form Processing", "Image Analysis", "AI Content Generation"],
  },
  {
    platform: "n8n",
    title: "Sora 2 Video Ad Generator",
    description:
      "Reads data from Google Sheets, uses AI agents with GPT to create influencer ad content, generates videos via the Sora 2 API, and tracks generation status with automatic success/error sheet updates.",
    steps: ["Execute Trigger", "Get Rows in Sheet", "Influencer Ads Agent", "Create Video Request", "Wait for Processing", "Status Router", "Update Sheet Status"],
    tags: ["Sora 2 Video Generation", "AI Influencer Ads Agent", "Google Sheets Integration"],
  },
  {
    platform: "n8n",
    title: "Meta Ads — Competitor Research",
    description:
      "Scrapes Meta ad data via webhooks, enriches it with OpenAI analysis, and organizes results into structured Google Sheets reports with dynamic sheet creation and conditional routing.",
    steps: ["Webhook", "Get Rows in Sheet", "Loop Over Items", "Information Extractor", "OpenAI Chat Model", "Aggregate", "Create Sheet", "Append or Update Row"],
    tags: ["OpenAI Chat Model", "Google Sheets Integration", "Webhook Triggers"],
  },
  {
    platform: "n8n",
    title: "AI Podcast Generator",
    description:
      "Telegram-based podcast automation that uses AI agents with ElevenLabs text-to-speech, voice transcription, and intelligent content structuring to generate full episodes from simple chat commands.",
    steps: ["Telegram Trigger", "AI Agent", "OpenAI Chat Model", "Window Buffer Memory", "Generate Script", "ElevenLabs TTS", "Send to Telegram"],
    tags: ["Telegram Integration", "ElevenLabs TTS", "AI Agent Orchestration"],
  },
  {
    platform: "n8n",
    title: "WhatsApp Personal AI Agent",
    description:
      "Intelligent WhatsApp assistant that handles voice and text — transcribes audio via the WhatsApp API, routes through an OpenAI-powered AI Agent with memory, and integrates Gmail, Google Calendar, and Contacts as tools.",
    steps: ["WhatsApp Trigger", "Switch (Voice/Text)", "Transcribe Audio", "AI Agent", "Simple Memory", "Gmail (send)", "Google Calendar (create)"],
    tags: ["WhatsApp Integration", "Voice Transcription", "AI Agent"],
  },
  {
    platform: "n8n",
    title: "RAG Agent — Knowledge Base Q&A",
    description:
      "End-to-end retrieval-augmented generation system: ingests PDFs into Pinecone via Cohere embeddings, then serves a chat-driven AI Agent that retrieves grounded answers with OpenAI, window buffer memory, and vector search.",
    steps: ["Manual / Schedule Trigger", "PDF Data Loader", "Recursive Text Splitter", "Cohere Embeddings", "Pinecone Ingest", "AI Agent", "Pinecone Vector Search"],
    tags: ["RAG Pipeline", "Pinecone Vector Store", "Cohere Embeddings"],
  },
  {
    platform: "n8n",
    title: "Invoice Intake & Validation",
    description:
      "Ingests multiple PDF invoices through a form upload, extracts text, uses Claude Sonnet to structure invoice data against a JSON schema, validates business rules, then routes valid invoices to Sheets and invalid ones to an exception log.",
    steps: ["Invoice Upload Form", "Split Uploads", "Extract PDF Text", "Extract Invoice Data (LLM)", "Validate Business Rules", "Append Valid Invoice", "Send Exception Email"],
    tags: ["PDF Batch Intake", "Claude Sonnet Extraction", "JSON Schema Validation"],
  },
  {
    platform: "n8n",
    title: "Apollo → Pipedrive Bulk Enrichment",
    description:
      "Bulk-enriches Pipedrive contacts via Apollo.io IT-department search, deduplicates decision-makers, creates CRM persons and deals, triggers scheduled Gmail outreach drafts, runs nurture sequences, and produces daily reports with error alerting.",
    steps: ["Schedule Trigger", "Pipedrive Get Persons", "Apollo Search IT Dept", "Dedupe Decision Makers", "Create Person & Deal", "Gmail Draft Outreach", "Google Sheets Export"],
    tags: ["Apollo IT Enrichment", "Pipedrive CRM Sync", "Gmail Draft Outreach"],
  },
  {
    platform: "n8n",
    title: "Generate Leads with Google Maps",
    description:
      "Pulls zip codes from Google Sheets, queries the Google Maps API for local businesses by category, deduplicates results, and exports enriched leads back to Sheets — with exponential backoff retry logic and error handling.",
    steps: ["Schedule Trigger", "GS - Get Zip Codes", "Loop Zips", "GMaps API", "Remove Duplicates", "Exponential Backoff", "Add Rows to Sheets"],
    tags: ["Google Maps API", "Google Sheets", "Zip Code Targeting"],
  },
  {
    platform: "n8n",
    title: "IT Lead Generation Pipeline",
    description:
      "Complete outbound lead generation system for IT services — scrapes LinkedIn for prospects, enriches with Apollo, deduplicates against CRM data, schedules follow-ups, generates daily reports, and logs errors for monitoring.",
    steps: ["Schedule Trigger", "LinkedIn Scraper", "Filter Categories", "Apollo Enrichment", "Check Duplicates", "Schedule Follow-up", "Send Report"],
    tags: ["LinkedIn Scraping", "Apollo Enrichment", "Deduplication"],
  },
  {
    platform: "n8n",
    title: "LessEnergy — Supplier Automation Suite",
    description:
      "Energy sector automation suite with multiple interconnected workflows — supplier assignment, quote pipeline with PDF generation, error handling with email alerts, translation reporting, and real-time Slack/SMS status notifications.",
    steps: ["Assignment Webhook", "Assign Supplier Logic", "Validate Fields", "Calculate Rebate", "Generate PDF Quote", "Send Quote Email", "Slack Notification"],
    tags: ["Multi-Workflow Architecture", "PDF Generation", "Slack Notifications"],
  },
  {
    platform: "n8n",
    title: "Google Search Ads & SEO Tracker",
    description:
      "Pulls Google Search Console performance data and Google Ads reports on a schedule, analyzes them with OpenAI for actionable insights, and logs everything to Google Sheets for a hands-free SEO and paid search dashboard.",
    steps: ["Schedule Trigger", "GSC - Performance", "Google Ads - Report", "OpenAI - Analyze", "GS - Update Sheet"],
    tags: ["Google Search Console", "Google Ads API", "OpenAI Analysis"],
  },
  {
    platform: "n8n",
    title: "AI-Powered Messenger Chatbot",
    description:
      "24/7 AI sales assistant for Facebook Messenger that handles customer inquiries using an OpenRouter LLM with conversation memory, automated response generation, and intelligent routing for sales qualification.",
    steps: ["Webhook Trigger", "Extract Message", "AI Sales Agent", "OpenRouter Chat Model", "Window Buffer Memory", "Send Messenger Reply"],
    tags: ["Facebook Messenger API", "OpenRouter LLM", "Conversation Memory"],
  },
  {
    platform: "n8n",
    title: "Personalized Cold Email AI Agent",
    description:
      "Reads prospect data from Google Sheets, researches companies, generates hyper-personalized email copy with AI, and sends targeted outreach via Gmail with status tracking.",
    steps: ["Schedule Trigger", "Get Prospects", "Research Company", "AI Email Writer", "Personalize Email", "Send Email", "Update Status"],
    tags: ["Google Sheets Integration", "AI Personalization", "Company Research"],
  },
  {
    platform: "n8n",
    title: "HeyGen AI Clone Avatar",
    description:
      "No-code AI avatar video generation using the HeyGen API with intelligent polling for render completion, AI-powered script writing, and automated delivery for scalable personalized video.",
    steps: ["Form Trigger", "AI Script Writer", "Create Video Request", "Wait for Render", "Check Render Status", "Download Video"],
    tags: ["HeyGen API Integration", "AI Script Writing", "Render Polling"],
  },
  {
    platform: "n8n",
    title: "LinkedIn Auto-Post Agent",
    description:
      "Automated LinkedIn content creation using Google Gemini for post generation, AI image creation, and scheduled posting of professional content with custom visuals.",
    steps: ["Schedule Trigger", "AI Content Agent", "Google Gemini Chat", "Generate Post Copy", "Generate Image", "Post to LinkedIn"],
    tags: ["Google Gemini AI", "AI Image Generation", "LinkedIn API"],
  },
  {
    platform: "n8n",
    title: "YouTube Shorts Automation",
    description:
      "Scheduled AI workflow that generates YouTube Shorts content using Google Gemini, processes data with JavaScript, and manages API requests with conditional logic for reliable publishing.",
    steps: ["Schedule Trigger", "AI Agent", "Google Gemini Chat Model", "Code in JavaScript", "HTTP Request", "If Condition"],
    tags: ["Google Gemini AI", "Scheduled Triggers", "JavaScript Processing"],
  },
  {
    platform: "n8n",
    title: "AI Content Team",
    description:
      "Multi-team content system that routes form submissions to specialized AI content teams, generates and edits images, creates platform-optimized content, and delivers final assets via Gmail.",
    steps: ["Form Trigger", "Content Router", "AI Content Generator", "Generate Image", "Edit Image", "Format Content", "Send via Gmail"],
    tags: ["Form-based Routing", "AI Image Generation", "Multi-team Workflow"],
  },
];

export type CaseStudy = {
  category: string;
  title: string;
  description: string;
  platforms: Platform[];
  timeSaved: string;
  tasks: string;
  integrations: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    category: "Financial Automation",
    title: "Xero-Asana Financial Integration",
    description:
      "Automated export of Xero account transactions as CSV attachments to Asana tasks, handling API limitations with custom Code steps and conditional logic.",
    platforms: ["Zapier"],
    timeSaved: "20+ hrs/week",
    tasks: "450",
    integrations: "3",
    tags: ["Xero", "Asana", "CSV Export", "Webhooks"],
  },
  {
    category: "CRM & Sales",
    title: "Multi-Channel Lead Capture System",
    description:
      "Scalable workflows for lead capture across email, SMS, and web forms with real-time CRM updates using filters, delays, and conditional paths.",
    platforms: ["Make.com", "GoHighLevel"],
    timeSaved: "15 hrs/week",
    tasks: "280",
    integrations: "5",
    tags: ["Lead Gen", "CRM", "SMS", "Email"],
  },
  {
    category: "AI & Data",
    title: "AI-Powered Data Orchestration",
    description:
      "Complex n8n workflows for AI orchestration, data mapping, and multi-app integrations to streamline business reporting processes.",
    platforms: ["n8n"],
    timeSaved: "25 hrs/week",
    tasks: "620",
    integrations: "8",
    tags: ["AI", "Data Pipeline", "Reporting", "API"],
  },
  {
    category: "Marketing",
    title: "GoHighLevel Funnel Optimization",
    description:
      "Optimized sales funnels and automated follow-up sequences with custom workflows for improved conversion rates.",
    platforms: ["GoHighLevel"],
    timeSaved: "10 hrs/week",
    tasks: "180",
    integrations: "4",
    tags: ["Funnels", "Email Sequences", "Conversion"],
  },
  {
    category: "Integration",
    title: "Cross-Platform Sync Engine",
    description:
      "Unified automation system syncing data across Zapier, Make, and n8n with real-time monitoring and error handling.",
    platforms: ["Zapier", "Make.com", "n8n"],
    timeSaved: "30 hrs/week",
    tasks: "890",
    integrations: "12",
    tags: ["Multi-Platform", "Sync", "Real-time"],
  },
];
