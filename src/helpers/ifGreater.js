export default function ifGreater( v1, v2, opts ) {
  return v1 >= v2 ? opts.fn( this ) : opts.inverse( this )
}
