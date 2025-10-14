import {IncomingMessage, ServerResponse} from "node:http"

interface IncomingMessageWithBody extends IncomingMessage {
    body?: any
}


export function create(req: IncomingMessageWithBody, res: ServerResponse) {
  return res.end("Criado com sucesso!")  
}