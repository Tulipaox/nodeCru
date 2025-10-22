import {IncomingMessage, ServerResponse} from "node:http"
import {create} from "../controllers/create"
import { Database } from "../database/database"

interface IncomingMessageWithBody extends IncomingMessage {
    body?: any
}

export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        controller: create,
    },

     {
        method: "POST",
        path: "/tickets",
        controller: create,
    },
]