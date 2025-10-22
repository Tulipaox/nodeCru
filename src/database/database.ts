import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

interface DataBody {
    id?: string
    equipment: string,
    description: string,
    user_name: string,
    status?: "open",
    create_at: Date,
    update_at: Date
}

export class Database {
    #database = {}

    constructor() {
        fs.readFile(DATABASE_PATH, "utf-8")
            .then((data) => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })
    }

    insert(data: DataBody) {
        
    }

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }
} 