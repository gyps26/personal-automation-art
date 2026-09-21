import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  ImageOff,
  Layers3,
  Lightbulb,
  ListChecks,
  Search,
  Sparkles,
  Target,
  Workflow as WorkflowIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { caseStudies, funnels, workflows, type CaseStudy, type Platform, type Workflow } from "@/data/portfolio";

const imageModules = import.meta.glob("/src/assets/portfolio/*.png", { eager: true, import: "default" }) as Record<string, string>;
const imageByName = Object.fromEntries(Object.entries(imageModules).map(([path, value]) => [path.split("/").pop(), value]));
const platformClass: Record<string, string> = { Zapier: "platform-zapier", "Make.com": "platform-make", n8n: "platform-n8n", GoHighLevel: "platform-ghl" };
const typeLabel = { trigger: "Trigger", action: "Action", filter: "Filter", ai: "AI", router: "Router", code: "Code" } as const;

function resolveImage(name: string | null) { return name ? imageByName[name] : undefined; }

export function Nav() {
  return <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
      <a href="#top" className="flex items-center gap-3" aria-label="Mario AutomationHub home">
        <img src={resolveImage("brand-logo-CRS5sKjl.png")} alt="Mario logo" className="size-9 rounded-md object-contain" />
        <span className="leading-tight"><strong className="block text-sm font-extrabold">GYPSON<span className="text-primary">.</span></strong><span className="block text-[11px] text-muted-foreground">AutomationHub</span></span>
        <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary sm:inline">Me</span>
      </a>
      <Button asChild className="header-cta"><a href="#booking">Get in Touch <CalendarDays className="size-4"/></a></Button>
    </div>
  </header>;
}

export function PortfolioHeader() {
  return <section id="top" className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pt-20">
    <div className="max-w-3xl"><div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary"><Sparkles className="size-4"/> Automation systems built for real businesses</div>
      <h1 className="text-4xl font-bold sm:text-5xl">Automation Portfolio</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Explore real-world automation projects built with Zapier, Make.com, n8n, and GoHighLevel. Each project showcases unique integrations and workflow optimizations.</p>
    </div>
  </section>;
}

function MissingImage({ label }: { label: string }) { return <div className="grid aspect-[16/10] place-items-center bg-secondary/45 text-center text-muted-foreground"><div><ImageOff className="mx-auto mb-2 size-7"/><span className="text-xs">Original screenshot unavailable</span><span className="sr-only"> for {label}</span></div></div>; }

export function FunnelPortfolio() {
  const [image, setImage] = useState<{src:string; alt:string}|null>(null);
  const [detail, setDetail] = useState<(typeof funnels)[number]|null>(null);
  return <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
    <div className="mb-8"><span className="platform-pill platform-ghl">GoHighLevel</span><h2 className="mt-4 text-2xl font-semibold sm:text-3xl">GoHighLevel Funnel Portfolio</h2><p className="mt-3 max-w-4xl leading-7 text-muted-foreground">Conversion-focused funnels built in GoHighLevel with Pipeline Stages, Automation, Calendar Integration, Payment Integration, and Email &amp; SMS Marketing — from local service businesses to premium e-commerce launches.</p></div>
    <div className="grid gap-6 lg:grid-cols-3">{funnels.map(f=>{const src=resolveImage(f.image);return <article key={f.id} className="portfolio-card overflow-hidden">
      {src ? <button className="group relative block w-full" onClick={()=>setImage({src,alt:`${f.title} funnel screenshot`})}><img src={src} alt={`${f.title} funnel screenshot`} className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"/><span className="absolute inset-x-0 bottom-0 bg-background/85 py-2 text-xs opacity-0 transition-opacity group-hover:opacity-100">View full screenshot</span></button> : <MissingImage label={f.title}/>} 
      <div className="p-5"><div className="mb-2 flex items-start justify-between gap-3"><div><h3 className="text-lg font-semibold">{f.title}</h3><p className="mt-1 text-xs font-medium text-primary">{f.niche}</p></div><WorkflowIcon className="size-5 shrink-0 text-primary"/></div><p className="mt-3 text-sm leading-6 text-muted-foreground">{f.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">{f.features.slice(0,4).map(v=><span className="feature-chip" key={v}>{v}</span>)}{f.features.length>4&&<span className="feature-chip">+{f.features.length-4}</span>}</div>
      <div className="mt-5 border-t border-border pt-4"><p className="mb-2 text-[11px] font-semibold uppercase text-muted-foreground">Funnel sections</p><div className="flex flex-wrap gap-1.5">{f.sections.slice(0,5).map(v=><span className="section-chip" key={v}>{v}</span>)}{f.sections.length>5&&<span className="section-chip">+{f.sections.length-5}</span>}</div></div>
      <Button variant="ghost" className="mt-5 w-full justify-between border border-border" onClick={()=>setDetail(f)}>More details <ArrowRight/></Button>
      </div></article>})}</div>
    <Dialog open={!!image} onOpenChange={open=>{if(!open)setImage(null)}}><DialogContent className="max-h-[90vh] max-w-6xl overflow-auto p-2 sm:p-3">{image&&<img src={image.src} alt={image.alt} className="w-full rounded-md"/>}</DialogContent></Dialog>
    <Dialog open={!!detail} onOpenChange={open=>{if(!open)setDetail(null)}}><DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto"><DialogHeader><DialogTitle>{detail?.title}</DialogTitle></DialogHeader>{detail&&<div className="space-y-7">
      <span className="platform-pill platform-ghl">GoHighLevel · {detail.niche}</span>
      <section><h4 className="mb-2 flex items-center gap-2 font-semibold"><Target className="size-4 text-primary"/>Overview</h4><p className="text-sm leading-7 text-muted-foreground">{detail.description}</p></section>
      <section><h4 className="mb-3 flex items-center gap-2 font-semibold"><ListChecks className="size-4 text-primary"/>Funnel Sections</h4><div className="flex flex-wrap gap-2">{detail.sections.map(section=><span className="section-chip" key={section}>{section}</span>)}</div></section>
      <section><h4 className="mb-3 flex items-center gap-2 font-semibold"><Sparkles className="size-4 text-primary"/>Key Features</h4><ul className="grid gap-2 sm:grid-cols-2">{detail.features.map(feature=><li className="flex gap-2 text-sm leading-6 text-muted-foreground" key={feature}><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary"/>{feature}</li>)}</ul></section>
      <Button asChild className="w-full"><a href={detail.link} target="_blank" rel="noreferrer">View live funnel <ExternalLink className="size-4"/></a></Button>
    </div>}</DialogContent></Dialog>
  </section>;
}

function WorkflowCard({ workflow, onDetail, onImage }: {workflow:Workflow;onDetail:()=>void;onImage:(src:string)=>void}) {
  const src=resolveImage(workflow.image);
  return <article className="portfolio-card flex min-w-0 flex-col overflow-hidden">
    {src ? <button className="group relative block overflow-hidden border-b border-border" onClick={()=>onImage(src)}><img src={src} alt={`${workflow.title} workflow screenshot`} loading="lazy" className="aspect-[16/9] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.025]"/><span className="absolute inset-x-0 bottom-0 bg-background/90 py-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">View full screenshot</span></button> : <MissingImage label={workflow.title}/>} 
    <div className="flex flex-1 flex-col p-5"><div className="flex items-start justify-between gap-3"><span className={`platform-pill ${platformClass[workflow.platform]}`}>{workflow.platform}</span><Bot className="size-5 text-muted-foreground"/></div><h3 className="mt-4 text-lg font-semibold leading-6">{workflow.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{workflow.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">{workflow.features.slice(0,3).map(v=><span className="feature-chip" key={v}>{v}</span>)}{workflow.features.length>3&&<span className="feature-chip">+{workflow.features.length-3}</span>}</div>
      <div className="mt-5 border-t border-border pt-4"><p className="mb-3 text-[11px] font-semibold uppercase text-muted-foreground">Workflow steps</p><div className="flex items-center gap-1 overflow-hidden">{workflow.workflowSteps.slice(0,4).map((s,i)=><div className="contents" key={s.id}><span className={`step-dot step-${s.type}`} title={`${typeLabel[s.type]}: ${s.name}`}>{i+1}</span>{i<Math.min(3,workflow.workflowSteps.length-1)&&<span className="h-px min-w-2 flex-1 bg-border"/>}</div>)}{workflow.workflowSteps.length>4&&<span className="ml-1 text-xs text-muted-foreground">+{workflow.workflowSteps.length-4}</span>}</div></div>
      <Button variant="ghost" className="mt-4 w-full justify-between border border-border" onClick={onDetail}>View how it works <ArrowRight/></Button>
    </div>
  </article>;
}

export function WorkflowPortfolio() {
  const [platform,setPlatform]=useState<"All"|"Zapier"|"Make.com"|"n8n">("All"); const [query,setQuery]=useState(""); const [detail,setDetail]=useState<Workflow|null>(null); const [image,setImage]=useState<string|null>(null);
  const filtered=useMemo(()=>workflows.filter(w=>(platform==="All"||w.platform===platform)&&`${w.title} ${w.description} ${w.features.join(" ")}`.toLowerCase().includes(query.toLowerCase())),[platform,query]);
  const groups=(platform==="All"?["Zapier","Make.com","n8n"]:[platform]) as Array<"Zapier"|"Make.com"|"n8n">;
  return <section id="portfolio" className="border-y border-border bg-card/30 py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6">
    <div><h2 className="text-2xl font-semibold sm:text-3xl">Sample Workflow Screenshots</h2><p className="mt-3 text-muted-foreground">Real automation workflows I've built for clients, showcasing complex integrations and multi-step processes.</p></div>
    <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2">{(["All","Zapier","Make.com","n8n"] as const).map(p=><Button key={p} size="sm" variant={platform===p?"default":"outline"} onClick={()=>setPlatform(p)}>{p}{p!=="All"&&<span className="opacity-70">({workflows.filter(w=>w.platform===p).length})</span>}</Button>)}</div><label className="relative block w-full lg:w-80"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search workflows..." className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm outline-none focus:ring-1 focus:ring-ring"/></label></div>
    <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">{Object.entries(typeLabel).map(([key,label])=><span key={key} className="flex items-center gap-1.5"><span className={`size-2.5 rounded-full step-${key}`}/>{label}</span>)}</div>
    {filtered.length===0&&<div className="mt-12 rounded-md border border-dashed border-border py-14 text-center text-muted-foreground">No workflows match your search.</div>}
    {groups.map(group=>{const list=filtered.filter(w=>w.platform===group);if(!list.length)return null;return <div className="mt-12" key={group}><div className="mb-5 flex items-center gap-3"><span className={`platform-pill ${platformClass[group]}`}>{group}</span><span className="text-sm text-muted-foreground">{list.length} project{list.length===1?"":"s"}</span><span className="h-px flex-1 bg-border"/></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{list.map(w=><WorkflowCard key={w.id} workflow={w} onDetail={()=>setDetail(w)} onImage={setImage}/>)}</div></div>})}
    <Dialog open={!!image} onOpenChange={open=>{if(!open)setImage(null)}}><DialogContent className="max-h-[92vh] max-w-6xl overflow-auto p-2 sm:p-3">{image&&<img src={image} alt="Full workflow screenshot" className="w-full rounded-md"/>}</DialogContent></Dialog>
    <Dialog open={!!detail} onOpenChange={open=>{if(!open)setDetail(null)}}><DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto"><DialogHeader><DialogTitle>{detail?.title}</DialogTitle></DialogHeader>{detail&&<div className="space-y-7">
      <span className={`platform-pill ${platformClass[detail.platform]}`}>{detail.platform}</span>
      <section><h4 className="mb-2 font-semibold">Project description</h4><p className="text-sm leading-7 text-muted-foreground">{detail.description}</p></section>
      <div className="grid gap-4 sm:grid-cols-2"><section className="rounded-md border border-border bg-secondary/35 p-4"><h4 className="mb-2 flex items-center gap-2 font-semibold"><Target className="size-4 text-primary"/>Problem</h4><p className="text-sm leading-6 text-muted-foreground">The business needed to eliminate the manual, disconnected work involved in {detail.title.toLowerCase()} while improving speed, consistency, and visibility.</p></section><section className="rounded-md border border-border bg-secondary/35 p-4"><h4 className="mb-2 flex items-center gap-2 font-semibold"><Lightbulb className="size-4 text-primary"/>Solution</h4><p className="text-sm leading-6 text-muted-foreground">{detail.howItWorks.overview}</p></section></div>
      <section><h4 className="mb-3 flex items-center gap-2 font-semibold"><WorkflowIcon className="size-4 text-primary"/>Workflow steps</h4><ol className="space-y-3">{detail.workflowSteps.map((step,i)=><li className="flex items-center gap-3 rounded-md border border-border p-3" key={step.id}><span className={`step-dot step-${step.type}`}>{i+1}</span><span className="min-w-0"><strong className="block text-sm">{step.name}</strong><span className="block text-xs text-muted-foreground">{typeLabel[step.type]} · {step.module}</span></span></li>)}</ol></section>
      <section><h4 className="mb-3 font-semibold">How it works</h4><ol className="space-y-3">{detail.howItWorks.steps.map((s,i)=><li className="flex gap-3 text-sm leading-6" key={s}><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-semibold text-primary">{i+1}</span><span>{s}</span></li>)}</ol></section>
      <section><h4 className="mb-3 font-semibold">Benefits</h4><ul className="grid gap-2 sm:grid-cols-2">{detail.howItWorks.benefits.map(b=><li className="flex gap-2 text-sm text-muted-foreground" key={b}><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary"/>{b}</li>)}</ul></section>
    </div>}</DialogContent></Dialog>
  </div></section>;
}

function CaseStudyCard({study}:{study:CaseStudy}) { return <article className="portfolio-card p-5"><div className="flex items-start justify-between gap-3"><span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{study.category}</span><Layers3 className="size-5 text-muted-foreground"/></div><h3 className="mt-4 text-lg font-semibold">{study.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{study.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{study.platforms.map(p=><span className={`platform-pill ${platformClass[p]}`} key={p}>{p}</span>)}</div><dl className="mt-5 grid grid-cols-3 gap-2 border-y border-border py-4"><div><dt className="text-[10px] text-muted-foreground">TIME SAVED</dt><dd className="mt-1 flex items-center gap-1 text-sm font-semibold"><Clock3 className="size-3.5 text-primary"/>{study.timeSaved}</dd></div><div><dt className="text-[10px] text-muted-foreground">TASKS</dt><dd className="mt-1 text-sm font-semibold">{study.tasks}</dd></div><div><dt className="text-[10px] text-muted-foreground">INTEGRATIONS</dt><dd className="mt-1 text-sm font-semibold">{study.integrations}</dd></div></dl><div className="mt-4 flex flex-wrap gap-1.5">{study.tags.map(t=><span className="section-chip" key={t}>{t}</span>)}</div></article>; }

export function Results() { const filters=["All","Financial Automation","CRM & Sales","AI & Data","Marketing","Integration","Zapier","Make.com","n8n","GoHighLevel"] as const; const [filter,setFilter]=useState<string>("All"); const list=caseStudies.filter(s=>filter==="All"||s.category===filter||s.platforms.includes(filter as Platform)); return <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6"><h2 className="text-2xl font-semibold sm:text-3xl">Case Studies &amp; Results</h2><p className="mt-3 text-muted-foreground">Measurable outcomes from automation systems delivered across finance, sales, AI, marketing, and cross-platform integrations.</p><div className="mt-7 flex flex-wrap gap-2">{filters.map(f=><Button key={f} size="sm" variant={filter===f?"default":"outline"} onClick={()=>setFilter(f)}>{f}</Button>)}</div><div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{list.map(s=><CaseStudyCard key={s.title} study={s}/>)}</div></section>; }

type CalFunction = ((...args: unknown[]) => void) & { q?: unknown[][]; loaded?: boolean; ns?: Record<string, CalFunction> };
export function Booking() {
  useEffect(()=>{
    const calWindow=window as Window & { Cal?: CalFunction };
    if(!calWindow.Cal){
      const cal=((...args:unknown[])=>{
        const [command,namespace]=args;
        if(command==="init"&&typeof namespace==="string"){
          cal.ns=cal.ns??{};
          const api=((...namespaceArgs:unknown[])=>api.q?.push(namespaceArgs)) as CalFunction;
          api.q=[];
          cal.ns[namespace]=cal.ns[namespace]??api;
          cal.ns[namespace].q?.push(args);
        }
        cal.q?.push(args);
      }) as CalFunction;
      cal.q=[];cal.ns={};calWindow.Cal=cal;
    }
    const cal=calWindow.Cal;if(!cal)return;
    if(!cal.loaded){const script=document.createElement("script");script.src="https://app.cal.com/embed/embed.js";script.async=true;document.head.appendChild(script);cal.loaded=true;}
    cal("init","15min",{origin:"https://app.cal.com"});
    const namespace=cal.ns?.["15min"];
    namespace?.("inline",{elementOrSelector:"#my-cal-inline-15min",config:{layout:"month_view",useSlotsViewOnSmallScreen:"true"},calLink:"gypson-feguro-ita9yx/15min"});
    namespace?.("ui",{hideEventTypeDetails:false,layout:"month_view"});
  },[]);
  return <section id="booking" className="scroll-mt-20 border-t border-border bg-card/35 py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="mx-auto mb-8 max-w-2xl text-center"><span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary"><CalendarDays className="size-4"/>Book a 15-minute call</span><h2 className="text-2xl font-semibold sm:text-3xl">Let's talk about your workflow</h2><p className="mt-3 text-muted-foreground">Choose a time that works for you and tell me what you want to automate.</p></div><div id="my-cal-inline-15min" className="mx-auto min-h-[720px] w-full max-w-5xl overflow-auto rounded-md border border-border bg-background" /></div></section>;
}

const skills = ["Zapier","Make.com","n8n","GoHighLevel","Webhooks","APIs/JSON","Xero-Asana","Google Drive/Gmail","Filters & Delays","Looping","Prompt Engineering","Claude Code"];
const experience = [
  ["GoHighLevel Funnel Expert","December 2023 – Present","Freelance","Design and build high-converting GoHighLevel sales funnels with pipeline stages, automation workflows, calendar integration, payment gateways, and email/SMS nurture sequences."],
  ["Automation Specialist","September 2023 – Present","Freelance","Developed Xero-Asana integrations, multi-step Zapier/Make workflows for lead capture, and optimized GoHighLevel funnels."],
  ["Banking Specialist","November 2023 – December 2025","Genpact (Huntington Bank)","Managed high-volume inbound calls, resolving debit card activations, fraud disputes, password resets, and overdraft inquiries while ensuring compliance and customer satisfaction."],
  ["Travel Advisor","August 2022 – December 2022","Teleperformance (CxLoyalty - JP Morgan Chase Bank)","Processed bookings and modifications, building skills in multi-step process handling."],
  ["Customer Service Associate","March 2020 – July 2022","Accenture (Verizon for Business)","Managed high-volume phone, email, and chat interactions covering product inquiries, billing disputes, payments, refunds, and service escalations."],
];
const certifications = ["Technical Virtual Assistant Certifications","AI Automation with n8n","Prompt Engineering","No Code Automation with Make.com","No Code Automation with Zapier","Funnel Building with GoHighLevel","VA Training PH Certification (16 hours)","Philippines Call Centre Institute, NCII (144 hours)"];

export function About() { return <section id="about" className="border-t border-border py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><span className="text-sm font-semibold text-primary">About me</span><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Gypson Feguro</h2><p className="mt-2 font-medium text-foreground">Automation Specialist &amp; GoHighLevel Funnel Expert</p><p className="mt-5 leading-7 text-muted-foreground">2+ years in no-code/low-code platforms specializing in workflow automation, API integrations, and process optimization. Building efficient business automations that reduce manual tasks by 20-25%. Expert in designing high-converting GoHighLevel funnels that streamline lead capture, nurture sequences, and appointment booking to maximize client conversions.</p><div className="mt-7 space-y-2 text-sm"><a className="block text-primary hover:underline" href="tel:+639669718411">+639669718411</a><a className="block text-primary hover:underline" href="mailto:gypsonfeguro1@gmail.com">gypsonfeguro1@gmail.com</a><p className="text-muted-foreground">Tandag City, Surigao del Sur, Philippines</p></div></div><div><div className="mb-3 flex items-center justify-between"><h3 className="text-xl font-semibold">Technical Skills</h3><span className="platform-pill platform-n8n">LIVE</span></div><div className="flex flex-wrap gap-2">{skills.map(skill=><span className="feature-chip px-3 py-2 text-xs" key={skill}>{skill}</span>)}</div></div></div>
  <div className="mt-14 grid gap-10 lg:grid-cols-2"><div><h3 className="mb-5 text-xl font-semibold">Work Experience</h3><div className="space-y-6 border-l border-border pl-5">{experience.map(([role,date,company,copy])=><article key={role}><div className="flex flex-wrap items-start justify-between gap-2"><h4 className="font-semibold">{role}</h4><span className="text-xs text-primary">{date}</span></div><p className="mt-1 text-sm font-medium text-muted-foreground">{company}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div><div className="space-y-10"><div><h3 className="mb-4 text-xl font-semibold">Education</h3><div className="portfolio-card p-5"><h4 className="font-semibold">Bachelor of Science in Industrial Technology</h4><p className="mt-2 text-sm text-muted-foreground">Bacolod City College · 2012 – 2018</p></div></div><div><div className="mb-4 flex items-center justify-between"><h3 className="text-xl font-semibold">Certifications</h3><span className="platform-pill platform-zapier">VERIFIED</span></div><ul className="grid gap-2">{certifications.map(item=><li className="flex gap-2 text-sm text-muted-foreground" key={item}><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary"/>{item}</li>)}</ul></div></div></div></div></section>; }

const faqs = [
  ["What automation platforms do you specialize in?","I specialize in Zapier, Make.com, n8n, and GoHighLevel, including multi-step workflows, conditional routing, API integrations, AI tools, funnels, and nurture automations."],
  ["What does your GoHighLevel funnel service include?","My service includes funnel design and build, pipeline stages, automation workflows, calendar and payment integration, plus email and SMS marketing sequences."],
  ["What is your engagement process?","I follow five clear stages: discovery call, strategy and planning, automation build, testing and optimization, then launch and support."],
  ["How long does it typically take to complete an automation project?","Simple automations typically take 1–3 days, medium projects take 1–2 weeks, and complex systems may take 3–4 weeks or longer depending on requirements."],
  ["What information do you need to start an automation project?","I need a description of the current manual process, the tools you use, the trigger and desired outcome, relevant edge cases, and secure access to required accounts or APIs."],
  ["Do you provide ongoing support after the automation is built?","Yes. Projects include post-delivery support for bug fixes, and monthly support packages are available for monitoring, maintenance, and ongoing optimization."],
  ["Can you integrate custom APIs or less common applications?","Absolutely. I can connect applications through REST APIs, webhooks, and custom code steps when a native integration is not available."],
  ["What is your pricing structure?","Pricing is flexible and can be arranged per project, at an hourly rate, or as a monthly retainer depending on the scope and level of ongoing support."],
  ["How do you ensure the security of my data and credentials?","I use secure credential-sharing practices, OAuth connections wherever possible, and the principle of least privilege so each system receives only the access it needs."],
  ["Can you help optimize existing automations that are slow or failing?","Yes. I can audit existing workflows, identify bottlenecks, fix error-prone steps, reduce execution time, and improve reliability. Many clients see 40–60% improvement in efficiency after optimization."],
];
export function FAQ() { return <section id="faq" className="border-y border-border bg-card/35 py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="mb-8 text-center"><span className="text-sm font-semibold text-primary">Common questions</span><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Frequently Asked Questions</h2></div><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([question,answer],i)=><AccordionItem value={`faq-${i}`} key={question}><AccordionTrigger className="py-5 text-left text-base hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-5 pr-8 text-sm leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>; }
export function Footer() { return <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6"><span>© {new Date().getFullYear()} Gypson Feguro. All rights reserved.</span><a href="https://automation-watch.onrender.com/portfolio" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-foreground">AutomationHub <ExternalLink className="size-3.5"/></a></div></footer>; }
