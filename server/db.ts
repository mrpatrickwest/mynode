import * as Knex from 'knex'

let knex: Knex

const databaseDefaults = {
  host: 'localhost',
  user: 'root',
  password: 'level-42',
  port: 3307,
  database: 'books',
  bigNumberStrings: true,
  supportBigNumbers: true,
}

const initDb = async () => {
  knex = Knex({
    client: 'mysql2',
    connection: databaseDefaults,
  })
  let conn: any
  try {
    conn = await knex.client.acquireConnection()
  } catch (e) {
    throw new Error('TALK.UnableToConnectToDB')
  } finally {
    if (conn) {
      knex.client.releaseConnection(conn)
    }
  }
}

export { initDb, knex }
