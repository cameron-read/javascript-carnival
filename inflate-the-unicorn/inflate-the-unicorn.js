// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.getElementById('uni0').onclick = clicked
document.getElementById('uni1').onclick = clicked
document.getElementById('uni2').onclick = clicked

let inflationLevel0 = 0
let inflationLevel1 = 0
let inflationLevel2 = 0

uni0.onclick = clicked
uni1.onclick = clicked
uni2.onclick = clicked

//---function for on click uni# pic---//

//work out uni# clicked
//increment inflation level
//change the source of the image to reflect inflation level

function clicked(event) {
  let unicorn = event.target

  //if statement to increment inflation level

  if (unicorn.id == 'uni0') {
    inflationLevel0++

    if (inflationLevel0 == 4) inflationLevel0 = 0

    unicorn.src = './images/unicorn-' + inflationLevel0 + '.png'
  }
  //if statement to increment inflation level for the other unicorns
  if (unicorn.id == 'uni1') {
    inflationLevel1++

    if (inflationLevel1 == 4) inflationLevel1 = 0

    unicorn.src = './images/unicorn-' + inflationLevel1 + '.png'
  }

  if (unicorn.id == 'uni2') {
    inflationLevel2++

    if (inflationLevel2 == 4) inflationLevel2 = 0

    unicorn.src = './images/unicorn-' + inflationLevel2 + '.png'
  }
}

// document.getElementById('uni0').onclick = clicked
// document.getElementById('uni1').onclick = clicked
// document.getElementById('uni2').onclick = clicked

// let inflation = [0, 0, 0]

// function clicked(event) {
//   let unicorn = event.target
//   let id = unicorn.id[3]

//   inflation[id]++

//   if (inflation[id] == 4) inflation[id] = 0

//   unicorn.src = './images/unicorn-' + inflation[id] + '.png'

//   if (inflation[id] == 3) {
//     document.getElementById('subtitle').innerHTML = 'Thank You!'
//   } else if (inflation[id] == 0) {
//     document.getElementById('subtitle').innerHTML = 'Unicorns Say...!'
//   }
// }
