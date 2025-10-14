import {IncomingMessage, ServerResponse} from "node:http"
import { routes } from "../routes/index"

interface IncomingMessageWithBody extends IncomingMessage {
    body?: any
}

export function routeHandler(req: IncomingMessageWithBody, res: ServerResponse){
    const route = routes.find((route) => {
        return route.method === req.method && route.path === req.url
    }) 

    if(route){
        return route.controller(req, res)
    }

    return res.writeHead(404).end()
}