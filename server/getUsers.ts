import * as got from 'got'

async function getUsers() {
  const hostname = 'tw.rpi.edu'
  const query =
    '/endpoint/books?query=PREFIX+tw%3A+++%3Chttp%3A%2F%2Ftw.rpi.edu%2Fschema%2F%3E%0D%0APREFIX+foaf%3A+++%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+dc%3A++++++%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0ASELECT+distinct+%3Fs%0D%0AWHERE+%0D%0A++%7B+%3Fs+a+foaf%3APerson+%7D&stylesheet=%2Fendpoint%2Fxml-to-html.xsl&output=json'
  const endpoint = 'http://' + hostname + query
  let response: got.Response<any> | null = null
  try {
    response = await got(endpoint)
  } catch (error) {
    console.log('got an error ', error)
  }
  return response
}

export default getUsers
