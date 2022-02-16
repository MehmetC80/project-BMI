"use strict";

const heute = new Date();
const result = () => {
  let gewicht = document.getElementById("gewicht").value;
  let groesse = document.getElementById("groesse").value;
  let age = document.getElementById("age").value;

  let result = gewicht / groesse ** 2;
  document.getElementById("bmi").value = result.toFixed(1);
  const td10 = document.querySelector("#td1-0");
  const td11 = document.querySelector("#td1-1");
  const td12 = document.querySelector("#td1-2");
  const td13 = document.querySelector("#td1-3");
  const td14 = document.querySelector("#td1-4");
  const td15 = document.querySelector("#td1-5");

  const td20 = document.querySelector("#td2-0");
  const td21 = document.querySelector("#td2-1");
  const td22 = document.querySelector("#td2-2");
  const td23 = document.querySelector("#td2-3");
  const td24 = document.querySelector("#td2-4");
  const td25 = document.querySelector("#td2-5");

  const td30 = document.querySelector("#td3-0");
  const td31 = document.querySelector("#td3-1");
  const td32 = document.querySelector("#td3-2");
  const td33 = document.querySelector("#td3-3");
  const td34 = document.querySelector("#td3-4");
  const td35 = document.querySelector("#td3-5");

  const td40 = document.querySelector("#td4-0");
  const td41 = document.querySelector("#td4-1");
  const td42 = document.querySelector("#td4-2");
  const td43 = document.querySelector("#td4-3");
  const td44 = document.querySelector("#td4-4");
  const td45 = document.querySelector("#td4-5");

  const td50 = document.querySelector("#td5-0");
  const td51 = document.querySelector("#td5-1");
  const td52 = document.querySelector("#td5-2");
  const td53 = document.querySelector("#td5-3");
  const td54 = document.querySelector("#td5-4");
  const td55 = document.querySelector("#td5-5");

  const td60 = document.querySelector("#td6-0");
  const td61 = document.querySelector("#td6-1");
  const td62 = document.querySelector("#td6-2");
  const td63 = document.querySelector("#td6-3");
  const td64 = document.querySelector("#td6-4");
  const td65 = document.querySelector("#td6-5");

  const td70 = document.querySelector("#td7-0");
  const td71 = document.querySelector("#td7-1");
  const td72 = document.querySelector("#td7-2");
  const td73 = document.querySelector("#td7-3");
  const td74 = document.querySelector("#td7-4");
  const td75 = document.querySelector("#td7-5");

  const td80 = document.querySelector("#td8-0");
  const td81 = document.querySelector("#td8-1");
  const td82 = document.querySelector("#td8-2");
  const td83 = document.querySelector("#td8-3");
  const td84 = document.querySelector("#td8-4");
  const td85 = document.querySelector("#td8-5");

  ////////////////////////////////////////////////////////////

  if (result < 16 && age >= 20 && age <= 29) {
    td10.classList.add("unter2");
    td11.classList.add("unter2");
  } else if (result < 17 && age >= 30 && age <= 39) {
    td10.classList.add("unter2");
    td12.classList.add("unter2");
  } else if (result < 18 && age >= 40 && age <= 49) {
    td10.classList.add("unter2");
    td13.classList.add("unter2");
  } else if (result < 19 && age >= 50 && age <= 59) {
    td10.classList.add("unter2");
    td14.classList.add("unter2");
  } else if (result < 20 && age >= 60) {
    td10.classList.add("unter2");
    td15.classList.add("unter2");
  }

  /////////////////////////////////////////////////////////////////////
  if (result >= 16 && result <= 17 && age >= 20 && age <= 29) {
    td20.classList.add("unter1");
    td21.classList.add("unter1");
  } else if (result >= 18 && result <= 19 && age >= 30 && age <= 39) {
    td20.classList.add("unter1");
    td22.classList.add("unter1");
  } else if (result >= 17 && result <= 18 && age >= 40 && age <= 49) {
    td20.classList.add("unter1");
    td23.classList.add("unter1");
  } else if (result >= 19 && result <= 20 && age >= 50 && age <= 59) {
    td20.classList.add("unter1");
    td24.classList.add("unter1");
  } else if (result >= 20 && result <= 21 && age >= 60) {
    td20.classList.add("unter1");
    td25.classList.add("unter1");
  }
  /////////////////////////////////////////////////////////////

  if (result >= 17 && result <= 18.5 && age >= 20 && age <= 29) {
    td30.classList.add("normal2");
    td31.classList.add("normal2");
  } else if (result >= 18 && result <= 19.5 && age >= 30 && age <= 39) {
    td30.classList.add("normal2");
    td32.classList.add("normal2");
  } else if (result >= 19 && result <= 20.5 && age >= 40 && age <= 49) {
    td30.classList.add("normal2");
    td33.classList.add("normal2");
  } else if (result >= 20 && result <= 21.5 && age >= 50 && age <= 59) {
    td30.classList.add("normal2");
    td34.classList.add("normal2");
  } else if (result >= 21 && result <= 22.5 && age >= 60) {
    td30.classList.add("normal2");
    td35.classList.add("normal2");
  }

  if (result >= 18.5 && result <= 25 && age >= 20 && age <= 29) {
    td40.classList.add("normal");
    td41.classList.add("normal");
  } else if (result >= 19.5 && result <= 26 && age >= 30 && age <= 39) {
    td40.classList.add("normal");
    td42.classList.add("normal");
  } else if (result >= 20.5 && result <= 27 && age >= 40 && age <= 49) {
    td40.classList.add("normal");
    td43.classList.add("normal");
  } else if (result >= 21.5 && result <= 28 && age >= 50 && age <= 59) {
    td40.classList.add("normal");
    td44.classList.add("normal");
  } else if (result >= 22.5 && result <= 29 && age >= 60) {
    td40.classList.add("normal");
    td45.classList.add("normal");
  }

  if (result >= 25 && result <= 30 && age >= 20 && age <= 29) {
    td50.classList.add("normal1");
    td51.classList.add("normal1");
  } else if (result >= 26 && result <= 31 && age >= 30 && age <= 39) {
    td50.classList.add("normal1");
    td52.classList.add("normal1");
  } else if (result >= 27 && result <= 32 && age >= 40 && age <= 49) {
    td50.classList.add("normal1");
    td53.classList.add("normal1");
  } else if (result >= 28 && result <= 33 && age >= 50 && age <= 59) {
    td50.classList.add("normal1");
    td54.classList.add("normal1");
  } else if (result >= 29 && result <= 34 && age >= 60) {
    td50.classList.add("normal1");
    td55.classList.add("normal1");
  }

  ////////////////////////////////////////////////////////////////

  if (result >= 25 && result <= 30 && age >= 20 && age <= 29) {
    td50.classList.add("adipositas1");
    td51.classList.add("adipositas1 ");
  } else if (result >= 26 && result <= 31 && age >= 30 && age <= 39) {
    td50.classList.add("adipositas1 ");
    td52.classList.add("adipositas1 ");
  } else if (result >= 27 && result <= 32 && age >= 40 && age <= 49) {
    td50.classList.add("adipositas1 ");
    td53.classList.add("adipositas1 ");
  } else if (result >= 28 && result <= 33 && age >= 50 && age <= 59) {
    td50.classList.add("adipositas1 ");
    td54.classList.add("adipositas1 ");
  } else if (result >= 29 && result <= 34 && age >= 60) {
    td50.classList.add("adipositas1 ");
    td55.classList.add("adipositas1 ");
  }

  if (result >= 35 && result <= 40 && age >= 20 && age <= 29) {
    td50.classList.add("adipositas2");
    td51.classList.add("adipositas2");
  } else if (result >= 36 && result <= 41 && age >= 30 && age <= 39) {
    td50.classList.add("adipositas2");
    td52.classList.add("adipositas2");
  } else if (result >= 37 && result <= 42 && age >= 40 && age <= 49) {
    td50.classList.add("adipositas2");
    td53.classList.add("adipositas2");
  } else if (result >= 38 && result <= 43 && age >= 50 && age <= 59) {
    td50.classList.add("adipositas2");
    td54.classList.add("adipositas2");
  } else if (result >= 39 && result <= 44 && age >= 60) {
    td50.classList.add("adipositas2");
    td55.classList.add("adipositas2");
  }

  if (result > 49 && age >= 20 && age <= 29) {
    td50.classList.add("adipositas3");
    td51.classList.add("adipositas3");
  } else if (result > 41 && age >= 30 && age <= 39) {
    td50.classList.add("adipositas3");
    td52.classList.add("adipositas3");
  } else if (result > 42 && age >= 40 && age <= 49) {
    td50.classList.add("adipositas3");
    td53.classList.add("adipositas3");
  } else if (result > 43 && age >= 50 && age <= 59) {
    td50.classList.add("adipositas3");
    td54.classList.add("adipositas3");
  } else if (result > 44 && age >= 60) {
    td50.classList.add("adipositas3");
    td55.classList.add("adipositas3");
  }
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
  const emailValide = document.querySelector(".emailValide");
  if (document.getElementById("email").value === "") {
    emailValide.textContent = "Eingabe ist Leer";
    emailValide.append(emailValide);
  } else if (valideEmail(document.getElementById("email").value)) {
    emailValide.textContent = "Email ist valide";
    emailValide.classList.add("valide");

    emailValide.append(emailValide);
  } else {
    emailValide.textContent = "Email ist nicht valide!";
    emailValide.classList.add("notValide");
    emailValide.append(emailValide);
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
}
