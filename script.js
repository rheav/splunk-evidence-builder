"use strict";

const indexForm = document.getElementById("index");
const evidenceForm = document.getElementById("evidence");

const btn = document.getElementById("makeUrl");
const btnAba = document.getElementById("newTab");
const newTabAnchor = document.getElementById("newTab");
const copyTip = document.getElementById("copy-tooltip");

const urlPronta = document.getElementById("url-pronta");
let urlFinal;

function validateForm() {
  let checkIndex = indexForm.value;
  let checkEvidence = evidenceForm.value;

  // Storing data in local storage so it does not clear the field when closing extension
  window.localStorage.setItem("index", indexForm.value);
  window.localStorage.setItem("evidence", evidenceForm.value);

  if (checkIndex == "" && checkEvidence == "") {
    alert("Fill index e evidence hash");
  } else if (checkIndex == "") {
    alert("Fill index");
  } else if (checkEvidence == "") {
    alert("Fill evidence hash");
  } else {
    urlFinal = `https://monitoring.vtex.com/api/pvt/evidence?app=${checkIndex}` + encodeURI("&") + `hash=${checkEvidence}`;
    urlPronta.innerHTML = urlFinal;
    newTabAnchor.href = urlFinal;
    btnAba.style.visibility = "visible";
  }
}

function easyCopy() {
  navigator.clipboard.writeText(urlFinal);
  copyTip.style.opacity = "1";
  setTimeout(fadeOut, 2000);

  function fadeOut() {
    copyTip.style.opacity = "0";
  }
}
// Loading data from localStorage
function loadStorage() {
  indexForm.value = localStorage.getItem("index");
  evidenceForm.value = localStorage.getItem("evidence");
}

urlPronta.addEventListener("click", easyCopy);

btn.addEventListener("click", validateForm);

loadStorage();
