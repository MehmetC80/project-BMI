"use strict";

const heute = new Date();
const result = () => {
  let gewicht = document.getElementById("gewicht").value;
  let groesse = document.getElementById("groesse").value;

  console.log(gewicht);
  console.log(groesse);

  let result = gewicht / groesse ** 2;
  document.getElementById("bmi").value = result.toFixed(1);
  console.log(result);
};

const countOccurrences = (text, letter) => {
  let counter = 0;
  const arr1 = text.toLowerCase().split("");
  for (let item of arr1) {
    if (item === letter) counter += 1;
  }
  return counter;
};

const isStrEndOf4Word = (post, word) => {
  if (post.slice(0, post.length) === word.slice(word.length - 4, word.length)) {
    return true;
  } else {
    return false;
  }
};

const isStrEndOf3Word = (post, word) => {
  if (post.slice(0, post.length) === word.slice(word.length - 3, word.length)) {
    return true;
  } else {
    return false;
  }
};

const valideEmail = (email) => {
  let foo = email.toLowerCase();
  if (
    countOccurrences(foo, "@") === 1 &&
    countOccurrences(foo, ".") === 2 &&
    (isStrEndOf4Word(".com", foo) ||
      isStrEndOf4Word(".net", foo) ||
      isStrEndOf4Word(".com", foo) ||
      isStrEndOf4Word(".edu", foo) ||
      isStrEndOf3Word(".de", foo) ||
      isStrEndOf3Word(".eu", foo) ||
      isStrEndOf3Word(".uk", foo))
  ) {
    return true;
  } else return false;
};
let test;

const check = () => {
  const emailDiv = document.querySelector("#emailDiv");
  const pItem = document.createElement("p");
  if (document.getElementById("email").value === "") {
    pItem.textContent = "Eingabe ist Leer";
    emailDiv.append(pItem);
  } else if (valideEmail(document.getElementById("email").value)) {
    pItem.textContent = "Email ist valide";
    emailDiv.append(pItem);
    pItem.classList.add("valide");
  } else {
    pItem.textContent = "Email ist nicht valide!";
    emailDiv.append(pItem);
    pItem.classList.add("notValide");
  }
};



let bmi = document.getElementById("bmi");
bmi.ononkeypress = () => {
  if (bmi.value < 24) {
    document.body.style.backgroundColor = "red";
    console.log("ändere Farbe");
  }
};

function addList() {
  document.getElementById("bmiList").innerHTML += ` 
<tr>
  <td>${heute.getDate()} ${heute.getMonth() + 1} ${heute.getFullYear()}</td>
  <td> ${bmi.value}<td>        
  </tr>
 


`;
  bmi.value = "";

  let gewicht = document.getElementById("gewicht").value;
  let groesse = document.getElementById("groesse").value;
  let age = document.getElementById("age").value;
  if (age >= 19 && age < 25) {
    document.getElementsByClassName(".green").style.backgroundColor = "green";
  }
}
