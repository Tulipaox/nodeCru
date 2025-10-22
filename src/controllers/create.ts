import { IncomingMessage, ServerResponse } from "node:http"
import { Database } from "../database/database"

interface IncomingMessageWithBody extends IncomingMessage {
  body?: any
}

export function create({req, res, database}) {
  const { equipment, description, user_name } = req.body

  const ticket = {
    id: crypto.randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    create_at: new Date(),
    update_at: new Date()
  }


  return res.end(JSON.stringify(ticket))
}