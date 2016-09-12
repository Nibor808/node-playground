import fs from 'fs'

export default function getUsers() {
  return Promise.resolve( JSON.parse( fs.readFileSync( 'config/users-list.json' ) ) )
}
