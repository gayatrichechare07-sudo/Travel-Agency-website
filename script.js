// =========================
// FILE: script.js
// =========================

// Typing Animation

const text = "Explore The World With Us ✈️";

let i = 0;

function typing(){

  if(i < text.length){

    document.getElementById("typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(typing,100);
  }
}

typing();

// =========================
// ADD IN script.js
// =========================

function calculatePrice(){

  let destination =
  document.getElementById("destination").value;

  let people =
  document.getElementById("people").value;

  let total = destination * people;

  document.getElementById("totalPrice").innerHTML =
  "Estimated Cost: ₹" + total;

