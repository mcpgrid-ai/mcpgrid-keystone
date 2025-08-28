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
    seoTitle: "Mcpgrid | Build & Scale AI with Secure MCP Infrastructure",
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
    seoTitle: "FAQs | Mcpgrid",
    seoDescription:
      "Explore our comprehensive FAQs to learn about MCP Servers, their features, deployment, and security best practices. Get answers to common questions and ensure a secure and efficient MCP infrastructure.",
    seoKeywords:
      "MCP Servers FAQs, MCP Servers features, MCP Servers deployment, MCP Servers security, MCP Servers best practices, MCP Servers FAQ, MCP Servers architecture, MCP Servers features, MCP Servers deployment, MCP Servers security",
  },
  {
    title: "Dashboard",
    slug: "dashboard",
    subtitle: "The Wait Is Almost Over!",
    description:
      "Something game-changing is on the horizon. We’re counting down the seconds until launch — and you won’t want to miss it. Get ready for the drop.",
    seoTitle: "Dashboard | Mcpgrid",
    seoDescription:
      "The wait is almost over! We're counting down the seconds until launch — and you won't want to miss it. Get ready for the drop.",
    seoKeywords:
      "Mcpbox, MCP infrastructure, AI infrastructure platform, enterprise AI scalability, secure MCP for AI, reliable MCP server, build and scale AI, AI infrastructure security, enterprise-level MCP support, scalable AI infrastructure, dashboard, dashboard Mcpbox, dashboard Mcpbox",
  },
  {
    title: "Servers",
    slug: "servers",
    seoTitle: "MCP Servers | Mcpgrid",
    seoDescription:
      "Explore a complete list of MCP servers with detailed features, integrations, and setup guides. Compare and choose the right Model Context Protocol server for your AI workflows.",
    seoKeywords:
      "MCP servers list, Model Context Protocol servers, MCP server comparison, AI MCP infrastructure, self-hosted MCP servers, MCP server features, MCP server integrations, deploy MCP server, AI workflow servers, MCP server setup guide",
  },
  {
    title: "Sign In",
    slug: "sign-in",
    subtitle: "Welcome Back!",
    description: "Sign in to continue to Minia.",
    seoTitle: "Sign In | Mcpgrid",
    seoDescription:
      "Sign in to your Mcpgrid account to access MCP servers, manage your AI infrastructure, and explore enterprise-level tools for secure and scalable AI development.",
    seoKeywords:
      "Mcpgrid sign in, MCP login, AI infrastructure account access, secure MCP login, enterprise AI tools sign in, MCP server dashboard login, Mcpgrid account access, scalable AI infrastructure login",
  },
];
