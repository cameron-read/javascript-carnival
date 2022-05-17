// // -    -   -   -   -  //
// // JAVASCRIPT CARNIVAL //
// // -    -   -   -   -  //

// // use the left and right arrow keys to change the outfit
// // use the up and down arrows to change whch part of the body we are on

document.onkeydown = checkKey

function checkKey(e) {
  //---up arrow--//
  if (e.keyCode == '38') {
    changeVertical(-1)
  }
  //---down arrow--//
  if (e.keyCode == '40') {
    changeVertical(1)
  }
  //---left arrow--//
  if (e.keyCode == '37') {
    changeHorizontal(-1)
  }
  //---right arrow--//
  if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

let mainIndex = 0

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

// shift between clothing options for head field right and left in a loop from 0 - 5
function changeHorizontal(shift) {
  if (mainIndex == 0) {
    headIndex += shift

    if (headIndex < 0) headIndex = 5

    if (headIndex > 5) headIndex = 0

    head.src = './images/head' + headIndex + '.png'
  }

  // shift between clothing options for body field right and left in a loop from 0 - 5
  if (mainIndex == 1) {
    bodyIndex += shift

    if (bodyIndex < 0) bodyIndex = 5

    if (bodyIndex > 5) bodyIndex = 0

    body.src = './images/body' + bodyIndex + '.png'
  }

  // shift between clothing options for shoes field right and left in a loop from 0 - 5
  if (mainIndex == 2) {
    shoesIndex += shift

    if (shoesIndex < 0) shoesIndex = 5

    if (shoesIndex > 5) shoesIndex = 0

    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}
// shift horizonatally between body parts, in a loop both up and down from 0 - 2
function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2

  if (mainIndex > 2) mainIndex = 0
}

//---an elegant solution---//

// let indexes = [0, 0, 0]
// let mainIndex = 0

// let head = document.getElementById('head')
// let body = document.getElementById('body')
// let shoes = document.getElementById('shoes')

// let imgs = [head, body, shoes]
// let strings = ['head', 'body', 'shoes']

// function changeHorizontal(shift) {
//   let index = indexes[mainIndex]
//   let image = imgs[mainIndex]
//   let str = strings[mainIndex]

//   index += shift

//   if (index < 0) index = 5

//   if (index > 5) index = 0

//   indexes[mainIndex] = index

//   image.src = './images/' + str + index + '.png'
// }

// function changeVertical(shift) {
//   mainIndex += shift

//   if (mainIndex < 0) mainIndex = 2

//   if (mainIndex > 2) mainIndex = 0
// }
