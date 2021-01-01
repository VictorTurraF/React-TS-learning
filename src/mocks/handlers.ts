import {rest} from "msw";
import { config } from 'api/config';

export const handlers = [
  rest.get(
    config.baseURL + '/posts/:postId',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          userId: 1,
          id: 1,
          title: "Test Title",
          body: "Test body"
        })
      );
    }
  )
];
