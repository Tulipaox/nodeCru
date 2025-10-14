import {IncomingMessage, ServerResponse} from "node:http"

interface IncomingMessageWithBody extends IncomingMessage {
    body?: any
}

export async function  jsonHandler(req: IncomingMessageWithBody, res: ServerResponse) {
    const buffers = []

    for await (const chunk of req){
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        req.body = null;
    }

    res.setHeader("Content-type", "application/json");
}