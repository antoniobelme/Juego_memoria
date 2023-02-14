const buttom = document.querySelector('.buttom');
const childUno = document.querySelector('.childUno');
const childDos = document.querySelector('.childDos');
const childTres = document.querySelector('.childTres');
const childCuatro = document.querySelector('.childCuatro');
const childCinco = document.querySelector('.childCinco');
const childSeis = document.querySelector('.childSeis');
const childSiete = document.querySelector('.childSiete');
const childOcho = document.querySelector('.childOcho');
const childNueve = document.querySelector('.childNueve');
const childDiez = document.querySelector('.childDiez');
const childOnce = document.querySelector('.childOnce');
const childDoce = document.querySelector('.childDoce');
const text_containerRight = document.querySelector('.text_containerRight');
const buttomValidate = document.querySelector('.buttomValidate');

buttom.addEventListener("click", buttomPlay);
buttomValidate.addEventListener("click", buttomToValidate);

//
const arrChild = [
  "childUno",
  "childDos",
  "childTres",
  "childCuatro",
  "childCinco",
  "childSeis",
  "childSiete",
  "childOcho",
  "childNueve",
  "childDiez",
  "childOnce",
  "childDoce"
]
const arrChildVars = [
  childUno,
  childDos,
  childTres,
  childCuatro,
  childCinco,
  childSeis,
  childSiete,
  childOcho,
  childNueve,
  childDiez,
  childOnce,
  childDoce
]
const notRepeatChild = [];
const notRepeatChildClass = [];
const userSelectionChild = [];
const userlevel = [];

function buttomPlay(){
  modifyChild();
  returnChild();
  setTimeout(function() {
    timeDoClickChild();
  }, 6.5 * 1000);
}
function buttomToValidate(){
  validateSelection();
  setTimeout(function() {
      cleanChild();
  }, 2 * 1000);
}
function randomNumber() {
  return Math.floor(Math.random() * 12) + 1;
}

function pushChild() {
  for (let i = 0; i <= 20; i++){
    const randomN = randomNumber();
    const childVar = document.querySelector("."+arrChild[randomN]);
    if (notRepeatChild.indexOf(childVar) === -1 && notRepeatChild.length < 5 && childVar != null) {
      notRepeatChild.push(childVar);
      notRepeatChildClass.push(arrChild[randomN]);
    }
  }
}

function modifyChild() {
  pushChild();
  let count = 0;
  const intervalId = setInterval(function() {
    if(notRepeatChild[count] != null){
      notRepeatChild[count].classList.remove("child");
      notRepeatChild[count].classList.add("childModify");
      count++;
    }
    if (count === notRepeatChild.length) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function returnChild() {
  setTimeout(function() {
    for (let i = 0; i < notRepeatChild.length; i++){
      notRepeatChild[i].classList.remove("childModify");
      notRepeatChild[i].classList.add("child");
    }
  }, 6 * 1000);
}

function timeDoClickChild() {
  childUno.addEventListener("click", function() {
    userSelection("childUno");
    childUno.classList.add("childModify");
    childUno.classList.remove("child");
  });
  
  childDos.addEventListener("click", function() {
    userSelection("childDos");
    childDos.classList.add("childModify");
    childDos.classList.remove("child");
  });
  
  childTres.addEventListener("click", function() {
    userSelection("childTres");
    childTres.classList.add("childModify");
    childTres.classList.remove("child");
  });
  
  childCuatro.addEventListener("click", function() {
    userSelection("childCuatro");
    childCuatro.classList.add("childModify");
    childCuatro.classList.remove("child");
  });
  
  childCinco.addEventListener("click", function() {
    userSelection("childCinco");
    childCinco.classList.add("childModify");
    childCinco.classList.remove("child");
  });
  
  childSeis.addEventListener("click", function() {
    userSelection("childSeis");
    childSeis.classList.add("childModify");
    childSeis.classList.remove("child");
  });
  
  childSiete.addEventListener("click", function() {
    userSelection("childSiete");
    childSiete.classList.add("childModify");
    childSiete.classList.remove("child");
  });
  
  childOcho.addEventListener("click", function() {
    userSelection("childOcho");
    childOcho.classList.add("childModify");
    childOcho.classList.remove("child");
  });
  
  childNueve.addEventListener("click", function() {
    userSelection("childNueve");
    childNueve.classList.add("childModify");
    childNueve.classList.remove("child");
  });
  
  childDiez.addEventListener("click", function() {
    userSelection("childDiez");
    childDiez.classList.add("childModify");
    childDiez.classList.remove("child");
  });
  
  childOnce.addEventListener("click", function() {
    userSelection("childOnce");
    childOnce.classList.add("childModify");
    childOnce.classList.remove("child");
  });
  
  childDoce.addEventListener("click", function() {
    userSelection("childDoce");
    childDoce.classList.add("childModify");
    childDoce.classList.remove("child");
  });
}

function userSelection(varChild) {
  if(!userSelectionChild.includes(varChild)){
    userSelectionChild.push(varChild);
  }
}

function validateSelection() {
  for(let i = 0; i <= notRepeatChild.length; i++){
    if(notRepeatChildClass[i]==userSelectionChild[i]){
      notRepeatChildClass.shift(i);
      userSelectionChild.shift(i);
    }
  }
  if(userSelectionChild.length==0){
    text_containerRight.innerText = "Felicitaciones";
    deleteChildArray();
    userlevel.push(1);
  } if(userSelectionChild.length!=0){
    text_containerRight.innerText = "Hazlo mejor!";
    deleteChildArray();
  }
}

function deleteChildArray() {
  notRepeatChild.length = 0;
  notRepeatChildClass.length = 0;
  userSelectionChild.length = 0;
}

function cleanChild() {
  for (let i = 0; i <= (arrChild.length-1); i++){
    const childVar = document.querySelector("."+arrChild[i]);
    if (childVar.classList.contains("childModify")) {
      arrChildVars[i].classList.remove("childModify");
      arrChildVars[i].classList.add("child");
    }
  }
  text_containerRight.innerText = " ";
  deleteChildArray();
}


