import {IncomingMessage, ServerResponse} from "node:http"
import { routes } from "../routes/index"
import { Database } from "../database/database"

const database = new Database()

interface IncomingMessageWithBody extends IncomingMessage {
    body?: any
}

export function routeHandler(req: IncomingMessageWithBody, res: ServerResponse){
    const route = routes.find((route) => {
        return route.method === req.method && route.path === req.url
    }) 

    if(route){
        return route.controller({req, res, database})
    }

    return res.writeHead(404).end()
}