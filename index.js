//is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];

// Use the contents of the 'cats' array
console.log(` THis is original array: ${cats}`);

// appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
  const newCats = [...cats, name];
  console.log(`This is array of new cats for appendCat: ${newCats}`);
  return newCats;
}

appendCat(  "Broom" );


// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
  const newCats = [name, ...cats];
  console.log(`This is array of new cats for prependCat: ${newCats}`);
  return newCats;
}

prependCat(  "Arnold" );


//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  const newCats = cats.slice(0,-1)
  console.log(`This is array of new cats for removeLastCat: ${newCats}`);
  return newCats;
}
removeLastCat();

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged

function removeFirstCat(){
  const newCats = cats.slice(1);
  console.log(`This is array of new cats for removeFirstCat: ${newCats}`);
  return newCats;
}

removeFirstCat();
