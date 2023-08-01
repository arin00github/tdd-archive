import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./Layout";
import MutationExamplePage from "../pages/mutationExample";
import TDDBasicPage from "../pages/tddBasic";
import TDDApiPage from "../pages/tddApi";
import HomePage from "../pages/home";

export const pageArray = [
  {
    path: "/mutation-example-1",
    element: <MutationExamplePage />,
  },
  { path: "/tdd-comcept-2", element: <TDDBasicPage /> },
  {
    path: "/tdd-api-msw-3",
    element: <TDDApiPage />,
  },
  { path: "/main", element: <HomePage /> },
];

const routerObject = [
  {
    element: <RootLayout />,
    children: pageArray,
  },
  { path: "/", element: <Navigate replace to="/main" /> },
  { path: "*", element: <Navigate replace to="/main" /> },
];

const router = createBrowserRouter(routerObject);

export default router;
