import http, {IncomingMessage, ServerResponse} from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.ts"
import { routeHandler } from "./middlewares/routeHandler.ts"

interface IncomingMessageWithBody extends IncomingMessage {
    body?: any
}

async function listener(req: IncomingMessageWithBody, res: ServerResponse) {
    await jsonHandler(req, res)
    routeHandler(req, res)
}

http.createServer(listener).listen(3333)