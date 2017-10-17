var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}


function add2(n) {
  return n += 2

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction() {
  var theFunk = 'FUNKY!'

  console.log(theFunk);
}


/*
var animal = 'dog';

function makeZoo() {
  var animal = 'cat';

  console.log(`I think I'll put this ${animal} in the zoo.`);
}

makeZoo(); // "I think I'll put this cat in the zoo."

animal // "dog"
*/
