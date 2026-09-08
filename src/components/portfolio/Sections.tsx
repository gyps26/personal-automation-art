import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  ImageOff,
  Layers3,
  Menu,
  Search,
  Sparkles,
  Workflow as WorkflowIcon,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { caseStudies, funnels, workflows, type CaseStudy, type Platform, type Workflow } from "@/data/portfolio";

const imageModules = import.meta.glob("/src/assets/portfolio/*.png", { eager: true, import: "default" }) as Record<string, string>;
const imageByName = Object.fromEntries(Object.entries(imageModules).map(([path, value]) => [path.split("/").pop(), value]));
const platformClass: Record<string, string> = { Zapier: "platform-zapier", "Make.com": "platform-make", n8n: "platform-n8n", GoHighLevel: "platform-ghl" };
const typeLabel = { trigger: "Trigger", action: "Action", filter: "Filter", ai: "AI", router: "Router", code: "Code" } as const;

function resolveImage(name: string | null) { return name ? imageByName[name] : undefined; }

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Portfolio", "Dashboard", "Task Queue", "Get in Touch"];
  const hrefs = ["#about", "#portfolio", "https://automation-watch.onrender.com/dashboard", "https://automation-watch.onrender.com/tasks", "#contact"];
  return <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
      <a href="#top" className="flex items-center gap-3" aria-label="Mario AutomationHub home">
        <img src={resolveImage("brand-logo-CRS5sKjl.png")} alt="Mario logo" className="size-9 rounded-md object-contain" />
        <span className="leading-tight"><strong className="block text-sm font-extrabold">MARIO<span className="text-primary">.</span></strong><span className="block text-[11px] text-muted-foreground">AutomationHub</span></span>
        <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary sm:inline">Me</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">{links.map((label,i)=><a key={label} href={hrefs[i]} className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary hover:text-foreground ${label === "Portfolio" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{label}</a>)}</nav>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-4 py-3 md:hidden">{links.map((label,i)=><a key={label} href={hrefs[i]} onClick={()=>setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">{label}</a>)}</nav>}
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
  return <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
    <div className="mb-8"><span className="platform-pill platform-ghl">GoHighLevel</span><h2 className="mt-4 text-2xl font-semibold sm:text-3xl">GoHighLevel Funnel Portfolio</h2><p className="mt-3 max-w-4xl leading-7 text-muted-foreground">Conversion-focused funnels built in GoHighLevel with Pipeline Stages, Automation, Calendar Integration, Payment Integration, and Email &amp; SMS Marketing — from local service businesses to premium e-commerce launches.</p></div>
    <div className="grid gap-6 lg:grid-cols-3">{funnels.map(f=>{const src=resolveImage(f.image);return <article key={f.id} className="portfolio-card overflow-hidden">
      {src ? <button className="group relative block w-full" onClick={()=>setImage({src,alt:`${f.title} funnel screenshot`})}><img src={src} alt={`${f.title} funnel screenshot`} className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"/><span className="absolute inset-x-0 bottom-0 bg-background/85 py-2 text-xs opacity-0 transition-opacity group-hover:opacity-100">View full screenshot</span></button> : <MissingImage label={f.title}/>} 
      <div className="p-5"><div className="mb-2 flex items-start justify-between gap-3"><div><h3 className="text-lg font-semibold">{f.title}</h3><p className="mt-1 text-xs font-medium text-primary">{f.niche}</p></div><WorkflowIcon className="size-5 shrink-0 text-primary"/></div><p className="mt-3 text-sm leading-6 text-muted-foreground">{f.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">{f.features.slice(0,4).map(v=><span className="feature-chip" key={v}>{v}</span>)}{f.features.length>4&&<span className="feature-chip">+{f.features.length-4}</span>}</div>
      <div className="mt-5 border-t border-border pt-4"><p className="mb-2 text-[11px] font-semibold uppercase text-muted-foreground">Funnel sections</p><div className="flex flex-wrap gap-1.5">{f.sections.slice(0,5).map(v=><span className="section-chip" key={v}>{v}</span>)}{f.sections.length>5&&<span className="section-chip">+{f.sections.length-5}</span>}</div></div>
      </div></article>})}</div>
    <Dialog open={!!image} onOpenChange={open=>{if(!open)setImage(null)}}><DialogContent className="max-h-[90vh] max-w-6xl overflow-auto p-2 sm:p-3">{image&&<img src={image.src} alt={image.alt} className="w-full rounded-md"/>}</DialogContent></Dialog>
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
    <Dialog open={!!detail} onOpenChange={open=>{if(!open)setDetail(null)}}><DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto"><DialogHeader><DialogTitle>{detail?.title}</DialogTitle></DialogHeader>{detail&&<div className="space-y-6"><span className={`platform-pill ${platformClass[detail.platform]}`}>{detail.platform}</span><p className="text-sm leading-6 text-muted-foreground">{detail.howItWorks.overview}</p><div><h4 className="mb-3 font-semibold">How it works</h4><ol className="space-y-3">{detail.howItWorks.steps.map((s,i)=><li className="flex gap-3 text-sm leading-6" key={s}><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-semibold text-primary">{i+1}</span><span>{s}</span></li>)}</ol></div><div><h4 className="mb-3 font-semibold">Benefits</h4><ul className="grid gap-2 sm:grid-cols-2">{detail.howItWorks.benefits.map(b=><li className="flex gap-2 text-sm text-muted-foreground" key={b}><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary"/>{b}</li>)}</ul></div></div>}</DialogContent></Dialog>
  </div></section>;
}

function CaseStudyCard({study}:{study:CaseStudy}) { return <article className="portfolio-card p-5"><div className="flex items-start justify-between gap-3"><span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{study.category}</span><Layers3 className="size-5 text-muted-foreground"/></div><h3 className="mt-4 text-lg font-semibold">{study.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{study.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{study.platforms.map(p=><span className={`platform-pill ${platformClass[p]}`} key={p}>{p}</span>)}</div><dl className="mt-5 grid grid-cols-3 gap-2 border-y border-border py-4"><div><dt className="text-[10px] text-muted-foreground">TIME SAVED</dt><dd className="mt-1 flex items-center gap-1 text-sm font-semibold"><Clock3 className="size-3.5 text-primary"/>{study.timeSaved}</dd></div><div><dt className="text-[10px] text-muted-foreground">TASKS</dt><dd className="mt-1 text-sm font-semibold">{study.tasks}</dd></div><div><dt className="text-[10px] text-muted-foreground">INTEGRATIONS</dt><dd className="mt-1 text-sm font-semibold">{study.integrations}</dd></div></dl><div className="mt-4 flex flex-wrap gap-1.5">{study.tags.map(t=><span className="section-chip" key={t}>{t}</span>)}</div></article>; }

export function Results() { const filters=["All","Financial Automation","CRM & Sales","AI & Data","Marketing","Integration","Zapier","Make.com","n8n","GoHighLevel"] as const; const [filter,setFilter]=useState<string>("All"); const list=caseStudies.filter(s=>filter==="All"||s.category===filter||s.platforms.includes(filter as Platform)); return <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6"><h2 className="text-2xl font-semibold sm:text-3xl">Case Studies &amp; Results</h2><p className="mt-3 text-muted-foreground">Measurable outcomes from automation systems delivered across finance, sales, AI, marketing, and cross-platform integrations.</p><div className="mt-7 flex flex-wrap gap-2">{filters.map(f=><Button key={f} size="sm" variant={filter===f?"default":"outline"} onClick={()=>setFilter(f)}>{f}</Button>)}</div><div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{list.map(s=><CaseStudyCard key={s.title} study={s}/>)}</div></section>; }

export function Contact() { return <section id="contact" className="border-t border-border bg-card/40"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between"><div><h2 className="text-2xl font-semibold">Ready to automate your workflow?</h2><p className="mt-2 text-muted-foreground">Let's discuss the processes slowing your team down.</p></div><Button asChild size="lg"><a href="mailto:hello@automationhub.me">Get in Touch <ChevronRight/></a></Button></div></section>; }
export function Footer() { return <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6"><span>© {new Date().getFullYear()} Mario Mallari. All rights reserved.</span><a href="https://automation-watch.onrender.com/portfolio" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-foreground">AutomationHub <ExternalLink className="size-3.5"/></a></div></footer>; }
