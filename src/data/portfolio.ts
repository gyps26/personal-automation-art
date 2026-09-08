export type Platform = "Zapier" | "Make.com" | "n8n" | "GoHighLevel";
export type StepType = "trigger" | "action" | "filter" | "ai" | "router" | "code";

export type WorkflowStep = { id: string; name: string; type: StepType; module: string };
export type Workflow = { id: string; title: string; description: string; platform: Exclude<Platform, "GoHighLevel">; platformColor: string; image: string | null; images?: Array<string | null>; features: string[]; workflowSteps: WorkflowStep[]; howItWorks: { overview: string; steps: string[]; benefits: string[] } };
export type Funnel = { id: string; title: string; niche: string; description: string; image: string | null; features: string[]; sections: string[]; link: string; extraImages?: { url: string | null; caption: string }[] };

export const workflows: Workflow[] = [
  {
    "id": "ai-content-repurposing",
    "title": "AI Content Repurposing",
    "description": "Automated Zapier workflow that monitors Google Drive for new files, uses AI to generate transcriptions and blog posts, then distributes content across Facebook Pages and LinkedIn through conditional paths.",
    "platform": "Zapier",
    "platformColor": "bg-orange-500",
    "image": "ai-content-repurposing-D2EjrTwq.png",
    "features": [
      "AI Transcription",
      "Blog Generation",
      "Multi-platform Publishing",
      "Conditional Routing"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "New File in Drive",
        "type": "trigger",
        "module": "Google Drive"
      },
      {
        "id": "2",
        "name": "AI Transcription",
        "type": "ai",
        "module": "OpenAI Whisper"
      },
      {
        "id": "3",
        "name": "Generate Blog Post",
        "type": "ai",
        "module": "ChatGPT"
      },
      {
        "id": "4",
        "name": "Content Router",
        "type": "router",
        "module": "Paths by Zapier"
      },
      {
        "id": "5",
        "name": "Post to Facebook",
        "type": "action",
        "module": "Facebook Pages"
      },
      {
        "id": "6",
        "name": "Post to LinkedIn",
        "type": "action",
        "module": "LinkedIn"
      }
    ],
    "howItWorks": {
      "overview": "This workflow transforms raw audio/video content into polished blog posts and social media content automatically.",
      "steps": [
        "When a new file is uploaded to the designated Google Drive folder, the workflow triggers automatically.",
        "OpenAI Whisper transcribes the audio/video content into accurate text format.",
        "ChatGPT analyzes the transcription and generates a well-structured blog post with proper formatting.",
        "The Paths router evaluates content type and routes to appropriate publishing channels.",
        "Content is posted to Facebook Pages with optimized formatting for social engagement.",
        "Simultaneously, a professional version is published to LinkedIn for B2B audience reach."
      ],
      "benefits": [
        "Saves 4+ hours per content piece",
        "Consistent multi-platform presence",
        "AI ensures quality transcription"
      ]
    }
  },
  {
    "id": "lead-actions-automation",
    "title": "Lead Actions Automation",
    "description": "Complex Zapier workflow triggered by Asana task updates. Routes leads through different paths based on status (Ready to Start, No Response, Quoted, Approved, Paid and Closed) with automated email notifications and folder creation.",
    "platform": "Zapier",
    "platformColor": "bg-orange-500",
    "image": "lead-actions-automation-qQcH_eKT.png",
    "features": [
      "Status-based Routing",
      "Gmail Integration",
      "Google Drive Automation",
      "Asana Subtasks"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Task Updated",
        "type": "trigger",
        "module": "Asana"
      },
      {
        "id": "2",
        "name": "Status Filter",
        "type": "filter",
        "module": "Filter by Zapier"
      },
      {
        "id": "3",
        "name": "Status Router",
        "type": "router",
        "module": "Paths by Zapier"
      },
      {
        "id": "4",
        "name": "Send Email",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "5",
        "name": "Create Folder",
        "type": "action",
        "module": "Google Drive"
      },
      {
        "id": "6",
        "name": "Add Subtask",
        "type": "action",
        "module": "Asana"
      }
    ],
    "howItWorks": {
      "overview": "This workflow automates the entire lead management lifecycle by triggering actions based on lead status changes in Asana.",
      "steps": [
        "The workflow monitors Asana for any task status updates in the leads project.",
        "A filter validates that the update is a status change worth processing.",
        "The router evaluates the new status and directs to the appropriate action path (Ready, Quoted, Approved, etc.).",
        "Personalized emails are automatically sent via Gmail based on the lead stage.",
        "For approved leads, a dedicated Google Drive folder is created for project documentation.",
        "Relevant subtasks are automatically added to Asana to track next steps."
      ],
      "benefits": [
        "Zero manual email sending",
        "Consistent client communication",
        "Organized file structure for every project"
      ]
    }
  },
  {
    "id": "automated-leads-enrichment",
    "title": "Automated Leads Enrichment",
    "description": "Lead enrichment pipeline using Webhooks to capture incoming leads, Apollo for company data enrichment, then routing high-priority vs low-priority leads to different destinations including Slack notifications and AI-drafted emails.",
    "platform": "Zapier",
    "platformColor": "bg-orange-500",
    "image": "automated-leads-enrichment-CJcLaH37.png",
    "features": [
      "Apollo Enrichment",
      "Priority Routing",
      "Slack Notifications",
      "AI Email Drafts"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Catch Webhook",
        "type": "trigger",
        "module": "Webhooks by Zapier"
      },
      {
        "id": "2",
        "name": "Enrich Lead",
        "type": "action",
        "module": "Apollo.io"
      },
      {
        "id": "3",
        "name": "Priority Filter",
        "type": "filter",
        "module": "Filter by Zapier"
      },
      {
        "id": "4",
        "name": "Priority Router",
        "type": "router",
        "module": "Paths by Zapier"
      },
      {
        "id": "5",
        "name": "Notify Team",
        "type": "action",
        "module": "Slack"
      },
      {
        "id": "6",
        "name": "Draft Email",
        "type": "ai",
        "module": "ChatGPT"
      }
    ],
    "howItWorks": {
      "overview": "This pipeline enriches incoming leads with company data and intelligently routes them based on potential value.",
      "steps": [
        "Incoming leads are captured via webhook from forms, landing pages, or external systems.",
        "Apollo.io enriches each lead with company size, industry, funding, and contact details.",
        "A filter scores leads based on enriched data to determine priority level.",
        "High-priority leads are routed for immediate attention, low-priority for nurturing.",
        "Sales team receives instant Slack notifications for hot leads with full context.",
        "ChatGPT drafts personalized outreach emails based on the enriched company profile."
      ],
      "benefits": [
        "2x faster lead response time",
        "Prioritized sales pipeline",
        "Personalized outreach at scale"
      ]
    }
  },
  {
    "id": "xero-asana-integration",
    "title": "Xero-Asana Transaction Export",
    "description": "Make.com scenario that watches Asana for completed tasks, pulls account transactions from Xero, processes data through iterators and aggregators, exports to Google Sheets as CSV, and uploads as attachments back to Asana.",
    "platform": "Make.com",
    "platformColor": "bg-purple-500",
    "image": "xero-asana-integration-DzE_LK8L.png",
    "features": [
      "Xero API Integration",
      "CSV Generation",
      "Data Aggregation",
      "Asana Attachments"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Watch Tasks",
        "type": "trigger",
        "module": "Asana"
      },
      {
        "id": "2",
        "name": "Get Transactions",
        "type": "action",
        "module": "Xero"
      },
      {
        "id": "3",
        "name": "Iterator",
        "type": "code",
        "module": "Flow Control"
      },
      {
        "id": "4",
        "name": "Array Aggregator",
        "type": "code",
        "module": "Flow Control"
      },
      {
        "id": "5",
        "name": "Create CSV",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "6",
        "name": "Upload Attachment",
        "type": "action",
        "module": "Asana"
      }
    ],
    "howItWorks": {
      "overview": "This scenario automates financial reporting by exporting Xero transactions when Asana tasks are marked complete.",
      "steps": [
        "The workflow watches for tasks marked as \"Complete\" in the reporting Asana project.",
        "Upon trigger, it queries Xero API to fetch all transactions for the specified account and date range.",
        "The Iterator processes each transaction individually for proper data formatting.",
        "Array Aggregator compiles all formatted transactions into a structured dataset.",
        "Google Sheets generates a formatted CSV file with proper headers and calculations.",
        "The completed CSV is automatically uploaded as an attachment to the original Asana task."
      ],
      "benefits": [
        "Eliminates manual export work",
        "Consistent report formatting",
        "Audit trail in Asana"
      ]
    }
  },
  {
    "id": "email-automation",
    "title": "Email Automation AI Agent",
    "description": "AI-powered email automation workflow triggered by chat messages. Uses OpenAI Chat Model with Simple Memory for context retention, creates Gmail drafts automatically, and logs data to Google Sheets for tracking.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "email-automation-DxUQ3FUb.png",
    "features": [
      "OpenAI Integration",
      "Simple Memory",
      "Gmail Draft Creation",
      "Google Sheets Logging"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Chat Trigger",
        "type": "trigger",
        "module": "Chat Trigger"
      },
      {
        "id": "2",
        "name": "AI Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "3",
        "name": "OpenAI Chat",
        "type": "ai",
        "module": "OpenAI Chat Model"
      },
      {
        "id": "4",
        "name": "Simple Memory",
        "type": "code",
        "module": "Simple Memory"
      },
      {
        "id": "5",
        "name": "Create Draft",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "6",
        "name": "Log to Sheets",
        "type": "action",
        "module": "Google Sheets"
      }
    ],
    "howItWorks": {
      "overview": "This AI agent handles email composition through natural language conversations while maintaining context across sessions.",
      "steps": [
        "Users interact via chat interface to request email drafts or follow-ups.",
        "The AI Agent orchestrates the conversation flow and determines required actions.",
        "OpenAI Chat Model generates professional email content based on user instructions.",
        "Simple Memory retains conversation history for contextual responses and follow-ups.",
        "Gmail API creates draft emails in the user's inbox ready for review and sending.",
        "All interactions are logged to Google Sheets for analytics and audit purposes."
      ],
      "benefits": [
        "Natural language email creation",
        "Context-aware conversations",
        "Full activity tracking"
      ]
    }
  },
  {
    "id": "store-stock",
    "title": "Store Stock AI Assistant",
    "description": "Intelligent inventory management system using AI Agent with Google Gemini Chat Model. Handles chat messages to update stock levels, search inventory, and maintain memory for contextual conversations.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "store-stock-WqmY1H8T.png",
    "features": [
      "Google Gemini AI",
      "Stock Updates",
      "Inventory Search",
      "Contextual Memory"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Chat Message",
        "type": "trigger",
        "module": "Chat Trigger"
      },
      {
        "id": "2",
        "name": "AI Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "3",
        "name": "Gemini Chat",
        "type": "ai",
        "module": "Google Gemini"
      },
      {
        "id": "4",
        "name": "Update Stock",
        "type": "action",
        "module": "Tool: Update Stock"
      },
      {
        "id": "5",
        "name": "Search Inventory",
        "type": "action",
        "module": "Tool: Search"
      },
      {
        "id": "6",
        "name": "Window Buffer",
        "type": "code",
        "module": "Window Buffer Memory"
      }
    ],
    "howItWorks": {
      "overview": "This AI assistant enables natural language inventory management, allowing staff to query and update stock via conversational interface.",
      "steps": [
        "Staff members send natural language messages like \"Add 50 units of SKU-123\" or \"What's the stock level for widgets?\"",
        "The AI Agent parses intent and routes to the appropriate tool or response.",
        "Google Gemini provides intelligent understanding of complex queries and natural responses.",
        "The Update Stock tool connects to the inventory database to modify quantities.",
        "Search Inventory tool queries the database and returns formatted results.",
        "Window Buffer Memory maintains recent conversation context for follow-up questions."
      ],
      "benefits": [
        "No training required for staff",
        "Faster inventory updates",
        "Hands-free operation possible"
      ]
    }
  },
  {
    "id": "doctor-appointment",
    "title": "Doctor Appointment Scheduler",
    "description": "WhatsApp-integrated AI agent for medical appointment scheduling. Manages patient data, appointments in Google Sheets, with capabilities to add, get, and reschedule appointments through natural language conversations.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "doctor-appointment-Ciu8S9_i.png",
    "features": [
      "WhatsApp Integration",
      "Patient Management",
      "Appointment Scheduling",
      "Google Sheets Database"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "WhatsApp Message",
        "type": "trigger",
        "module": "WhatsApp Trigger"
      },
      {
        "id": "2",
        "name": "AI Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "3",
        "name": "OpenAI Chat",
        "type": "ai",
        "module": "OpenAI Chat Model"
      },
      {
        "id": "4",
        "name": "Add Appointment",
        "type": "action",
        "module": "Tool: Add Appointment"
      },
      {
        "id": "5",
        "name": "Get Appointments",
        "type": "action",
        "module": "Tool: Get Appointments"
      },
      {
        "id": "6",
        "name": "Reschedule",
        "type": "action",
        "module": "Tool: Reschedule"
      }
    ],
    "howItWorks": {
      "overview": "This WhatsApp bot allows patients to book, check, and reschedule appointments through natural conversation.",
      "steps": [
        "Patients send WhatsApp messages like \"I need to see Dr. Smith next Tuesday at 2pm.\"",
        "The AI Agent interprets the request and identifies the required action.",
        "OpenAI Chat Model handles complex scheduling queries and confirms details with patients.",
        "Add Appointment tool creates new bookings in the Google Sheets database.",
        "Get Appointments tool retrieves upcoming appointments for patient inquiry.",
        "Reschedule tool modifies existing appointments and notifies relevant parties."
      ],
      "benefits": [
        "24/7 booking availability",
        "Reduced phone call volume",
        "Instant confirmations"
      ]
    }
  },
  {
    "id": "google-forms-router",
    "title": "Google Forms Multi-Channel Router",
    "description": "Form response automation that watches Google Forms submissions, adds rows to Google Sheets, then routes notifications to both Gmail and Microsoft Teams based on configurable conditions.",
    "platform": "Make.com",
    "platformColor": "bg-purple-500",
    "image": "google-forms-router-DBJossmu.png",
    "features": [
      "Google Forms Trigger",
      "Conditional Routing",
      "Gmail Notifications",
      "Microsoft Teams Integration"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Watch Responses",
        "type": "trigger",
        "module": "Google Forms"
      },
      {
        "id": "2",
        "name": "Add Row",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "3",
        "name": "Router",
        "type": "router",
        "module": "Router"
      },
      {
        "id": "4",
        "name": "Send Email",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "5",
        "name": "Post to Teams",
        "type": "action",
        "module": "Microsoft Teams"
      }
    ],
    "howItWorks": {
      "overview": "This automation captures form submissions and distributes notifications across email and team channels based on response content.",
      "steps": [
        "Google Forms submissions trigger the workflow instantly upon submission.",
        "Response data is logged to Google Sheets for record-keeping and analysis.",
        "The Router evaluates response content to determine notification channels.",
        "Gmail sends personalized email confirmations to submitters and stakeholders.",
        "Microsoft Teams receives formatted notifications for team visibility."
      ],
      "benefits": [
        "Instant multi-channel notifications",
        "Centralized data logging",
        "Flexible routing rules"
      ]
    }
  },
  {
    "id": "social-media-personalization",
    "title": "AI Social Media Personalization",
    "description": "Content distribution workflow using Google Gemini AI to summarize articles from Google Sheets, then personalize and post content across LinkedIn, Telegram Bot, and Facebook Pages with platform-specific formatting.",
    "platform": "Make.com",
    "platformColor": "bg-purple-500",
    "image": "social-media-personalization-Buhd_FsH.png",
    "features": [
      "Google Gemini AI",
      "Content Personalization",
      "Multi-platform Posting",
      "Article Summarization"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Get Articles",
        "type": "trigger",
        "module": "Google Sheets"
      },
      {
        "id": "2",
        "name": "AI Summarize",
        "type": "ai",
        "module": "Google Gemini"
      },
      {
        "id": "3",
        "name": "Personalize Content",
        "type": "ai",
        "module": "Google Gemini"
      },
      {
        "id": "4",
        "name": "Post LinkedIn",
        "type": "action",
        "module": "LinkedIn"
      },
      {
        "id": "5",
        "name": "Send Telegram",
        "type": "action",
        "module": "Telegram Bot"
      },
      {
        "id": "6",
        "name": "Post Facebook",
        "type": "action",
        "module": "Facebook Pages"
      }
    ],
    "howItWorks": {
      "overview": "This workflow transforms long-form articles into platform-optimized social posts with AI-driven personalization.",
      "steps": [
        "Articles and source content are fetched from the Google Sheets content queue.",
        "Google Gemini AI creates concise summaries highlighting key takeaways.",
        "Content is personalized with platform-specific tone, hashtags, and formatting.",
        "LinkedIn receives professional, insight-focused posts with relevant hashtags.",
        "Telegram Bot distributes quick-read summaries to subscriber channels.",
        "Facebook Pages get engagement-optimized posts with appropriate media."
      ],
      "benefits": [
        "Consistent cross-platform presence",
        "AI-optimized for each platform",
        "Batch content processing"
      ]
    }
  },
  {
    "id": "content-summarizer",
    "title": "Content Summarizer & Distributor",
    "description": "Automated content pipeline that fetches data from Google Sheets, uses AI Summarizer for content condensation, then routes personalized messages to LinkedIn and Telegram with platform-optimized formatting.",
    "platform": "Make.com",
    "platformColor": "bg-purple-500",
    "image": "content-summarizer-2x7GKVNF.png",
    "features": [
      "AI Summarization",
      "LinkedIn Publishing",
      "Telegram Bot Integration",
      "Personalized Content"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Search Rows",
        "type": "trigger",
        "module": "Google Sheets"
      },
      {
        "id": "2",
        "name": "AI Summarizer",
        "type": "ai",
        "module": "AI Summarizer"
      },
      {
        "id": "3",
        "name": "Personalize Message",
        "type": "ai",
        "module": "AI Text Generator"
      },
      {
        "id": "4",
        "name": "Share Update",
        "type": "action",
        "module": "LinkedIn"
      },
      {
        "id": "5",
        "name": "Send Message",
        "type": "action",
        "module": "Telegram Bot"
      }
    ],
    "howItWorks": {
      "overview": "This pipeline automates content distribution by summarizing articles and pushing personalized updates to social channels.",
      "steps": [
        "The workflow searches Google Sheets for new or updated content rows to process.",
        "AI Summarizer condenses lengthy articles into digestible key points.",
        "AI Text Generator creates personalized messages tailored to each platform audience.",
        "LinkedIn receives professionally formatted updates with engagement hooks.",
        "Telegram Bot pushes concise summaries to subscribed channels and groups."
      ],
      "benefits": [
        "Automated content repurposing",
        "Consistent posting schedule",
        "Platform-tailored messaging"
      ]
    }
  },
  {
    "id": "ai-receptionist-mcp",
    "title": "AI Receptionist Kylie - MCP Server",
    "description": "Advanced AI receptionist workflow using MCP Server with VAPI integration. Handles client lookup in CRM, calendar availability checking, appointment booking, updating, and deletion with intelligent routing for new vs existing clients.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "ai-receptionist-mcp-D0KUeOXx.png",
    "features": [
      "MCP Server Integration",
      "CRM Client Lookup",
      "Calendar Management",
      "Appointment CRUD Operations"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "MCP Server Webhook",
        "type": "trigger",
        "module": "MCP Webhook"
      },
      {
        "id": "2",
        "name": "Extract Tool Request",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "3",
        "name": "Client/Action Router",
        "type": "router",
        "module": "Switch"
      },
      {
        "id": "4",
        "name": "Search Client in CRM",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "5",
        "name": "Calendar Operations",
        "type": "action",
        "module": "Google Calendar"
      },
      {
        "id": "6",
        "name": "Format & Respond",
        "type": "code",
        "module": "Response Handler"
      }
    ],
    "howItWorks": {
      "overview": "This AI receptionist workflow acts as a complete appointment management system, handling client interactions through voice AI via MCP Server integration.",
      "steps": [
        "MCP Server Webhook receives incoming requests from VAPI voice AI for client and appointment operations.",
        "Extract Tool Request parses the incoming payload to identify the requested action type.",
        "The Switch router intelligently directs flow based on action: client lookup, availability check, booking, update, or deletion.",
        "CRM lookup searches Google Sheets to identify if caller is a new or existing client.",
        "Google Calendar integration handles availability checking, event creation, updates, and deletions.",
        "Response handlers format appropriate responses for each scenario (client found, available slots, booking confirmed, etc.)."
      ],
      "benefits": [
        "24/7 automated receptionist",
        "Seamless CRM integration",
        "Complete appointment lifecycle management"
      ]
    }
  },
  {
    "id": "automated-image-translation",
    "title": "Automated Image Translation System",
    "description": "Advanced n8n workflow that monitors Google Drive for new images, detects source language using Gemini Vision API, translates images to multiple target languages via AI, then routes success/failure with Google Sheets logging and Slack alerts.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "automated-image-translation-B1_GJskt.png",
    "features": [
      "Google Drive Monitoring",
      "Gemini Vision API",
      "Multi-language Translation",
      "Error Handling & Alerts"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Watch Incoming Folder",
        "type": "trigger",
        "module": "Google Drive"
      },
      {
        "id": "2",
        "name": "Download Image",
        "type": "action",
        "module": "Google Drive"
      },
      {
        "id": "3",
        "name": "Detect Source Language",
        "type": "ai",
        "module": "Gemini Vision API"
      },
      {
        "id": "4",
        "name": "Build Translation Context",
        "type": "code",
        "module": "Function"
      },
      {
        "id": "5",
        "name": "Translate Image",
        "type": "ai",
        "module": "Gemini AI"
      },
      {
        "id": "6",
        "name": "Check Translation Status",
        "type": "router",
        "module": "Switch"
      }
    ],
    "howItWorks": {
      "overview": "This workflow automates the translation of images containing text by detecting the source language and generating translated versions in multiple target languages.",
      "steps": [
        "Google Drive trigger watches the \"Incoming\" folder for new image uploads.",
        "Images are downloaded and sent to Gemini Vision API for text and language detection.",
        "A function node builds the translation context including target languages and formatting rules.",
        "Gemini AI translates the image content while preserving visual layout and styling.",
        "A switch router checks translation status and routes to success or failure paths.",
        "Successful translations are saved to output folders with Google Sheets logging, while failures trigger Slack alerts."
      ],
      "benefits": [
        "Automated multi-language support",
        "AI-powered visual translation",
        "Complete audit trail with error handling"
      ]
    }
  },
  {
    "id": "nano-banana-ad-machine",
    "title": "Nano Banana Pro - Ad Machine",
    "description": "AI-powered ad generation workflow that processes form submissions with image uploads, analyzes creative requirements, leverages Nano Banana AI models for content generation, and produces structured ad copy with file conversion and cloud storage.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "nano-banana-ad-machine-DcXqjzGs.png",
    "features": [
      "Form Processing",
      "Image Analysis",
      "AI Content Generation",
      "File Conversion & Storage"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "On Form Submission",
        "type": "trigger",
        "module": "Form"
      },
      {
        "id": "2",
        "name": "Host Image",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "3",
        "name": "Analyze an Image",
        "type": "ai",
        "module": "Vision API"
      },
      {
        "id": "4",
        "name": "Create Folder",
        "type": "action",
        "module": "File System"
      },
      {
        "id": "5",
        "name": "Creative Metadata Builder",
        "type": "code",
        "module": "Function"
      },
      {
        "id": "6",
        "name": "OpenRouter Chat Model",
        "type": "ai",
        "module": "LLM"
      },
      {
        "id": "7",
        "name": "Nano Banana Processing",
        "type": "ai",
        "module": "Nano Banana API"
      },
      {
        "id": "8",
        "name": "Structured Output Parser",
        "type": "code",
        "module": "Function"
      },
      {
        "id": "9",
        "name": "Convert to File",
        "type": "action",
        "module": "File Conversion"
      },
      {
        "id": "10",
        "name": "Upload File",
        "type": "action",
        "module": "Cloud Storage"
      }
    ],
    "howItWorks": {
      "overview": "This workflow automates professional ad generation by analyzing submitted images, generating creative metadata, and producing structured ad copy through multiple AI models with file conversion and storage.",
      "steps": [
        "Form submission trigger captures user input including image uploads for ad generation.",
        "The submitted image is hosted via HTTP endpoint for processing by downstream AI models.",
        "Vision API analyzes the image to extract visual elements, composition, and creative insights.",
        "A folder structure is created in the file system to organize generated ad variations by type.",
        "A custom function builds comprehensive creative metadata including brand guidelines and target audience parameters.",
        "OpenRouter Chat Model generates initial ad copy concepts based on visual analysis and metadata.",
        "Nano Banana AI models process the content to produce multiple ad variations optimized for different platforms.",
        "A structured output parser formats all generated content into consistent JSON schema for easy integration.",
        "File conversion transforms the structured output into various formats (PDF, DOCX, HTML).",
        "Generated files are uploaded to cloud storage with automatic naming and organization by date and campaign."
      ],
      "benefits": [
        "Rapid ad creation with AI assistance",
        "Multiple platform-optimized variations",
        "Structured output for CMS integration"
      ]
    }
  },
  {
    "id": "sora-ring-doorbell-videos",
    "title": "My AI Advantage - Sora 2 Ring Doorbell Videos",
    "description": "Advanced AI video generation workflow that reads data from Google Sheets, uses AI agents with GPT to create influencer ad content, generates videos via Sora 2 API, and tracks generation status with automatic success/error sheet updates.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "sora-ring-doorbell-videos-hZ8ioGDT.png",
    "features": [
      "Sora 2 Video Generation",
      "AI Influencer Ads Agent",
      "Google Sheets Integration",
      "Status Tracking & Error Handling"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Execute Trigger",
        "type": "trigger",
        "module": "Manual"
      },
      {
        "id": "2",
        "name": "Get Rows in Sheet",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "3",
        "name": "Influencer Ads Creator Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "4",
        "name": "GPT Model",
        "type": "ai",
        "module": "OpenAI"
      },
      {
        "id": "5",
        "name": "Create Video Request",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "6",
        "name": "Wait for Processing",
        "type": "action",
        "module": "Wait"
      },
      {
        "id": "7",
        "name": "Get Video Status",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "8",
        "name": "Status Router",
        "type": "router",
        "module": "Switch"
      },
      {
        "id": "9",
        "name": "Split URLs",
        "type": "code",
        "module": "Function"
      },
      {
        "id": "10",
        "name": "Update Sheet Status",
        "type": "action",
        "module": "Google Sheets"
      }
    ],
    "howItWorks": {
      "overview": "This workflow automates the creation of Ring doorbell style promotional videos using Sora 2 AI, with intelligent content generation and comprehensive status tracking.",
      "steps": [
        "Manual execution trigger initiates the video generation batch process.",
        "Google Sheets integration retrieves rows containing video requirements and campaign details.",
        "Influencer Ads Creator Agent analyzes requirements and generates creative ad concepts.",
        "GPT model processes the concepts to create compelling video scripts and descriptions.",
        "HTTP request sends video generation request to Sora 2 API with optimized parameters.",
        "Wait node pauses execution to allow video processing time on the API side.",
        "Another HTTP request checks video generation status from the Sora 2 API.",
        "Switch router evaluates status (success/in progress/fallback) and directs flow accordingly.",
        "Function node splits generated video URLs for multi-format distribution.",
        "Google Sheets is updated with completion status or error details for tracking."
      ],
      "benefits": [
        "Automated AI video generation at scale",
        "Intelligent content creation with GPT",
        "Complete status tracking and error recovery"
      ]
    }
  },
  {
    "id": "youtube-shorts-automation",
    "title": "YouTube Shorts Automation",
    "description": "Scheduled AI-powered workflow that automatically generates YouTube Shorts content using Google Gemini, processes data with JavaScript, and manages API requests with conditional logic for reliable content publishing.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "youtube-shorts-automation--Ag9Y1DG.png",
    "features": [
      "Google Gemini AI",
      "Scheduled Triggers",
      "JavaScript Processing",
      "Conditional Logic & Retry Handling"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Schedule Trigger",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "2",
        "name": "AI Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "3",
        "name": "Google Gemini Chat Model",
        "type": "ai",
        "module": "Google Gemini"
      },
      {
        "id": "4",
        "name": "Code in JavaScript",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "5",
        "name": "HTTP Request",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "6",
        "name": "HTTP Request1",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "7",
        "name": "If Condition",
        "type": "router",
        "module": "If"
      },
      {
        "id": "8",
        "name": "HTTP Request2",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "9",
        "name": "Wait (Deactivated)",
        "type": "action",
        "module": "Wait"
      }
    ],
    "howItWorks": {
      "overview": "This workflow automates YouTube Shorts content creation by leveraging Google Gemini AI for intelligent content generation with scheduled execution and robust error handling.",
      "steps": [
        "Schedule Trigger initiates the workflow at predefined intervals for consistent content output.",
        "AI Agent orchestrates the content generation process with chat model integration.",
        "Google Gemini Chat Model generates creative, engaging YouTube Shorts scripts and concepts.",
        "JavaScript code node processes and formats the AI-generated content for API compatibility.",
        "First HTTP Request sends the processed content to the generative language API.",
        "Second HTTP Request handles additional API calls for content verification or enhancement.",
        "If condition evaluates response status to determine success or failure path.",
        "HTTP Request2 executes on successful condition for final content publishing.",
        "Wait node (deactivated) provides optional delay for retry logic or rate limiting."
      ],
      "benefits": [
        "Fully automated content scheduling",
        "AI-powered creative generation with Gemini",
        "Robust error handling with conditional logic"
      ]
    }
  },
  {
    "id": "meta-ads-competitor-research",
    "title": "Meta Ads - Competitor Research",
    "description": "Comprehensive competitor research automation that scrapes Meta ad data via webhooks, enriches it with OpenAI analysis, and organizes results into structured Google Sheets reports with dynamic sheet creation and conditional routing.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "meta-ads-competitor-research-B5yHhm__.png",
    "features": [
      "OpenAI Chat Model",
      "Google Sheets Integration",
      "Webhook Triggers",
      "Information Extraction"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Webhook",
        "type": "trigger",
        "module": "Webhook"
      },
      {
        "id": "2",
        "name": "Get row(s) in sheet",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "3",
        "name": "Filter",
        "type": "router",
        "module": "Filter"
      },
      {
        "id": "4",
        "name": "Loop Over Items",
        "type": "action",
        "module": "Loop"
      },
      {
        "id": "5",
        "name": "HTTP Request",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "6",
        "name": "If",
        "type": "router",
        "module": "If"
      },
      {
        "id": "7",
        "name": "Extract the data",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "8",
        "name": "Information Extractor",
        "type": "ai",
        "module": "Information Extractor"
      },
      {
        "id": "9",
        "name": "OpenAI Chat Model",
        "type": "ai",
        "module": "OpenAI"
      },
      {
        "id": "10",
        "name": "Clean and format data",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "11",
        "name": "Aggregate",
        "type": "action",
        "module": "Aggregate"
      },
      {
        "id": "12",
        "name": "Get sheets",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "13",
        "name": "Split array",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "14",
        "name": "Set Sheet Name",
        "type": "action",
        "module": "Set"
      },
      {
        "id": "15",
        "name": "Organize google sheets output",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "16",
        "name": "If",
        "type": "router",
        "module": "If"
      },
      {
        "id": "17",
        "name": "Create sheet",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "18",
        "name": "Add Header Row",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "19",
        "name": "Append or update row to sheet",
        "type": "action",
        "module": "Google Sheets"
      }
    ],
    "howItWorks": {
      "overview": "This workflow automates Meta Ads competitor research by fetching ad data, enriching it with AI-powered analysis using OpenAI, and organizing structured reports in Google Sheets.",
      "steps": [
        "Webhook receives competitor research requests with target parameters.",
        "Google Sheets node retrieves existing data to check for duplicates via filter.",
        "Filter removes already-processed entries to avoid redundant work.",
        "Loop Over Items iterates through each competitor for individual processing.",
        "HTTP Request fetches Meta ad library data for each competitor.",
        "If condition checks response validity before proceeding with extraction.",
        "Code node extracts relevant ad data fields from the raw response.",
        "Information Extractor with OpenAI Chat Model analyzes and enriches ad insights.",
        "Clean and format data node structures the enriched data for reporting.",
        "Aggregate combines all processed results into a unified dataset.",
        "Google Sheets nodes dynamically create sheets, add headers, and append organized data."
      ],
      "benefits": [
        "Automated competitor ad intelligence",
        "AI-powered data enrichment with OpenAI",
        "Dynamic Google Sheets report generation"
      ]
    }
  },
  {
    "id": "ai-podcast-generator",
    "title": "AI Podcast Generator",
    "description": "Telegram-based podcast automation workflow that uses AI agents with ElevenLabs text-to-speech, voice transcription, and intelligent content structuring to generate full podcast episodes from simple chat commands.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "ai-podcast-generator-B4FGk4XI.png",
    "features": [
      "Telegram Integration",
      "ElevenLabs TTS",
      "AI Agent Orchestration",
      "Voice Transcription"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Telegram Trigger",
        "type": "trigger",
        "module": "Telegram"
      },
      {
        "id": "2",
        "name": "AI Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "3",
        "name": "OpenAI Chat Model",
        "type": "ai",
        "module": "OpenAI"
      },
      {
        "id": "4",
        "name": "Window Buffer Memory",
        "type": "code",
        "module": "Memory"
      },
      {
        "id": "5",
        "name": "Generate Script",
        "type": "ai",
        "module": "AI Tool"
      },
      {
        "id": "6",
        "name": "ElevenLabs TTS",
        "type": "action",
        "module": "ElevenLabs"
      },
      {
        "id": "7",
        "name": "Transcribe Audio",
        "type": "ai",
        "module": "Whisper"
      },
      {
        "id": "8",
        "name": "Send to Telegram",
        "type": "action",
        "module": "Telegram"
      }
    ],
    "howItWorks": {
      "overview": "This workflow transforms simple text prompts into full podcast episodes using AI-powered script generation, voice synthesis, and automatic distribution via Telegram.",
      "steps": [
        "Telegram trigger receives podcast topic or instructions from the user.",
        "AI Agent orchestrates the entire podcast creation pipeline with context awareness.",
        "OpenAI Chat Model generates structured podcast scripts with intro, segments, and outro.",
        "Window Buffer Memory maintains conversation context for iterative refinements.",
        "AI tool generates detailed episode scripts based on research and topic analysis.",
        "ElevenLabs converts the script into natural-sounding podcast audio.",
        "Whisper transcribes the generated audio for show notes and accessibility.",
        "Final podcast audio and transcription are sent back via Telegram."
      ],
      "benefits": [
        "Automated end-to-end podcast production",
        "Natural AI voice generation",
        "Conversational episode creation"
      ]
    }
  },
  {
    "id": "ai-content-team",
    "title": "AI Content Team",
    "description": "Multi-team content system that routes form submissions to specialized AI content teams, generates and edits images, creates platform-optimized content, and delivers final assets via Gmail with structured team collaboration.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "ai-content-team-DO5EfSCT.png",
    "features": [
      "Form-based Routing",
      "AI Image Generation",
      "Multi-team Workflow",
      "Gmail Delivery"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Form Trigger",
        "type": "trigger",
        "module": "Form"
      },
      {
        "id": "2",
        "name": "Content Router",
        "type": "router",
        "module": "Switch"
      },
      {
        "id": "3",
        "name": "AI Content Generator",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "4",
        "name": "OpenAI Chat Model",
        "type": "ai",
        "module": "OpenAI"
      },
      {
        "id": "5",
        "name": "Generate Image",
        "type": "ai",
        "module": "DALL-E"
      },
      {
        "id": "6",
        "name": "Edit Image",
        "type": "action",
        "module": "Image Editor"
      },
      {
        "id": "7",
        "name": "Format Content",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "8",
        "name": "Send via Gmail",
        "type": "action",
        "module": "Gmail"
      }
    ],
    "howItWorks": {
      "overview": "This workflow simulates a full content team by routing requests to specialized AI agents for writing, image creation, and delivery.",
      "steps": [
        "Form trigger captures content requests with type, topic, and specifications.",
        "Switch router directs requests to the appropriate content team (blog, social, visual).",
        "AI Content Generator creates platform-optimized written content.",
        "OpenAI Chat Model refines and enhances the generated content.",
        "DALL-E generates custom images matching the content theme and style.",
        "Image Editor applies brand-specific edits, overlays, and formatting.",
        "Code node formats final content package with proper structure.",
        "Gmail delivers the complete content package to the requester."
      ],
      "benefits": [
        "Full content team simulation",
        "AI-powered image and text creation",
        "Automated delivery pipeline"
      ]
    }
  },
  {
    "id": "heygen-ai-clone-avatar",
    "title": "HeyGen AI Clone Avatar",
    "description": "No-code AI avatar video generation workflow using HeyGen API with intelligent polling for render completion, AI-powered script writing, and automated video delivery for scalable personalized video content.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "heygen-ai-clone-avatar-8HrW185a.png",
    "features": [
      "HeyGen API Integration",
      "AI Script Writing",
      "Render Polling",
      "Automated Video Delivery"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Form Trigger",
        "type": "trigger",
        "module": "Form"
      },
      {
        "id": "2",
        "name": "AI Script Writer",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "3",
        "name": "OpenAI Chat Model",
        "type": "ai",
        "module": "OpenAI"
      },
      {
        "id": "4",
        "name": "Create Video Request",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "5",
        "name": "Wait for Render",
        "type": "action",
        "module": "Wait"
      },
      {
        "id": "6",
        "name": "Check Render Status",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "7",
        "name": "Status Check",
        "type": "router",
        "module": "If"
      },
      {
        "id": "8",
        "name": "Download Video",
        "type": "action",
        "module": "HTTP"
      }
    ],
    "howItWorks": {
      "overview": "This workflow generates personalized AI avatar videos by writing scripts with AI and rendering them through HeyGen API with automatic status polling.",
      "steps": [
        "Form trigger captures video request details including topic and target audience.",
        "AI Script Writer generates a compelling video script tailored to the request.",
        "OpenAI Chat Model refines the script for natural speech patterns and engagement.",
        "HTTP request sends the script to HeyGen API to initiate avatar video rendering.",
        "Wait node pauses execution to allow rendering time.",
        "Another HTTP request polls HeyGen API for render completion status.",
        "If condition checks whether rendering is complete or needs more time.",
        "Upon completion, the finished video is downloaded and delivered."
      ],
      "benefits": [
        "Scalable personalized video creation",
        "No-code AI avatar videos",
        "Automated render management"
      ]
    }
  },
  {
    "id": "ai-facebook-messenger-chatbot",
    "title": "AI-Powered Facebook Messenger Chatbot",
    "description": "24/7 AI sales assistant for Facebook Messenger that handles customer inquiries using OpenRouter LLM with conversation memory, automated response generation, and intelligent routing for sales qualification.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "ai-facebook-messenger-chatbot-dsXq6ytg.png",
    "features": [
      "Facebook Messenger API",
      "OpenRouter LLM",
      "Conversation Memory",
      "Sales Qualification"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Webhook Trigger",
        "type": "trigger",
        "module": "Webhook"
      },
      {
        "id": "2",
        "name": "Extract Message",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "3",
        "name": "AI Sales Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "4",
        "name": "OpenRouter Chat Model",
        "type": "ai",
        "module": "OpenRouter"
      },
      {
        "id": "5",
        "name": "Window Buffer Memory",
        "type": "code",
        "module": "Memory"
      },
      {
        "id": "6",
        "name": "Format Response",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "7",
        "name": "Send Messenger Reply",
        "type": "action",
        "module": "HTTP"
      }
    ],
    "howItWorks": {
      "overview": "This chatbot provides 24/7 AI-powered sales support on Facebook Messenger with persistent memory and intelligent conversation handling.",
      "steps": [
        "Webhook receives incoming Facebook Messenger messages in real-time.",
        "Code node extracts and parses the message content and sender information.",
        "AI Sales Agent processes the inquiry with sales-optimized prompting.",
        "OpenRouter Chat Model generates contextual, persuasive responses.",
        "Window Buffer Memory maintains conversation history for coherent multi-turn chats.",
        "Format Response node structures the reply for Messenger API compatibility.",
        "HTTP request sends the AI-generated reply back through Messenger."
      ],
      "benefits": [
        "24/7 automated sales support",
        "Context-aware conversations",
        "Scalable customer engagement"
      ]
    }
  },
  {
    "id": "linkedin-auto-post-agent",
    "title": "LinkedIn Auto-Post Agent",
    "description": "Automated LinkedIn content creation workflow using Google Gemini for post generation, AI image creation, and scheduled posting. Creates engaging professional content with custom visuals and publishes directly to LinkedIn.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "linkedin-auto-post-agent-CMTpGldW.png",
    "features": [
      "Google Gemini AI",
      "AI Image Generation",
      "LinkedIn API",
      "Scheduled Posting"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Schedule Trigger",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "2",
        "name": "AI Content Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "3",
        "name": "Google Gemini Chat",
        "type": "ai",
        "module": "Google Gemini"
      },
      {
        "id": "4",
        "name": "Generate Post Copy",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "5",
        "name": "Generate Image",
        "type": "ai",
        "module": "Image Generation"
      },
      {
        "id": "6",
        "name": "Upload Image",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "7",
        "name": "Post to LinkedIn",
        "type": "action",
        "module": "LinkedIn"
      }
    ],
    "howItWorks": {
      "overview": "This agent automates LinkedIn thought leadership by generating engaging posts with custom AI images on a scheduled basis.",
      "steps": [
        "Schedule trigger initiates content creation at optimal posting times.",
        "AI Content Agent determines the topic and content angle based on trends.",
        "Google Gemini generates compelling LinkedIn post copy with hashtags.",
        "Code node formats the post with proper structure and character limits.",
        "AI image generation creates a custom visual matching the post theme.",
        "HTTP request uploads the generated image to LinkedIn media API.",
        "LinkedIn API publishes the complete post with image and copy."
      ],
      "benefits": [
        "Consistent LinkedIn presence",
        "AI-generated thought leadership",
        "Automated visual content creation"
      ]
    }
  },
  {
    "id": "personalized-cold-email-agent",
    "title": "Personalized Cold Email AI Agent",
    "description": "AI-driven personalized cold email outreach system that reads prospect data from Google Sheets, researches companies, generates hyper-personalized email copy with AI, and sends targeted outreach via Gmail with tracking.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "personalized-cold-email-agent-BzwlE6im.png",
    "features": [
      "Google Sheets Integration",
      "AI Personalization",
      "Company Research",
      "Gmail Outreach"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Schedule Trigger",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "2",
        "name": "Get Prospects",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "3",
        "name": "Research Company",
        "type": "action",
        "module": "HTTP"
      },
      {
        "id": "4",
        "name": "AI Email Writer",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "5",
        "name": "OpenAI Chat Model",
        "type": "ai",
        "module": "OpenAI"
      },
      {
        "id": "6",
        "name": "Personalize Email",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "7",
        "name": "Send Email",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "8",
        "name": "Update Status",
        "type": "action",
        "module": "Google Sheets"
      }
    ],
    "howItWorks": {
      "overview": "This agent automates personalized cold email campaigns by researching prospects and generating tailored outreach emails at scale.",
      "steps": [
        "Schedule trigger initiates daily outreach batches at optimal sending times.",
        "Google Sheets provides the prospect list with names, companies, and contact info.",
        "HTTP request researches each company for recent news, products, and pain points.",
        "AI Email Writer crafts hyper-personalized email copy based on research.",
        "OpenAI Chat Model ensures natural tone and compelling value propositions.",
        "Code node applies final personalization tokens and formatting.",
        "Gmail sends the personalized email with proper headers and tracking.",
        "Google Sheets is updated with sent status and timestamp for pipeline tracking."
      ],
      "benefits": [
        "Hyper-personalized outreach at scale",
        "AI-powered company research",
        "Complete campaign tracking"
      ]
    }
  },
  {
    "id": "generate-leads-google-maps",
    "title": "Generate Leads with Google Maps",
    "description": "Automated lead generation pipeline that pulls zip codes from Google Sheets, queries Google Maps API for local businesses by category, deduplicates results, and exports enriched leads back to Sheets — with exponential backoff retry logic and error handling.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "generate-leads-google-maps-DSioNvay.png",
    "features": [
      "Google Maps API",
      "Google Sheets",
      "Zip Code Targeting",
      "Deduplication",
      "Exponential Backoff",
      "Error Handling"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Execute Workflow Trigger",
        "type": "trigger",
        "module": "Execute Workflow"
      },
      {
        "id": "2",
        "name": "Schedule Trigger",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "3",
        "name": "Manual Trigger",
        "type": "trigger",
        "module": "Manual Trigger"
      },
      {
        "id": "4",
        "name": "Settings",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "5",
        "name": "GS - Get Zip Codes",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "6",
        "name": "Filter Zips",
        "type": "filter",
        "module": "Filter"
      },
      {
        "id": "7",
        "name": "Set Row Number",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "8",
        "name": "Split Out",
        "type": "code",
        "module": "Split Out"
      },
      {
        "id": "9",
        "name": "Limit",
        "type": "code",
        "module": "Limit"
      },
      {
        "id": "10",
        "name": "Loop Zips",
        "type": "router",
        "module": "Loop Over Items"
      },
      {
        "id": "11",
        "name": "GS - Get Subcategory",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "12",
        "name": "Filter Subcategories",
        "type": "filter",
        "module": "Filter"
      },
      {
        "id": "13",
        "name": "Loop Subcats",
        "type": "router",
        "module": "Loop Over Items"
      },
      {
        "id": "14",
        "name": "Set Zip",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "15",
        "name": "GMaps API",
        "type": "action",
        "module": "HTTP Request"
      },
      {
        "id": "16",
        "name": "If Empty",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "17",
        "name": "Place Array",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "18",
        "name": "Set Place ID",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "19",
        "name": "Remove Duplicates",
        "type": "code",
        "module": "Remove Duplicates"
      },
      {
        "id": "20",
        "name": "Add Rows to Google Sheets",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "21",
        "name": "Exponential Backoff",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "22",
        "name": "Wait",
        "type": "action",
        "module": "Wait"
      },
      {
        "id": "23",
        "name": "Check Max Retries",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "24",
        "name": "Stop and Error",
        "type": "action",
        "module": "Stop and Error"
      }
    ],
    "howItWorks": {
      "overview": "This pipeline automates local business lead generation by systematically querying Google Maps across zip codes and business categories, with built-in resilience for API rate limits.",
      "steps": [
        "The workflow can be triggered on a schedule, manually, or as a sub-workflow via Execute Workflow.",
        "Settings node configures API keys, target categories, and batch sizes.",
        "Google Sheets provides the list of zip codes to target, filtered for unprocessed entries.",
        "An outer loop iterates through each zip code, and an inner loop processes each business subcategory.",
        "Google Maps API is queried for businesses matching the zip + category combination.",
        "Results are parsed, place IDs extracted, and duplicates removed across batches.",
        "Enriched leads are exported back to Google Sheets with full business details.",
        "Exponential backoff with retry logic handles API rate limits gracefully, stopping on max retries."
      ],
      "benefits": [
        "Systematic local lead discovery",
        "Built-in API rate limit handling",
        "Deduplication prevents wasted outreach"
      ]
    }
  },
  {
    "id": "it-lead-generation-pipeline",
    "title": "IT Lead Generation Pipeline",
    "description": "Complete automated outbound lead generation system for IT services — scrapes LinkedIn for prospects, enriches with Apollo, deduplicates against existing CRM data, schedules follow-ups, generates daily reports, and logs all errors for monitoring.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "it-lead-generation-pipeline-B20mtWLg.png",
    "features": [
      "LinkedIn Scraping",
      "Apollo Enrichment",
      "Deduplication",
      "Follow-up Scheduling",
      "Daily Reporting",
      "Error Logging"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Schedule Trigger",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "2",
        "name": "LinkedIn Scraper",
        "type": "action",
        "module": "HTTP Request"
      },
      {
        "id": "3",
        "name": "Parse Profiles",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "4",
        "name": "Filter Categories",
        "type": "filter",
        "module": "Filter"
      },
      {
        "id": "5",
        "name": "Selected Categories",
        "type": "router",
        "module": "Switch"
      },
      {
        "id": "6",
        "name": "Apollo Enrichment",
        "type": "action",
        "module": "HTTP Request"
      },
      {
        "id": "7",
        "name": "Set Contact Data",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "8",
        "name": "Check Duplicates",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "9",
        "name": "Remove Duplicates",
        "type": "code",
        "module": "Remove Duplicates"
      },
      {
        "id": "10",
        "name": "Create Lead",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "11",
        "name": "Update Lead",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "12",
        "name": "Schedule Follow-up",
        "type": "action",
        "module": "Wait"
      },
      {
        "id": "13",
        "name": "Send Follow-up",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "14",
        "name": "Daily Report Trigger",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "15",
        "name": "Aggregate Stats",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "16",
        "name": "Send Report",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "17",
        "name": "Error Logger",
        "type": "action",
        "module": "Google Sheets"
      }
    ],
    "howItWorks": {
      "overview": "This end-to-end pipeline automates IT lead generation from LinkedIn prospecting through enrichment, deduplication, follow-up scheduling, and daily reporting.",
      "steps": [
        "Scheduled trigger kicks off LinkedIn scraping for target IT decision-makers.",
        "HTTP requests scrape LinkedIn profiles, and Code node parses the raw data.",
        "Prospects are filtered by selected industry categories via Switch routing.",
        "Apollo API enriches each prospect with verified email, company data, and firmographics.",
        "Deduplication checks against existing CRM records to avoid duplicate outreach.",
        "New leads are created in Google Sheets; existing leads are updated with fresh data.",
        "Follow-up emails are automatically scheduled and sent via Gmail at optimal intervals.",
        "A separate daily schedule aggregates pipeline stats and sends a summary report.",
        "All errors throughout the pipeline are logged to a dedicated Google Sheets error tracker."
      ],
      "benefits": [
        "Fully automated outbound pipeline",
        "Zero duplicate outreach",
        "Daily performance visibility"
      ]
    }
  },
  {
    "id": "lessenergy-project",
    "title": "LessEnergy - Energy Supplier Automation",
    "description": "Comprehensive energy sector automation suite with multiple interconnected n8n workflows — supplier assignment, quote pipeline with PDF generation, error handling with email alerts, automated image translation reporting, and real-time status notifications via Slack and email.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "lessenergy-project-CsnZrIjH.png",
    "features": [
      "Multi-Workflow Architecture",
      "PDF Generation",
      "Slack Notifications",
      "Error Handling",
      "Quote Pipeline",
      "Webhook Triggers"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Assignment Webhook",
        "type": "trigger",
        "module": "Webhook"
      },
      {
        "id": "2",
        "name": "Get Suppliers",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "3",
        "name": "Assign Supplier Logic",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "4",
        "name": "Update Best Supplier",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "5",
        "name": "Return Assignment",
        "type": "action",
        "module": "Respond to Webhook"
      },
      {
        "id": "6",
        "name": "Webhook Trigger (Quote)",
        "type": "trigger",
        "module": "Webhook"
      },
      {
        "id": "7",
        "name": "Validate Required Fields",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "8",
        "name": "Calculate Rebate",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "9",
        "name": "Prepare Quote Data",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "10",
        "name": "Generate Quote HTML",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "11",
        "name": "Generate PDF",
        "type": "action",
        "module": "HTTP Request"
      },
      {
        "id": "12",
        "name": "Merge PDF + Supplier",
        "type": "action",
        "module": "Merge"
      },
      {
        "id": "13",
        "name": "Send Quote Email",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "14",
        "name": "Update Sheet Status",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "15",
        "name": "Success Response",
        "type": "action",
        "module": "Respond to Webhook"
      },
      {
        "id": "16",
        "name": "Error Trigger",
        "type": "trigger",
        "module": "Error Trigger"
      },
      {
        "id": "17",
        "name": "Parse Error",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "18",
        "name": "Send Error Email",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "19",
        "name": "Log to Sheet",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "20",
        "name": "Status Webhook",
        "type": "trigger",
        "module": "Webhook"
      },
      {
        "id": "21",
        "name": "Check Important Status",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "22",
        "name": "Slack Notification",
        "type": "action",
        "module": "Slack"
      },
      {
        "id": "23",
        "name": "Build Slack Blocks",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "24",
        "name": "Send SMS",
        "type": "action",
        "module": "HTTP Request"
      },
      {
        "id": "25",
        "name": "Log Status Change",
        "type": "code",
        "module": "Code"
      }
    ],
    "howItWorks": {
      "overview": "This multi-workflow project automates the entire energy supplier management lifecycle — from assigning suppliers to generating quotes, handling errors, tracking status changes, and reporting.",
      "steps": [
        "Supplier Assignment workflow receives webhook requests and matches the best supplier from Google Sheets based on criteria.",
        "Quote Pipeline validates incoming data, calculates rebates, generates branded HTML quotes, and converts to PDF.",
        "Generated PDFs are merged with supplier data and emailed to clients, with sheet status updated.",
        "Error Handler catches failures across all workflows, parses errors, sends alert emails, and logs to a tracking sheet.",
        "Status Notifications monitor changes via webhook, routing important updates to Slack and SMS.",
        "Daily followup trigger checks stale quotes and sends digest emails for quotes needing attention.",
        "Automated Image Translation System runs weekly reports with metrics calculations and Slack summaries."
      ],
      "benefits": [
        "End-to-end energy supplier automation",
        "Built-in error resilience",
        "Multi-channel notifications (Email, Slack, SMS)"
      ]
    }
  },
  {
    "id": "whatsapp-personal-ai-agent",
    "title": "WhatsApp Personal AI Agent",
    "description": "An intelligent WhatsApp-based personal assistant that handles both voice and text messages — transcribes audio via WhatsApp API, routes through an AI Agent powered by OpenAI with memory, and integrates Gmail, Google Calendar, and Contacts as tools.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "whatsapp-personal-ai-agent-4ZlxXmrT.png",
    "features": [
      "WhatsApp Integration",
      "Voice Transcription",
      "AI Agent",
      "OpenAI Chat Model",
      "Gmail",
      "Google Calendar",
      "Contacts"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "WhatsApp Trigger",
        "type": "trigger",
        "module": "WhatsApp"
      },
      {
        "id": "2",
        "name": "Switch (Voice/Text)",
        "type": "router",
        "module": "Switch"
      },
      {
        "id": "3",
        "name": "Get Audio URL",
        "type": "action",
        "module": "WhatsApp"
      },
      {
        "id": "4",
        "name": "Download Audio",
        "type": "action",
        "module": "HTTP Request"
      },
      {
        "id": "5",
        "name": "Transcribe Audio",
        "type": "action",
        "module": "Transcribe Recording"
      },
      {
        "id": "6",
        "name": "Audio Prompt",
        "type": "code",
        "module": "Manual"
      },
      {
        "id": "7",
        "name": "Text Only Prompt",
        "type": "code",
        "module": "Manual"
      },
      {
        "id": "8",
        "name": "AI Agent",
        "type": "action",
        "module": "AI Agent"
      },
      {
        "id": "9",
        "name": "OpenAI Chat Model",
        "type": "action",
        "module": "OpenAI"
      },
      {
        "id": "10",
        "name": "Simple Memory",
        "type": "action",
        "module": "Memory"
      },
      {
        "id": "11",
        "name": "Gmail (send)",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "12",
        "name": "Google Calendar (create)",
        "type": "action",
        "module": "Google Calendar"
      },
      {
        "id": "13",
        "name": "Contacts (read)",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "14",
        "name": "Respond with Text",
        "type": "action",
        "module": "WhatsApp"
      }
    ],
    "howItWorks": {
      "overview": "This workflow turns WhatsApp into a full personal AI assistant — it listens for incoming messages, routes voice and text separately, processes them through an AI Agent with tools, and replies directly in WhatsApp.",
      "steps": [
        "WhatsApp Trigger receives incoming messages and passes them to a Switch node that routes by message type (Voice vs Text).",
        "Voice messages go through audio URL retrieval, download, and transcription before being formatted as a prompt.",
        "Text messages are directly formatted as a prompt for the AI Agent.",
        "The AI Agent uses OpenAI Chat Model with Simple Memory for conversation context.",
        "Agent has access to Gmail (send emails), Google Calendar (create events), and Contacts (look up people) as tools.",
        "The final response is sent back to the user via WhatsApp text message."
      ],
      "benefits": [
        "Hands-free voice + text AI assistant",
        "Persistent conversation memory",
        "Direct Gmail, Calendar & Contacts integration"
      ]
    }
  },
  {
    "id": "google-search-ads-seo-tracker",
    "title": "Google Search Ads & SEO Tracker",
    "description": "Automated n8n workflow that pulls Google Search Console performance data and Google Ads reports on a schedule, analyzes them with OpenAI for actionable insights, and logs everything to Google Sheets — giving you a hands-free SEO & paid search dashboard.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": "generate-leads-google-maps-v2-znuZxy39.png",
    "features": [
      "Google Search Console",
      "Google Ads API",
      "OpenAI Analysis",
      "Google Sheets Logging",
      "Scheduled Reports",
      "Retry Logic"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Schedule Trigger",
        "type": "trigger",
        "module": "Schedule Trigger"
      },
      {
        "id": "2",
        "name": "Settings",
        "type": "code",
        "module": "Set"
      },
      {
        "id": "3",
        "name": "GSC - Performance",
        "type": "action",
        "module": "Google Search Console"
      },
      {
        "id": "4",
        "name": "Google Ads - Report",
        "type": "action",
        "module": "Google Ads"
      },
      {
        "id": "5",
        "name": "Set City",
        "type": "code",
        "module": "Set"
      },
      {
        "id": "6",
        "name": "GMaps API",
        "type": "action",
        "module": "HTTP Request"
      },
      {
        "id": "7",
        "name": "If Empty",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "8",
        "name": "Place Array",
        "type": "code",
        "module": "Set"
      },
      {
        "id": "9",
        "name": "Set Place ID",
        "type": "code",
        "module": "Set"
      },
      {
        "id": "10",
        "name": "Remove Duplicates",
        "type": "filter",
        "module": "Remove Duplicates"
      },
      {
        "id": "11",
        "name": "Filter Zips",
        "type": "filter",
        "module": "Filter"
      },
      {
        "id": "12",
        "name": "Loop Zips",
        "type": "action",
        "module": "Loop"
      },
      {
        "id": "13",
        "name": "GS - Get Subcategory",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "14",
        "name": "Filter Subcategories",
        "type": "filter",
        "module": "Filter"
      },
      {
        "id": "15",
        "name": "Loop Subcats",
        "type": "action",
        "module": "Loop"
      },
      {
        "id": "16",
        "name": "Exponential Backoff",
        "type": "code",
        "module": "Wait"
      },
      {
        "id": "17",
        "name": "Check Max Retries",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "18",
        "name": "OpenAI - Analyze",
        "type": "ai",
        "module": "OpenAI"
      },
      {
        "id": "19",
        "name": "GS - Update Sheet",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "20",
        "name": "Stop and Error",
        "type": "action",
        "module": "Stop and Error"
      },
      {
        "id": "21",
        "name": "Limit",
        "type": "code",
        "module": "Limit"
      }
    ],
    "howItWorks": {
      "overview": "This workflow automates SEO and Google Ads performance tracking by pulling data on a schedule, enriching it with Google Maps and AI analysis, and logging results to Google Sheets.",
      "steps": [
        "A Schedule Trigger fires at a configured interval to begin the data collection cycle.",
        "Settings node defines target zip codes, subcategories, and API parameters for the run.",
        "Google Search Console and Google Ads API calls retrieve organic and paid performance metrics.",
        "Google Maps API enriches location data with place details, deduplicating results to avoid repeats.",
        "Loops iterate through zip codes and subcategories with exponential backoff retry logic for rate limits.",
        "OpenAI analyzes the combined data and produces actionable insights and recommendations.",
        "Final results are written to Google Sheets for a live, always-up-to-date tracking dashboard."
      ],
      "benefits": [
        "Fully automated SEO & Ads reporting",
        "Built-in retry logic for API rate limits",
        "AI-generated actionable insights"
      ]
    }
  },
  {
    "id": "apollo-pipedrive-it-enrichment",
    "title": "Apollo → Pipedrive Bulk Enrichment & IT-Department Outreach",
    "description": "End-to-end n8n workflow that bulk-enriches Pipedrive contacts via Apollo.io IT-department search, deduplicates decision-makers, creates CRM persons and deals, triggers scheduled outreach drafts in Gmail, runs multi-touch nurture sequences, logs engagement back to Pipedrive, and produces daily Google Sheets reports with error alerting.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": null,
    "features": [
      "Apollo IT Enrichment",
      "Pipedrive CRM Sync",
      "Gmail Draft Outreach",
      "Multi-Touch Nurture",
      "Daily Sheets Reporting",
      "Error Alerting"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Schedule Trigger",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "2",
        "name": "Pipedrive Get Persons",
        "type": "action",
        "module": "Pipedrive"
      },
      {
        "id": "3",
        "name": "Apollo Search IT Dept",
        "type": "action",
        "module": "Apollo.io"
      },
      {
        "id": "4",
        "name": "Split Out IT People",
        "type": "code",
        "module": "Split Out"
      },
      {
        "id": "5",
        "name": "Normalize IT Person",
        "type": "code",
        "module": "Set"
      },
      {
        "id": "6",
        "name": "Dedupe IT Decision",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "7",
        "name": "Pipedrive Create Person",
        "type": "action",
        "module": "Pipedrive"
      },
      {
        "id": "8",
        "name": "Pipedrive Create Deal",
        "type": "action",
        "module": "Pipedrive"
      },
      {
        "id": "9",
        "name": "Schedule First Call",
        "type": "action",
        "module": "Wait"
      },
      {
        "id": "10",
        "name": "Gmail Draft Outreach",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "11",
        "name": "Error Trigger",
        "type": "trigger",
        "module": "Error Trigger"
      },
      {
        "id": "12",
        "name": "Gmail Error Alert",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "13",
        "name": "Report Schedule",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "14",
        "name": "Aggregate IDs",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "15",
        "name": "Google Sheets Export",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "16",
        "name": "Nurture Trigger",
        "type": "trigger",
        "module": "Schedule"
      },
      {
        "id": "17",
        "name": "Build Nurture Content",
        "type": "code",
        "module": "Code"
      },
      {
        "id": "18",
        "name": "If Nurture Allowed",
        "type": "filter",
        "module": "If"
      },
      {
        "id": "19",
        "name": "Gmail Send Nurture",
        "type": "action",
        "module": "Gmail"
      },
      {
        "id": "20",
        "name": "Pipedrive Log Nurture",
        "type": "action",
        "module": "Pipedrive"
      },
      {
        "id": "21",
        "name": "Webhook Email Opened",
        "type": "trigger",
        "module": "Webhook"
      }
    ],
    "howItWorks": {
      "overview": "This comprehensive pipeline automates IT-department lead enrichment from Apollo through Pipedrive CRM management, multi-channel outreach, nurture campaigns, and daily reporting with full error monitoring.",
      "steps": [
        "A scheduled trigger initiates the daily enrichment run, pulling existing contacts from Pipedrive.",
        "Apollo.io searches for IT-department decision-makers matching target company domains.",
        "Retrieved contacts are split out, normalized, and deduplicated against existing CRM records.",
        "New IT decision-makers are created as Pipedrive persons with associated deals in the pipeline.",
        "A follow-up wait node schedules the first call, then Gmail drafts personalized outreach emails.",
        "A separate error trigger catches failures across the pipeline and sends alert emails for rapid response.",
        "Daily scheduled reports aggregate lead IDs and activity metrics into Google Sheets for stakeholders.",
        "An independent nurture sequence evaluates engagement rules, assembles content, and sends follow-up emails.",
        "All nurture activities and email opens are logged back to Pipedrive via webhooks for complete visibility."
      ],
      "benefits": [
        "Fully automated IT lead pipeline",
        "Zero duplicate CRM records",
        "Multi-touch nurture at scale",
        "Daily stakeholder reporting",
        "Real-time error alerting"
      ]
    }
  },
  {
    "id": "rag-agent-knowledge-base",
    "title": "RAG Agent — Knowledge Base Q&A with Pinecone",
    "description": "End-to-end Retrieval-Augmented Generation system in n8n: ingests Facebook Terms & Privacy PDF into Pinecone via Cohere embeddings, then serves a chat-driven AI Agent that retrieves grounded answers with OpenAI, window buffer memory, and vector search.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": null,
    "images": [
      null,
      null,
      null
    ],
    "features": [
      "RAG Pipeline",
      "Pinecone Vector Store",
      "Cohere Embeddings",
      "OpenAI Chat Model",
      "PDF Ingestion",
      "Window Buffer Memory"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Manual / Schedule Trigger",
        "type": "trigger",
        "module": "Trigger"
      },
      {
        "id": "2",
        "name": "Download Facebook PDF",
        "type": "action",
        "module": "HTTP Request"
      },
      {
        "id": "3",
        "name": "PDF Data Loader",
        "type": "code",
        "module": "Default Data Loader"
      },
      {
        "id": "4",
        "name": "Recursive Text Splitter",
        "type": "code",
        "module": "Text Splitter"
      },
      {
        "id": "5",
        "name": "Cohere Embeddings (Ingest)",
        "type": "ai",
        "module": "Cohere"
      },
      {
        "id": "6",
        "name": "Pinecone Ingest",
        "type": "action",
        "module": "Pinecone Vector Store"
      },
      {
        "id": "7",
        "name": "Chat Message Received",
        "type": "trigger",
        "module": "Chat Trigger"
      },
      {
        "id": "8",
        "name": "AI Agent",
        "type": "ai",
        "module": "AI Agent"
      },
      {
        "id": "9",
        "name": "OpenAI Chat Model",
        "type": "ai",
        "module": "OpenAI"
      },
      {
        "id": "10",
        "name": "Window Buffer Memory",
        "type": "code",
        "module": "Memory"
      },
      {
        "id": "11",
        "name": "Cohere Embeddings (Retrieval)",
        "type": "ai",
        "module": "Cohere"
      },
      {
        "id": "12",
        "name": "Pinecone Vector Search",
        "type": "action",
        "module": "Pinecone Vector Store"
      }
    ],
    "howItWorks": {
      "overview": "A complete RAG stack that ingests source documents into Pinecone and answers user questions with grounded context via an AI Agent — combining ingestion, retrieval, and conversational memory in one n8n workspace.",
      "steps": [
        "Ingestion workflow triggers manually or on schedule and downloads the Facebook Terms & Privacy PDF via HTTP Request.",
        "The PDF Data Loader parses the document and the Recursive Character Text Splitter chunks it into ~10 retrieval-ready segments.",
        "Cohere Embeddings (via the OpenAI node interface) convert each chunk into vectors.",
        "Vectors and metadata are upserted into the Pinecone vector store as the knowledge base.",
        "For Q&A, the chat trigger receives a user question and passes it to the AI Agent.",
        "The AI Agent uses OpenAI as the chat model, Window Buffer Memory for conversation context, and Pinecone as a retrieval tool.",
        "Cohere re-embeds the query, Pinecone returns the most relevant chunks, and the agent composes a grounded answer with citations."
      ],
      "benefits": [
        "Answers grounded in your own documents",
        "Reusable ingestion + retrieval architecture",
        "Persistent chat memory across turns",
        "Swap sources without changing the agent"
      ]
    }
  },
  {
    "id": "invoice-intake-validation",
    "title": "Invoice Intake & Validation",
    "description": "n8n workflow that ingests multiple PDF invoices through a form upload, splits and extracts text from each file, uses Claude Sonnet to structure invoice data against a JSON schema, validates business rules, then routes valid invoices to Google Sheets and invalid ones to an exception log with a detailed failure email.",
    "platform": "n8n",
    "platformColor": "bg-[#ea580c]",
    "image": null,
    "features": [
      "PDF Batch Intake",
      "Claude Sonnet Extraction",
      "JSON Schema Validation",
      "Business Rule Checks",
      "Conditional Routing",
      "Google Sheets Logging",
      "Exception Email Alerts"
    ],
    "workflowSteps": [
      {
        "id": "1",
        "name": "Invoice Upload Form",
        "type": "trigger",
        "module": "n8n Form Trigger"
      },
      {
        "id": "2",
        "name": "Split Uploads",
        "type": "code",
        "module": "Code Node"
      },
      {
        "id": "3",
        "name": "Extract PDF Text",
        "type": "action",
        "module": "Extract From PDF"
      },
      {
        "id": "4",
        "name": "Extract Invoice Data (LLM)",
        "type": "ai",
        "module": "Claude Sonnet 4.6"
      },
      {
        "id": "5",
        "name": "Invoice JSON Schema",
        "type": "code",
        "module": "Output Parser"
      },
      {
        "id": "6",
        "name": "Validate Business Rules",
        "type": "filter",
        "module": "Code Node"
      },
      {
        "id": "7",
        "name": "Is Invoice Valid?",
        "type": "router",
        "module": "Conditional Router"
      },
      {
        "id": "8",
        "name": "Append Valid Invoice",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "9",
        "name": "Append Exception Record",
        "type": "action",
        "module": "Google Sheets"
      },
      {
        "id": "10",
        "name": "Send Exception Email",
        "type": "action",
        "module": "Gmail"
      }
    ],
    "howItWorks": {
      "overview": "This workflow automates the entire invoice intake pipeline: from PDF upload through structured data extraction, deterministic validation, and conditional routing into accounting or exception queues.",
      "steps": [
        "A user uploads one or more PDF invoices through the n8n Form Trigger.",
        "A Code node splits the batch into individual items, preserving binary data and original filenames.",
        "Extract From PDF pulls raw text from each invoice file.",
        "Claude Sonnet 4.6 converts the raw text into structured invoice fields via a strict JSON schema, extracting only data without deciding validity.",
        "A deterministic Code node re-checks the extracted fields against four business rules (e.g., required fields, amount thresholds, vendor whitelist).",
        "A conditional router branches valid invoices to the Invoices tab and invalid invoices to the Exceptions tab.",
        "Valid invoices are appended as rows to a Google Sheets Invoices tab.",
        "Invalid invoices append an exception record and trigger a Gmail message listing exactly which checks failed and why."
      ],
      "benefits": [
        "Eliminates manual invoice data entry",
        "Deterministic validation prevents LLM hallucinations",
        "Clear audit trail of valid and invalid invoices",
        "Instant email alerts for exceptions"
      ]
    }
  }
];

export const funnels: Funnel[] = [
  {
    "id": "voyara-luggage",
    "title": "Voyara Luggage Bold",
    "niche": "Premium Travel & Lifestyle E-commerce",
    "description": "Luxury luggage product launch funnel built in GoHighLevel. Features an editorial hero with the Elite Set offer, problem-solution storytelling, detailed product compartment breakdowns, tiered pricing at $399, social proof testimonials, FAQ accordion, and a final scarcity CTA with discount incentive.",
    "image": null,
    "features": [
      "Editorial hero with 20% discount CTA and product showcase",
      "Problem-solution section addressing mismatched luggage pain points",
      "Every Compartment Considered feature grid",
      "Inside-the-Voyara-Elite-Set numbered product breakdown (6 pieces)",
      "Pricing anchor at $399 with special-set-price urgency",
      "Trusted-by-modern-travelers testimonial carousel",
      "FAQ accordion for common travel gear concerns",
      "Final journey-starts-here CTA with shipping offer"
    ],
    "sections": [
      "Hero",
      "Problem",
      "Engineered Features",
      "Fit Guide",
      "Testimonials",
      "Guarantee",
      "Checkout"
    ],
    "link": "https://sites.leadconnectorhq.com/preview/yKxPfdiMb9AXBxz2SD5m?notrack=true",
    "extraImages": [
      {
        "url": null,
        "caption": "Voyara Lifecycle Master — GoHighLevel automation workflow handling pipeline stages (Shipped, Completed, Cancelled), abandoned checkout recovery emails, and post-purchase tag management."
      }
    ]
  },
  {
    "id": "dental-care",
    "title": "Dental Care",
    "niche": "Dental & Healthcare Services",
    "description": "Patient-friendly dental practice funnel built around transparent pricing and anxiety-free booking. Prominent $59 new-patient offer, online scheduling, insurance clarity, and social proof to reduce appointment hesitation.",
    "image": null,
    "features": [
      "Transparent $59 new-patient offer above the fold",
      "Online appointment booking with calendar integration",
      "Insurance & pricing clarity to remove bill anxiety",
      "Patient reviews and trust-building testimonials",
      "FAQ accordion for common dental concerns",
      "Final CTA with location and contact details"
    ],
    "sections": [
      "Hero + Pricing",
      "Social Proof",
      "Features",
      "FAQ",
      "Booking CTA",
      "Footer"
    ],
    "link": "https://sites.leadconnectorhq.com/preview/3mwMIRnREeRbxzDnRaYB?notrack=true"
  },
  {
    "id": "safecare-dental",
    "title": "SafeCare Dental",
    "niche": "Dental & Healthcare Services",
    "description": "A patient-focused dental practice funnel featuring transparent new-patient pricing, educational content on restorative care, social proof from happy patients, and an easy online appointment booking system with insurance clarity.",
    "image": null,
    "features": [
      "Bold hero with \"Get the Healthy, Confident Smile You Deserve\" messaging and new-patient offer",
      "Dental problem-awareness section with educational content",
      "Complete dental services grid (Root Canal, Crown, Dental Implant, etc.)",
      "Restorative care showcase with before/after visuals and service breakdowns",
      "Patient testimonials and trust-building reviews",
      "Step-by-step patient journey path to a healthier smile",
      "Dedicated to exceptional dental care messaging with CTA",
      "FAQ accordion addressing common dental concerns",
      "Appointment booking form with contact details and footer CTA"
    ],
    "sections": [
      "Hero",
      "Services",
      "Restorative Care",
      "Testimonials",
      "Patient Journey",
      "FAQ",
      "Booking",
      "Footer"
    ],
    "link": "https://sites.leadconnectorhq.com/preview/bkvpDIofGu87X5q7iQ5z?notrack=true",
    "extraImages": [
      {
        "url": null,
        "caption": "SmileCraft Lead Nurture — GoHighLevel workflow automating consultation lead follow-up: tag apply, email + SMS booking reminders, wait steps, and conditional branches checking for the \"smilecraft-booked\" tag over multiple days."
      }
    ]
  }
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
