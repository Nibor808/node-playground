
export default Backbone.Model.extend( {
  idAttribute: 'id',

  validate( attrs ) {
    if( !attrs.name) {
      return "Name is required"
    }
    if( !attrs.age) {
      return 'Age is required'
    }
  }
} )
