"use strict";
/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return Number.isInteger(size) && size >= 2 && size <= 50;
}

/* Takes two sides, returns area */
function getArea(a, b) {
  return (a * b) / 2;
}

/* Takes two sides, returns hyponetuse */
function getHypotenuse(a, b) {
  const hypot = Math.sqrt(a ** 2 + b ** 2);
  return Math.round(hypot);
}

/* get message  from hypot and area*/
function getMainMsg(hypot, area) {
  let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
  if (area > 50) {
    msg += ` That's a really big triangle!`;
  }
  return msg;
}

/* takes two sides, returns messages for UI*/
function getMessagesFromSides(a,b){
  let aOk = validateEdge(a);
  let bOk = validateEdge(b);

  let aErrorMsg = aOk ? "" : "Invalid!";
  let bErrorMsg = bOk ? "" : "Invalid!";

  let msg = "";

  if (aOk && bOk) {
    let area = getArea(a, b);
    let hypot = getHypotenuse(a, b);
    msg = getMainMsg(hypot, area);
  }

return {aErrorMsg, bErrorMsg, msg};
}

/* Handle UI: get form data & update HTML */
function processForm(evt) {
  evt.preventDefault();
  let a = +document.getElementById("side-a").value;
  let b = +document.getElementById("side-b").value;

  const res = getMessagesFromSides(a,b)
  document.getElementById("a-msg").innerHTML = res.aErrorMsg;
  document.getElementById("b-msg").innerHTML = res.bErrorMsg;
  document.getElementById("msg").innerHTML = res.msg;
}
