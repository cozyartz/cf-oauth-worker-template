import { handleNiftyCallback } from './routes/nifty-callback';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/oauth/nifty/callback') {
      return handleNiftyCallback(request, env);
    }

    return new Response('Not found', { status: 404 });
  }
};