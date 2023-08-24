import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./Layout";

import TDDBasicPage from "../pages/tddBasic";
import TDDApiPage from "../pages/tddApi";
import HomePage from "../pages/home";
import TDDMockPage from "../pages/tddMock";
import TDDMockPage2 from "../pages/tddMock2";
import TDDAsyncPage from "../pages/tddAsync";
import TDDModulePage from "../pages/tddModule";

const BASE_URL = "/tdd-archive";

export const pageArray = [
  { path: "/main", element: <HomePage /> },
  { path: "/tdd-comcept-1", element: <TDDBasicPage /> },
  { path: "/tdd-comcept-2", element: <TDDAsyncPage /> },
  {
    path: "/tdd-api-1",
    element: <TDDApiPage />,
  },
  { path: "/tdd-mock-1", element: <TDDMockPage /> },
  { path: "/tdd-mock-2", element: <TDDMockPage2 /> },
  { path: "/tdd-modulize-1", element: <TDDModulePage /> },
];

const routerObject = [
  {
    element: <RootLayout />,
    children: pageArray,
  },
  { path: "/", element: <Navigate replace to="/main" /> },
  { path: "*", element: <Navigate replace to="/main" /> },
];

const router = createBrowserRouter(routerObject, { basename: BASE_URL });

export default router;
