import { createFileRoute } from "@tanstack/react-router";
import { About, Booking, FAQ, Footer, FunnelPortfolio, Nav, PortfolioHeader, Results, WorkflowPortfolio } from "@/components/portfolio/Sections";

const title = "Automation Portfolio — Mario Mallari";
const description = "Explore Mario Mallari's AI and workflow automation projects built with Zapier, Make.com, n8n, and GoHighLevel.";
export const Route = createFileRoute("/")({ head:()=>({meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component:Index });
function Index(){return <main><Nav/><PortfolioHeader/><FunnelPortfolio/><WorkflowPortfolio/><Results/><Booking/><About/><FAQ/><Footer/></main>}
