import { rest } from "msw";
import {
  GET_OPTIONS_URL,
  GET_POSTS_URL,
  makeTestUrl,
} from "../services/api/constant";
import postsData from "../data/postsData.json";

export const initialOptions: { label: string; value: string }[] = [
  { label: "TMS개발", value: "TMS-group" },
  { label: "VMS개발", value: "VMS-group" },
  { label: "DMS개발", value: "DMS-group" },
  { label: "혁신개발", value: "innovation-development" },
  { label: "인공지능개발", value: "AI-development" },
];

export const handler = [
  rest.get(makeTestUrl(GET_OPTIONS_URL), async (req, res, ctx) => {
    console.log("req", req);
    return res(ctx.status(200), ctx.json(initialOptions));
  }),

  rest.get(makeTestUrl(GET_POSTS_URL), async (req, res, ctx) => {
    console.log("req", req);
    return res(ctx.status(200), ctx.json(postsData));
  }),
];
