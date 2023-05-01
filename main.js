/* Declaración de variables Globales*/
const containerTextLevel = document.querySelector('#containerTextLevel');
const textLevel = document.querySelector('.textLevel');
const buttomPlay = document.querySelector('.buttomPlay');
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
const modalText = document.querySelector('.modalText');
const buttomValidate = document.querySelector('.buttomValidate');
const modalContainer = document.querySelector('.modalContainer');
const modal = document.querySelector('.modal');
const buttomClose = document.querySelector('.buttomClose');
const spaceImageOne = document.querySelector('#spaceImageOne');
const spaceImageTwo = document.querySelector('#spaceImageTwo');
const headTree = document.querySelector('#headTree');

/* Declaración de arrays Globales*/
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
const winLevel = [];
const userLevel = [];

/* Variables para modificar niveles */
/* let varTimeDoClickChild = funTimeDoClickChild(); */
/* let varModifyPushChild = funModifyPushChild(); */
/* let varTimeModifyChild = funTimeModifyChild(); */
/* let varTimeReturnChild = funTimeReturnChild(); */


/* Eventos de escucha Globales */
buttomPlay.addEventListener("click", buttomToPlay);
buttomValidate.addEventListener("click", buttomToValidate);
buttomClose.addEventListener("click", function() {
  if (buttomClose.textContent === 'Cerrar') {
      buttomClosePopUp();
  } else if (buttomClose.textContent === 'Siguiente Nivel') {
    userLevel.push(1);
    showLevel();
    deleteDummyFinalModal();
    buttomClose.classList.remove("buttomNextLevel");
    buttomClose.innerText = 'Cerrar';
  }
});
/* Funciones */

/* Funciones de los botones */
function buttomToPlay(){
  let varTimeDoClickChild = funTimeDoClickChild();
  buttomPlay.classList.add("animate__animated");
  buttomPlay.classList.add("animate__shakeY");
  modifyChild();
  returnChild();
  setTimeout(function() {
    buttomPlay.classList.remove("animate__animated");
    buttomPlay.classList.remove("animate__shakeY");
    timeDoClickChild();
  }, varTimeDoClickChild);
}

function buttomToValidate(){
  validateSelection();
  setTimeout(function() {
      cleanChild();
  }, 2 * 1000);
}

function buttomClosePopUp(){
  removeAnimateModalContainer()
  modal.classList.add("animate__animated"); 
  modal.classList.add("animate__backOutRight");
  setTimeout(function() {
    modalContainer.classList.add("inactive");
    modal.classList.remove("animate__animated"); 
    modal.classList.remove("animate__backOutRight");
    modal.classList.remove("modifyModal");
    modalText.classList.remove("modifyText");
  }, 1000);
  if (window.innerWidth >= 451){
    createDummy();
  }
  if (window.innerWidth <= 450){
    deleteDummy();
    if(winLevel[7]===1){
      setTimeout(function() {
        modifyModal();
      }, 2000);
    }
  }
}

/* Funciones de variables para niveles del juego */

function funTimeDoClickChild(){
  let varTimeDoClickChild=" ";
  if(userLevel.length == 0){
    varTimeDoClickChild = 6.5 * 1000;
  } if(userLevel[0] == 1){
    varTimeDoClickChild = 7.5 * 1000;
  } if(userLevel[1] == 1){
    varTimeDoClickChild = 7.1 * 1000;
  } if(userLevel[2] == 1){
    varTimeDoClickChild = 8.1 * 1000;
  } if(userLevel[3] == 1){
    varTimeDoClickChild = 7.6 * 1000;
  } if(userLevel[4] == 1){
    varTimeDoClickChild = 7.1 * 1000;
  } if(userLevel[5] == 1){
    varTimeDoClickChild = 7.1 * 1000;
  } if(userLevel[6] == 1){
    varTimeDoClickChild = 6.8 * 1000;
  } if(userLevel[7] == 1){
    varTimeDoClickChild = 7.7 * 1000;
  } if(userLevel[8] == 1){
    varTimeDoClickChild = 9.9 * 1000;
  }
  return varTimeDoClickChild;
}

function funModifyPushChild(){
  let varModifyPushChild = 0;
  if(userLevel.length == 0){
    varModifyPushChild = 3;
  } if(userLevel[0] == 1 || userLevel[1] == 1){
    varModifyPushChild = 4;
  } if(userLevel[2] == 1 || userLevel[3] == 1 || userLevel[4] == 1){
    varModifyPushChild = 5;
  }  if(userLevel[5] == 1 || userLevel[6] == 1){
    varModifyPushChild = 6;
  } if(userLevel[7] == 1){
    varModifyPushChild = 7;
  } if(userLevel[8] == 9){
    varModifyPushChild = 11;
  }
  return varModifyPushChild;
}

function funTimeModifyChild(){
  let varTimeModifyChild=0;
  if(userLevel.length == 0){
    varTimeModifyChild = 1.8 * 1000;
  } if(userLevel[0] == 1){
    varTimeModifyChild = 1.6 * 1000;
  } if(userLevel[1] == 1){
    varTimeModifyChild = 1.5 * 1000;
  } if(userLevel[2] == 1){
    varTimeModifyChild = 1.4 * 1000;
  } if(userLevel[3] == 1){
    varTimeModifyChild = 1.3 * 1000;
  } if(userLevel[4] == 1){
    varTimeModifyChild = 1.2 * 1000;
  } if(userLevel[5] == 1){
    varTimeModifyChild = 1 * 1000;
  } if(userLevel[6] == 1){
    varTimeModifyChild = 0.95 * 1000;
  } if(userLevel[7] == 1){
    varTimeModifyChild = 0.85 * 1000;
  } if(userLevel[8] == 1){
    varTimeModifyChild = 0.8 * 1000;
  } 
  return varTimeModifyChild;
}

function funTimeReturnChild(){
  let varTimeReturnChild=0;
  if(userLevel.length == 0){
    varTimeReturnChild = 6.4 * 1000;
  } if(userLevel[0] == 1){
    varTimeReturnChild = 7.4 * 1000;
  } if(userLevel[1] == 1){
    varTimeReturnChild = 7 * 1000;
  } if(userLevel[2] == 1){
    varTimeReturnChild = 8 * 1000;
  } if(userLevel[3] == 1){
    varTimeReturnChild = 7.5 * 1000;
  } if(userLevel[4] == 1){
    varTimeReturnChild = 7 * 1000;
  } if(userLevel[5] == 1){
    varTimeReturnChild = 7 * 1000;
  } if(userLevel[6] == 1){
    varTimeReturnChild = 6.7 * 1000;
  } if(userLevel[7] == 1){
    varTimeReturnChild = 7 * 1000;
  } if(userLevel[8] == 1){
    varTimeReturnChild = 9.8 * 1000;
  }
  return varTimeReturnChild;
}

/* Funciones child aleatoreos */
function randomNumber() {
  return Math.floor(Math.random() * 12) + 1;
}

function pushChild() {
  let varModifyPushChild = funModifyPushChild();
  for (let i = 0; i <= 20; i++){
    const randomN = randomNumber();
    const childVar = document.querySelector("."+arrChild[randomN]);
    if (notRepeatChild.indexOf(childVar) === -1 && notRepeatChild.length < varModifyPushChild && childVar != null) {
      notRepeatChild.push(childVar);
      notRepeatChildClass.push(arrChild[randomN]);
    }
  }
}

function modifyChild() {
  pushChild();
  let count = 0;
  let varTimeModifyChild = funTimeModifyChild();
  const intervalId = setInterval(function() {
    if(notRepeatChild[count] != null){
      notRepeatChild[count].classList.remove("child");
      notRepeatChild[count].classList.add("childModify");
      count++;
    }
    if (count === notRepeatChild.length) {
      clearInterval(intervalId);
    }
  }, varTimeModifyChild);
}

function returnChild() {
  let varTimeReturnChild = funTimeReturnChild();
  setTimeout(function() {
    for (let i = 0; i < notRepeatChild.length; i++){
      notRepeatChild[i].classList.remove("childModify");
      notRepeatChild[i].classList.add("child");
    }
  }, varTimeReturnChild);
}


/* Funciones elección child usuario */
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

/* Funciones de validación elección usuario */
function validateSelection() {
    if(userSelectionChild.length != 0){
      for(let i = 0; i <= notRepeatChild.length; i++){
        if(notRepeatChildClass[0]==userSelectionChild[0]){
          notRepeatChildClass.splice(0, 1);
          userSelectionChild.splice(0, 1);
        }
      }
      if(userSelectionChild.length == 0){
        winLevel.push(1);
        modalContainer.classList.remove("inactive");
        addAnimateModalContainer()
        modalText.innerText = "Felicitaciones";
        if(window.innerWidth <= 450){
          modal.classList.add("modifyModal");
          createDummyMediaQuery450();
        }
        deleteChildArray();
      } 
      if(userSelectionChild.length != 0){
        modalContainer.classList.remove("inactive");
        addAnimateModalContainer();
        modalText.innerText = "¡Hazlo mejor!";
        deleteChildArray();
      } 
    } else {
      modalContainer.classList.remove("inactive");
      addAnimateModalContainer();
      modalText.innerText = "Juega para validar";
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
  deleteChildArray();
}

/* Funciones animación CSS */
function addAnimateModalContainer() {
  modal.classList.add("animate__animated"); 
  modalText.classList.add("animate__animated"); 
  modal.classList.add("animate__bounceInLeft"); 
  setTimeout(function() {
    modalText.classList.add("animate__rubberBand");
  }, 1150);
  setTimeout(function() {
    buttomClose.classList.add("animate__animated"); 
    buttomClose.classList.add("animate__swing");
  }, 2000);
}

function removeAnimateModalContainer() {
  modal.classList.remove("animate__animated"); 
  modal.classList.remove("animate__bounceInLeft"); 
  modalText.classList.remove("animate__animated"); 
  modalText.classList.remove("animate__rubberBand");
  buttomClose.classList.remove("animate__animated"); 
  buttomClose.classList.remove("animate__swing");
}

/* Funciones de creación de dummys */
function createDummy() {
  if(userLevel.length === 0){
    if(winLevel[0]===1){
      spaceImageOne.classList.add("spaceImage");
      const imagen_one = document.createElement("img");
      imagen_one.classList.add("imageSvg");
      imagen_one.src = "./Image/img_nivel1/01.svg";
      imagen_one.alt = "imagen 1";
      spaceImageOne.appendChild(imagen_one);
  
    } if(winLevel[1]===1){
      const imagen_two = document.createElement("img");
      imagen_two.classList.add("imageSvg");
      imagen_two.src = "./Image/img_nivel1/02.svg";
      imagen_two.alt = "imagen 2";
      spaceImageOne.appendChild(imagen_two);
  
    } if(winLevel[2]===1){
      const imagen_three = document.createElement("img");
      imagen_three.classList.add("imageSvg");
      imagen_three.src = "./Image/img_nivel1/03.svg";
      imagen_three.alt = "imagen 3";
      spaceImageOne.appendChild(imagen_three);
  
    } if(winLevel[3]===1){
      const imagen_four = document.createElement("img");
      imagen_four.classList.add("imageSvg");
      imagen_four.src = "./Image/img_nivel1/04.svg";
      imagen_four.alt = "imagen 4";
      spaceImageOne.appendChild(imagen_four);
  
    } if(winLevel[4]===1){
      const imagen_five = document.createElement("img");
      imagen_five.classList.add("imageSvg");
      imagen_five.src = "./Image/img_nivel1/05.svg";
      imagen_five.alt = "imagen 5";
      spaceImageOne.appendChild(imagen_five);
  
    } if(winLevel[5]===1){
      const imagen_six = document.createElement("img");
      imagen_six.classList.add("imageSvg");
      imagen_six.src = "./Image/img_nivel1/06.svg";
      imagen_six.alt = "imagen 6";
      spaceImageOne.appendChild(imagen_six);
  
    } if(winLevel[6]===1){
      const imagen_seven = document.createElement("img");
      imagen_seven.classList.add("imageSvg");
      imagen_seven.src = "./Image/img_nivel1/08.svg";
      imagen_seven.alt = "imagen 8";
      spaceImageOne.appendChild(imagen_seven);
  
    } if(winLevel[7]===1){
      const imagen_nine = document.createElement("img");
      imagen_nine.classList.add("imageSvg");
      imagen_nine.src = "./Image/img_nivel1/09.svg";
      imagen_nine.alt = "imagen 9";
      spaceImageOne.appendChild(imagen_nine);
    }

  } 
  if(userLevel[0] === 1){
    if(winLevel[0]===1){
      spaceImageOne.classList.add("spaceImage");
      const imagen_one = document.createElement("img");
      imagen_one.classList.add("imageSvg");
      imagen_one.src = "./Image/img_nivel2/01.svg";
      imagen_one.alt = "imagen 1";
      spaceImageOne.appendChild(imagen_one);
  
    } if(winLevel[1]===1){
      const imagen_two = document.createElement("img");
      imagen_two.classList.add("imageSvg");
      imagen_two.src = "./Image/img_nivel2/02.svg";
      imagen_two.alt = "imagen 2";
      spaceImageOne.appendChild(imagen_two);
  
    } if(winLevel[2]===1){
      const imagen_three = document.createElement("img");
      imagen_three.classList.add("imageSvg");
      imagen_three.src = "./Image/img_nivel2/03.svg";
      imagen_three.alt = "imagen 3";
      spaceImageOne.appendChild(imagen_three);
  
    } if(winLevel[3]===1){
      const imagen_four = document.createElement("img");
      imagen_four.classList.add("imageSvg");
      imagen_four.src = "./Image/img_nivel2/04.svg";
      imagen_four.alt = "imagen 4";
      spaceImageOne.appendChild(imagen_four);
  
    } if(winLevel[4]===1){
      const imagen_five = document.createElement("img");
      imagen_five.classList.add("imageSvg");
      imagen_five.src = "./Image/img_nivel2/05.svg";
      imagen_five.alt = "imagen 5";
      spaceImageOne.appendChild(imagen_five);
  
    } if(winLevel[5]===1){
      const imagen_six = document.createElement("img");
      imagen_six.classList.add("imageSvg");
      imagen_six.src = "./Image/img_nivel2/06.svg";
      imagen_six.alt = "imagen 6";
      spaceImageOne.appendChild(imagen_six);
  
    } if(winLevel[6]===1){
      const imagen_seven = document.createElement("img");
      imagen_seven.classList.add("imageSvg");
      imagen_seven.src = "./Image/img_nivel2/07.svg";
      imagen_seven.alt = "imagen 8";
      spaceImageOne.appendChild(imagen_seven);
  
    } if(winLevel[7]===1){
      const imagen_nine = document.createElement("img");
      imagen_nine.classList.add("imageSvg");
      imagen_nine.src = "./Image/img_nivel2/08.svg";
      imagen_nine.alt = "imagen 9";
      spaceImageOne.appendChild(imagen_nine);
    }
  } if(userLevel[1] === 1){ 

  } if(userLevel[2] === 1){

  } if(userLevel[3] === 1){

  } if(userLevel[4] === 1){
  
  } if(userLevel[5] === 1){

  } if(userLevel[6] === 1){

  } if(userLevel[7] === 1){
  }
  callModifyModal_DeleteDummy();
}

function callModifyModal_DeleteDummy() {
  if(winLevel[7]===1){
    setTimeout(function() {
      modifyModal();
    }, 2500);
    winLevel.length = 0;
    setTimeout(function() {
      deleteDummy();
    }, 3500);
  }
}

function deleteDummy() {
    if(window.innerWidth >= 451 && spaceImageOne.classList.contains("spaceImage")){
      spaceImageOne.innerHTML = '';
      spaceImageOne.classList.remove("spaceImage");
    }
    if(window.innerWidth <= 450 && spaceImageTwo.classList.contains("spaceImage")){
      spaceImageTwo.innerHTML = '';
      spaceImageTwo.classList.remove("spaceImage");
      modalContainer.classList.add("inactive");
      modal.classList.remove("modifyModal");
    }
}

function modifyModal(){
  modalContainer.classList.remove("inactive");
  modal.classList.add("modifyModal");
  buttomClose.classList.add("buttomNextLevel");
  modalText.classList.add("modifyText");
  modalText.innerText = "Descubriste a Polo, haz logrado este nivel.";
  createDummyFinalModal();
  buttomClose.innerText = 'Siguiente Nivel';
}

function createDummyMediaQuery450(){
  if(winLevel[0]===1){
    spaceImageTwo.classList.add("spaceImage");
    const imagen_one = document.createElement("img");
    imagen_one.classList.add("imageSvg");
    imagen_one.src = "./Image/img_nivel1/01.svg";
    imagen_one.alt = "imagen 1";
    spaceImageTwo.appendChild(imagen_one);

  } if(winLevel[1]===1){
    const imagen_two = document.createElement("img");
    imagen_two.classList.add("imageSvg");
    imagen_two.src = "./Image/img_nivel1/02.svg";
    imagen_two.alt = "imagen 2";
    spaceImageTwo.appendChild(imagen_two);

  } if(winLevel[2]===1){
    const imagen_three = document.createElement("img");
    imagen_three.classList.add("imageSvg");
    imagen_three.src = "./Image/img_nivel1/03.svg";
    imagen_three.alt = "imagen 3";
    spaceImageTwo.appendChild(imagen_three);

  } if(winLevel[3]===1){
    const imagen_four = document.createElement("img");
    imagen_four.classList.add("imageSvg");
    imagen_four.src = "./Image/img_nivel1/04.svg";
    imagen_four.alt = "imagen 4";
    spaceImageTwo.appendChild(imagen_four);

  } if(winLevel[4]===1){
    const imagen_five = document.createElement("img");
    imagen_five.classList.add("imageSvg");
    imagen_five.src = "./Image/img_nivel1/05.svg";
    imagen_five.alt = "imagen 5";
    spaceImageTwo.appendChild(imagen_five);

  } if(winLevel[5]===1){
    const imagen_six = document.createElement("img");
    imagen_six.classList.add("imageSvg");
    imagen_six.src = "./Image/img_nivel1/06.svg";
    imagen_six.alt = "imagen 6";
    spaceImageTwo.appendChild(imagen_six);

  } if(winLevel[6]===1){
    const imagen_seven = document.createElement("img");
    imagen_seven.classList.add("imageSvg");
    imagen_seven.src = "./Image/img_nivel1/08.svg";
    imagen_seven.alt = "imagen 8";
    spaceImageTwo.appendChild(imagen_seven);

  } if(winLevel[7]===1){
    const imagen_nine = document.createElement("img");
    imagen_nine.classList.add("imageSvg");
    imagen_nine.src = "./Image/img_nivel1/09.svg";
    imagen_nine.alt = "imagen 9";
    spaceImageTwo.appendChild(imagen_nine);
  }
}

function createDummyFinalModal(){
      headTree.classList.add("spaceImage");
      const imagen_nine = document.createElement("img");
      imagen_nine.classList.add("imageSvg");
      imagen_nine.src = "./Image/img_nivel1/09.svg";
      imagen_nine.alt = "imagen 9";
      headTree.appendChild(imagen_nine);
}

function deleteDummyFinalModal(){
  headTree.innerHTML = '';
  modalContainer.classList.add("inactive");
  modal.classList.remove("modifyModal");
  winLevel.length = 0; /* Esto elimina el valor en la posición 0, indica que el nivel fue superado, la idea sería sustituir este indicador por otro valor en vez de eliminarlo. para así poder gestionar los niveles. */
}

function showLevel(){
  /* containerTextLevel.classList.add("containerTextLevel");
  const textLevel = document.createElement("h1");
  textLevel.classList.add("textLevel"); */
  /* if(winLevel.length === 0){
    textLevel.innerText = 'Nivel 1';
  } */
  if(userLevel[0] === 1){
    textLevel.innerText = 'Nivel 2';

  } if(userLevel[1] === 1){ 
    textLevel.innerText = 'Nivel 3';

  } if(userLevel[2] === 1){
    textLevel.innerText = 'Nivel 4';

  } if(userLevel[3] === 1){
    textLevel.innerText = 'Nivel 5';

  } if(userLevel[4] === 1){
    textLevel.innerText = 'Nivel 6';
  
  } if(userLevel[5] === 1){
    textLevel.innerText = 'Nivel 7';

  } if(userLevel[6] === 1){
    textLevel.innerText = 'Nivel 8';

  } if(userLevel[7] === 1){
    textLevel.innerText = 'Nivel 9';
  }
}

/* Falta seccionar la creación del dummy para el primer nivel en mobile, y falta crear los demas niveles. */

/* function createDummy() {
  if(winLevel[0]===1){
    spaceImageOne.classList.add("spaceImage");
    const imagen_nine = document.createElement("img");
    imagen_nine.classList.add("imageSvg");
    imagen_nine.src = "./img_svg/09.svg";
    imagen_nine.alt = "imagen 9";      
    spaceImageOne.appendChild(imagen_nine);
  }
  callModifyModal_DeleteDummy();
} */

/* function createDummy() {
  if(winLevel[0]===1){
    spaceImageOne.classList.add("spaceImage");
  } if(winLevel[1]===1){
    const earsRight = document.createElement("div");
    earsRight.classList.add("ears");
    earsRight.classList.add("earsRight");

    const earsLeft = document.createElement("div");
    earsLeft.classList.add("ears");
    earsLeft.classList.add("earsLeft");

    headOne.appendChild(earsRight);
    headOne.appendChild(earsLeft);

  } if(winLevel[2]===1){
    const neck = document.createElement("div");
    neck.classList.add("neck");
    headOne.appendChild(neck);

  } if(winLevel[3]===1){
    const eyeLeft = document.createElement("div");
    eyeLeft.classList.add("eye");
    eyeLeft.classList.add("eye-left");

    const eyeRight = document.createElement("div");
    eyeRight.classList.add("eye");
    eyeRight.classList.add("eye-right");

    const eyePupil = document.createElement("div");
    eyePupil.classList.add("eyePupil");
    const eyePupilTwo = document.createElement("div");
    eyePupilTwo.classList.add("eyePupil");

    eyeLeft.appendChild(eyePupil);
    eyeRight.appendChild(eyePupilTwo);
    headOne.appendChild(eyeLeft);
    headOne.appendChild(eyeRight);

  } if(winLevel[4]===1){
    const front = document.createElement("div");
    front.classList.add("front");
    headOne.appendChild(front);

  } if(winLevel[5]===1){
    const bottom = document.createElement("div");
    bottom.classList.add("bottom");
    headOne.appendChild(bottom);

  } if(winLevel[6]===1){
    const nose = document.createElement("div");
    nose.classList.add("nose");
    headOne.appendChild(nose);

  } if(winLevel[7]===1){
    const mouth = document.createElement("div");
    mouth.classList.add("mouth");

    const teeth = document.createElement("div");
    teeth.classList.add("teeth");

    const tongue = document.createElement("div");
    tongue.classList.add("tongue");

    mouth.appendChild(teeth);
    mouth.appendChild(tongue);
    headOne.appendChild(mouth);
  }
  callModifyModal_DeleteDummy();
} */