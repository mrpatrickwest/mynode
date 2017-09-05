import { knex } from './db'

async function getBooks() {
  const dbBooks = await knex.select().from('book')

  return {
    books: dbBooks,
  }
}

export default getBooks
