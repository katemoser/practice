"use strict"

// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");
const loanAmount = document.getElementById("loan-amount");
const loanYears = document.getElementById("loan-years");
const loanRate = document.getElementById("loan-rate");
const monthlyPaymentDisplay = document.getElementById("calc-monthly-payment");

/** Retrieves current form values and returns {amount, years, rate}. */

function getFormValues() {
  console.log("form values:", loanAmount.value, loanYears.value, loanRate.value);

  return {
    amount: parseInt(loanAmount.value), 
    years: parseInt(loanYears.value), 
    rate: parseInt(loanRate.value)
  };
  
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
  console.log("calc monthly payment. args: ", amount, years, rate)
  const P = amount;
  const i = (rate/100)/12;
  const n = years*12;

  return (P * i)/(1-(1+i)**(-n));
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  const formValues = getFormValues();
  const monthlyPayment = calcMonthlyPayment(formValues.amount, formValues.years, formValues.rate);
  console.log(monthlyPayment)
  //display monthly payment
  monthlyPaymentDisplay.innerText = "$" + monthlyPayment.toFixed(2);
  
}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  loanAmount.value = 300000;
  loanYears.value = 30;
  loanRate.value = 6;
  getFormValuesAndDisplayResults();
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);
