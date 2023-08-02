// src/mocks/browser.js
import { handler } from "./handler";

import { setupWorker } from "msw";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handler);
