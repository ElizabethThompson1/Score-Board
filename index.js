homeScore = 0;
guestScore = 0;

let home = document.getElementById("scoreCount");
let guest = document.getElementById("scoreCount2");

function add1() {
  homeScore += 1;
  home.textContent = homeScore;
  console.log(homeScore);
}
function add2() {
  homeScore += 2;
  home.textContent = homeScore;
  console.log(homeScore);
}

function add3() {
  homeScore += 3;
  home.textContent = homeScore;
  console.log(homeScore);
}
function reset() {
  let reset = homeScore;
  home.textContent += reset;
  home.textContent = 0;
  homeScore = 0;
}

function guestAdd1() {
  guestScore += 1;
  guest.textContent = guestScore;
  console.log(guestScore);
}
function guestAdd2() {
  guestScore += 2;
  guest.textContent = guestScore;
  console.log(guestScore);
}

function guestAdd3() {
  guestScore += 3;
  guest.textContent = guestScore;
  console.log(guestScore);
}

function resetGuest() {
  let reset = guestScore;
  guest.textContent += reset;
  guest.textContent = 0;
  guestScore = 0;
}
