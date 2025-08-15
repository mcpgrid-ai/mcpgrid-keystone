import { createLogger, transports } from "winston";

const { Console } = transports;

export const logger = createLogger({
  transports: [new Console()],
});
