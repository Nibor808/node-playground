import USER from 'model'

export default Backbone.Collection.extend( {
  model: USER,
  url: '/config/users-list',

  initialize() {
    fetch( {
      data: {
        url
      },
      success() {
        console.log( 'Fetched users' )
      },
      error(){
        console.log( 'Could not fetch users' )
      }
    } )
  },

  add( name, age ) {
    new USER( { name: this.name, age: this.age } )
  }
} )
