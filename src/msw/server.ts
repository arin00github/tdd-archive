import { handler, tddHandler } from "./handler";

import { setupServer } from "msw/node";

export const server = setupServer(...handler);
export const tddServer = setupServer(...tddHandler);
