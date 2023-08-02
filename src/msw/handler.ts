import { rest } from "msw";
import { GET_OPTIONS_URL, makeTestUrl } from "../services/api/constant";

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
];
