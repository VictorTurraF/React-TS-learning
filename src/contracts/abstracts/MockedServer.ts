import {RequestHandler, ResponseResolver, rest, SetupWorkerApi} from "msw";

export abstract class MockedServer {

  protected baseUrl: string;
  protected worker: SetupWorkerApi;

  public constructor(baseUrl: string, worker: SetupWorkerApi) {
    this.baseUrl = baseUrl;
    this.worker = worker;
  }

  protected errorResolver = ( status: number ) => {
    const resolver: ResponseResolver = (req, res, ctx) => {
      return res(
        ctx.status(status),
      );
    }
    return resolver;
  }

  public useInternalServerError = (): RequestHandler<any, any> => {
    return rest.get(
      this.baseUrl,
      this.errorResolver(500)
    )
  }

  public mockRequest = async ( handler: () => RequestHandler<any, any> ) => {
    await this.worker.start();
    this.worker.use(handler());
  }

}
