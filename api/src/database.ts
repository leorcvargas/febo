import * as mongoose from 'mongoose'
import { MongoError } from 'mongodb'

class Database {
    private url: string
    private options: mongoose.ConnectionOptions = {
        useNewUrlParser: true,
    }

    constructor() {
        this.url = 'mongodb://localhost/febo-api'
    }

    public connect(): void {
        mongoose.connect(this.url, this.options, this.onConnection)
    }

    private onConnection(error: MongoError): void {
        if (error) {
            console.error(`Database connection error: ${error}`)
            process.exit(1);
        }

        console.log('Database is connected')
    }
}

export default new Database()
