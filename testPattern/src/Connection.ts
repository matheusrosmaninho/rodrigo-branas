import pgp from "pg-promise"

export default class Connection {
    pgp: any

    constructor(){
        this.pgp = pgp()("postgres://postgres:123456@localhost:5432/app")
    }

    query(statement: string, parameters: any = null) {
        return this.pgp.query(statement, parameters)
    }
}