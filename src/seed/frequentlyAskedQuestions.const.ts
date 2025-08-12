export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    title: "What is MCP (Model Context Protocol)?",
    description:
      "The Model Context Protocol (MCP) is an open-source standard—developed by Anthropic—that allows AI systems to securely connect to external data sources. Using a client–server architecture, MCP enables AI assistants to access files, databases, APIs, tools, and prompts through a consistent, interoperable interface.",
  },
  {
    title: "What is an MCP Server?",
    description:
      "An MCP Server is a system that provides context, tools, and prompts to AI clients. It can make resources such as documents, files, databases, and third-party APIs securely accessible, enabling AI assistants to work with up-to-date, real-time information.",
  },
  {
    title: "How do MCP Servers work?",
    description:
      "MCP Servers operate using a simple client–server model. They make data and tools available via the standardized MCP protocol, establishing secure, one-to-one connections with clients inside host applications (e.g., Claude Desktop).",
  },
  {
    title: "What can MCP Servers provide?",
    description:
      "MCP Servers can offer access to resources such as files, documents, and datasets, expose tools like API integrations or custom actions, and supply reusable, pre-defined prompts. Each server controls its own resources and enforces strict boundaries to ensure security.",
  },
  {
    title: "How do AI assistants use MCP?",
    description:
      "AI assistants connect to MCP Servers to retrieve data, execute tools, and leverage pre-defined prompts, significantly extending their capabilities with real-time, relevant information. Today, this works with local MCP Servers; enterprise-ready remote server support is also available.",
  },
  {
    title: "Are MCP Servers secure?",
    description:
      "Yes. Security is integral to the MCP design. Servers maintain ownership of their data, manage authentication, and enforce access control. API keys and sensitive credentials never need to be shared with LLM providers, keeping clear trust boundaries intact.",
  },
  {
    title: "Do MCP Servers work only locally?",
    description:
      "No. While MCP Servers can run locally on a developer’s machine for rapid testing and prototyping, they can also be deployed in remote or enterprise environments. Remote deployment allows multiple AI assistants to securely share the same resources without exposing them publicly.",
  },
  {
    title: "Can MCP Servers connect to multiple clients at once?",
    description:
      "Yes. An MCP Server can be configured to handle multiple client connections, although each connection is typically isolated for security. This isolation ensures that one client’s access to tools and data does not affect or expose another client’s session.",
  },
  {
    title: "Do I need to modify my AI assistant to use MCP?",
    description:
      "Usually no. Most AI assistants that support MCP can connect to compatible servers without custom modifications, provided the server follows the MCP standard. Developers only need to register the server with the assistant’s configuration, after which the assistant can start using its data, tools, and prompts immediately.",
  },
];
