import getUsers from '../utils/get-users'

export default function( app ) {

  app.get('/', function( req, res ) {
    res.render( 'index', {
      showTitle: false,
      loadData: true
    } )
  } )

  app.get( '/users', function( req, res ) {
    getUsers().then( function( users ) {
      res.render( 'users', { users } )
    } )
  } )
}
