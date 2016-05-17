// var animal = {
//     species: 'dog',
//     weight: 23,
//     sound: 'woof'
// }
// // es2015 feature
// var { species, sound } = animal;
// console.log('THE ' + species + ' says ' + sound + '!')

// options
makesound({
  weight: 23,
  sound: 'woof'
})

function makesound({ species = 'dog', sound}) {
  console.log('The ' + species + ' says ' + sound + '!')
}


