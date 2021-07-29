function volume( l, w, h ) {  
    return l * w * h;
  }
  
  var curried = curry( volume ); 