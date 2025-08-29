// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { Session } from "../schema/lists/lists.types";

type TestimonialCreateInput =
  Lists.Testimonial.TypeInfo<Session>["inputs"]["create"];

export const TESTIMONIALS: TestimonialCreateInput[] = [
  {
    title: "Senior Software Architect",
    fullName: "Michael Turner,",
    feedback:
      "Deploying MCP servers used to take my team hours of setup and debugging. With this registry, I can spin up any server in minutes with a single click. It’s a total game-changer for productivity.",
  },
  {
    title: "CTO",
    fullName: "Daniel Roberts",
    feedback:
      "I’ve tried multiple platforms for managing server infrastructure, but this one is by far the most intuitive. The one-click deployment feature saves us countless hours every week.",
  },
  {
    title: "Backend Developer",
    fullName: "James Peterson",
    feedback:
      "As a backend developer, I’m constantly testing new services. This MCP server registry makes it effortless—I can launch a new environment in seconds without bothering our ops team.",
  },
  {
    title: "Lead DevOps Engineer",
    fullName: "Sophia Martinez",
    feedback:
      "What impressed me most was how seamless the integration is. I didn’t need to worry about configuration details—everything just works out of the box.",
  },
  {
    title: "Product Manager",
    fullName: "Emma Williams",
    feedback:
      "This platform has simplified our development workflow tremendously. Instead of wasting time setting up environments, my team can focus on building real features.",
  },
];
