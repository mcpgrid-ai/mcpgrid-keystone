// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { Session } from "../schema/lists/lists.types";

type PageCreateInput = Lists.Page.TypeInfo<Session>["inputs"]["create"];

export const PAGES: PageCreateInput[] = [
  {
    title: "Home",
    slug: "home",
    subtitle: "Build and Scale AI on Powerful MCP Infrastructure",
    description:
      "Mcpbox provides enterprise-level reliability, scalability, and security for MCP, ensuring comprehensive support for your AI infrastructure.",
    seoTitle: "Mcpbox | Build & Scale AI with Secure MCP Infrastructure",
    seoDescription:
      "Mcpbox delivers enterprise-grade MCP infrastructure with scalability, reliability, and security—powering AI development and deployment at scale.",
    seoKeywords:
      "Mcpbox, MCP infrastructure, AI infrastructure platform, enterprise AI scalability, secure MCP for AI, reliable MCP server, build and scale AI, AI infrastructure security, enterprise-level MCP support, scalable AI infrastructure",
  },
  {
    title: "FAQs",
    slug: "faqs",
    subtitle: "Your Guide to MCP Servers — Secure, Real-Time AI Connections",
    description:
      "Discover how MCP Servers let AI assistants securely access external data and tools. This FAQ covers everything from architecture and features to deployment and security best practices.",
  },
  {
    title: "Dashboard",
    slug: "dashboard",
    subtitle: "The Wait Is Almost Over!",
    description:
      "Something game-changing is on the horizon. We’re counting down the seconds until launch — and you won’t want to miss it. Get ready for the drop.",
  },
  {
    title: "Servers",
    slug: "servers",
    seoTitle: "MCP Servers | Mcpbox",
    seoDescription:
      "Explore a complete list of MCP servers with detailed features, integrations, and setup guides. Compare and choose the right Model Context Protocol server for your AI workflows.",
    seoKeywords:
      "MCP servers list, Model Context Protocol servers, MCP server comparison, AI MCP infrastructure, self-hosted MCP servers, MCP server features, MCP server integrations, deploy MCP server, AI workflow servers, MCP server setup guide",
  },
];
