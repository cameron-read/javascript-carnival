// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//get random cell
//get  mole image to appear in random cell
//be  able to click on the mole
//mole respawns in another random cell

let cells = document.getElementsByTagName('TD')

//get rabdom number
let randomIndex = Math.floor(Math.random() * cells.length)

let randomCell = cells[randomIndex]

// get and asssign mole.PNG to random cells
let mole = document.createElement('img')

mole.src = './mole.PNG'

//resize mole.PNG to fit cell via css id addition
mole.id = 'mole'

//assign mole.PNG to random cell
randomCell.appendChild(mole)

mole.onclick = whackedMole

//have mole.PNG spawn randomly on-click and play whack-audio.wav on-click
function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

  let audio = new Audio('./whack-audio.wav')
  audio.play()
}
