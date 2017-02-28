export function objectLength( object ) {
  var length = 0;
  for( var key in object ) {
    if( object.hasOwnProperty(key) ) {
      ++length;
    }
  }
  return length;
}

export function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}