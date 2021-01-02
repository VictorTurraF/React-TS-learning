import { rest } from 'msw';
import MockedServer from 'contracts/abstracts/MockedServer';
import config from 'api/config';
import worker from 'mocks/browser';

class PostCardMockedServer extends MockedServer {
  public useNotFoundError = () => rest.get(
    this.baseUrl,
    this.errorResolver(404),
  );
}

const postCardMockedServer = new PostCardMockedServer(`${config.baseURL}/posts/:postId`, worker);
export default postCardMockedServer;
