import { createFileRoute } from "@tanstack/react-router";
import {
  Contact,
  Footer,
  Funnels,
  Hero,
  Nav,
  Results,
  TechStack,
  Workflows,
} from "@/components/portfolio/Sections";

const title = "Mario — AI & Workflow Automation Specialist";
const description =
  "Portfolio of AI agents, GoHighLevel funnels, and multi-step automations built with n8n, Zapier, Make.com and GoHighLevel.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <TechStack />
      <Funnels />
      <Workflows />
      <Results />
      <Contact />
      <Footer />
    </main>
  );
}
