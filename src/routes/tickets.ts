import {IncomingMessage, ServerResponse} from "node:http"
import {create} from "../controllers/create.ts"

interface IncomingMessageWithBody extends IncomingMessage {
    body?: any
}

export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        controller: create,
    },
]