import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "antd/dist/reset.css";

import router from "./routes/Router.tsx";
import { worker } from "./msw/browser.ts";

if (process.env.NODE_ENV === "development") {
  worker.printHandlers();
  worker.start();
}

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
