// // Function for squaring
// function squarer (num) {
//   // Check to makesure input is in numbers or int
//   if (typeof num !== 'number') {
//     console.log('Please use numbers only')
//   } else {
//     return Math.pow(num, 2)
//   }
// }

exports.squarer = function (num) {
  if (typeof num !== 'number') {
    console.log('Please use numbers only')
  } else {
    return Math.pow(num, 2)
  }
}
