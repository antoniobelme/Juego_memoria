/* Declaración de variables Globales*/
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
const headOne = document.querySelector('#headOne');
const spaceImageTwo = document.querySelector('#spaceImageTwo');
const headTwo = document.querySelector('#headTwo');
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

/* Eventos de escucha Globales */
buttomPlay.addEventListener("click", buttomToPlay);
buttomValidate.addEventListener("click", buttomToValidate);
buttomClose.addEventListener("click", function() {
  if (buttomClose.textContent === 'Cerrar') {
      buttomClosePopUp();
  } else if (buttomClose.textContent === 'Siguiente Nivel') {
    deleteDummyFinalModal();
    buttomClose.innerText = 'Cerrar';
  }
});
/* Funciones */

/* Funciones de los botones */
function buttomToPlay(){
  buttomPlay.classList.add("animate__animated");
  buttomPlay.classList.add("animate__shakeY");
  modifyChild();
  returnChild();
  setTimeout(function() {
    buttomPlay.classList.remove("animate__animated");
    buttomPlay.classList.remove("animate__shakeY");
    timeDoClickChild();
  }, 6.5 * 1000);
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
    if(winLevel[0]===1){
      setTimeout(function() {
        modifyModal();
      }, 2000);
    }
  }
}

/* Funciones child aleatoreos */
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
          createDummyMediaQuery450();
        }
        deleteChildArray();
      } 
      if(userSelectionChild.length != 0){
        modalContainer.classList.remove("inactive");
        addAnimateModalContainer()
        modalText.innerText = "¡Hazlo mejor!";
        deleteChildArray();
      } 
    } else {
      modalContainer.classList.remove("inactive");
      addAnimateModalContainer()
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
  if(winLevel[0]===1){
    headOne.classList.add("head");
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

    setTimeout(function() {
      modifyModal();
    }, 2000);
    winLevel.length = 0;
    setTimeout(function() {
      deleteDummy();
    }, 2000);
  }
}

function deleteDummy() {
    if(window.innerWidth >= 451 && headOne.classList.contains("head")){
      headOne.innerHTML = '';
      spaceImageOne.classList.remove("spaceImage");
      headOne.classList.remove("head");
    }
    if(window.innerWidth <= 450 && headTwo.classList.contains("head")){
      headTwo.innerHTML = '';
      spaceImageTwo.classList.remove("spaceImage");
      headTwo.classList.remove("head");
      headTwo.classList.remove("modifyImage");
      modalContainer.classList.add("inactive");
      modal.classList.remove("modifyModal");
    }
}

function modifyModal(){
  modalContainer.classList.remove("inactive");
  modal.classList.add("modifyModal");
  modalText.innerText = "Descubriste a Polo, haz logrado este nivel.";
  modalText.classList.add("modifyText");
  createDummyFinalModal();
  buttomClose.innerText = 'Siguiente Nivel';
}

function createDummyMediaQuery450(){
    if(winLevel[0] === 1){
      modalContainer.classList.remove("inactive");
      modal.classList.add("modifyModal");

      spaceImageTwo.classList.add("spaceImage");
      headTwo.classList.add("head");
      headTwo.classList.add("modifyImage");
      
      const earsRight = document.createElement("div");
      earsRight.classList.add("ears");
      earsRight.classList.add("earsRight");
  
      const earsLeft = document.createElement("div");
      earsLeft.classList.add("ears");
      earsLeft.classList.add("earsLeft");
  
      const neck = document.createElement("div");
      neck.classList.add("neck");
  
      headTwo.appendChild(earsRight);
      headTwo.appendChild(earsLeft);
      headTwo.appendChild(neck);
  
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
      eyePupilTwo.classList.add("eyePupiltwo");
  
      eyeLeft.appendChild(eyePupil);
      eyeRight.appendChild(eyePupilTwo);
  
      const front = document.createElement("div");
      front.classList.add("front");
  
      headTwo.appendChild(eyeLeft);
      headTwo.appendChild(eyeRight);
      headTwo.appendChild(front);
      const bottom = document.createElement("div");
      bottom.classList.add("bottom");
  
      const nose = document.createElement("div");
      nose.classList.add("nose");
  
      const mouth = document.createElement("div");
      mouth.classList.add("mouth");
  
      const teeth = document.createElement("div");
      teeth.classList.add("teeth");
  
      const tongue = document.createElement("div");
      tongue.classList.add("tongue");
  
      mouth.appendChild(teeth);
      mouth.appendChild(tongue);
  
      headTwo.appendChild(bottom);
      headTwo.appendChild(nose);
      headTwo.appendChild(mouth);
      /* winLevel.length = 0; */
    }
}

function createDummyFinalModal(){
      headTree.classList.add("head");
      headTree.classList.add("modifyImage");
      
      const earsRight = document.createElement("div");
      earsRight.classList.add("ears");
      earsRight.classList.add("earsRight");
  
      const earsLeft = document.createElement("div");
      earsLeft.classList.add("ears");
      earsLeft.classList.add("earsLeft");
  
      const neck = document.createElement("div");
      neck.classList.add("neck");
  
      headTree.appendChild(earsRight);
      headTree.appendChild(earsLeft);
      headTree.appendChild(neck);
  
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
      eyePupilTwo.classList.add("eyePupiltwo");
  
      eyeLeft.appendChild(eyePupil);
      eyeRight.appendChild(eyePupilTwo);
  
      const front = document.createElement("div");
      front.classList.add("front");
  
      headTree.appendChild(eyeLeft);
      headTree.appendChild(eyeRight);
      headTree.appendChild(front);

      const bottom = document.createElement("div");
      bottom.classList.add("bottom");
  
      const nose = document.createElement("div");
      nose.classList.add("nose");
  
      const mouth = document.createElement("div");
      mouth.classList.add("mouth");
  
      const teeth = document.createElement("div");
      teeth.classList.add("teeth");
  
      const tongue = document.createElement("div");
      tongue.classList.add("tongue");
  
      mouth.appendChild(teeth);
      mouth.appendChild(tongue);
  
      headTree.appendChild(bottom);
      headTree.appendChild(nose);
      headTree.appendChild(mouth);
}

function deleteDummyFinalModal(){
  headTree.innerHTML = '';
  headTree.classList.remove("head");
  headTree.classList.remove("modifyImage");
  modalContainer.classList.add("inactive");
  modal.classList.remove("modifyModal");
  winLevel.length = 0; /* Esto elimina el valor en la posición 0, indica que el nivel fue superado, la idea sería sustituir este indicador por otro valor en vez de eliminarlo. para así poder gestionar los niveles. */
}

/* Falta seccionar la creación del dummy para el primer nivel en mobile, y falta crear los demas niveles. */

/* function createDummy() {
  if(winLevel[0]===1){
    spaceImageOne.classList.add("spaceImage");
    headOne.classList.add("head");
    const earsRight = document.createElement("div");
    earsRight.classList.add("ears");
    earsRight.classList.add("earsRight");

    const earsLeft = document.createElement("div");
    earsLeft.classList.add("ears");
    earsLeft.classList.add("earsLeft");

    const neck = document.createElement("div");
    neck.classList.add("neck");

    headOne.appendChild(earsRight);
    headOne.appendChild(earsLeft);
    headOne.appendChild(neck);

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
    eyePupilTwo.classList.add("eyePupiltwo");

    eyeLeft.appendChild(eyePupil);
    eyeRight.appendChild(eyePupilTwo);

    const front = document.createElement("div");
    front.classList.add("front");

    headOne.appendChild(eyeLeft);
    headOne.appendChild(eyeRight);
    headOne.appendChild(front);
    const bottom = document.createElement("div");
    bottom.classList.add("bottom");

    const nose = document.createElement("div");
    nose.classList.add("nose");

    const mouth = document.createElement("div");
    mouth.classList.add("mouth");

    const teeth = document.createElement("div");
    teeth.classList.add("teeth");

    const tongue = document.createElement("div");
    tongue.classList.add("tongue");

    mouth.appendChild(teeth);
    mouth.appendChild(tongue);

    headOne.appendChild(bottom);
    headOne.appendChild(nose);
    headOne.appendChild(mouth);
    setTimeout(function() {
      modifyModal();
    }, 2000);
    winLevel.length = 0;
    setTimeout(function() {
      deleteDummy();
    }, 2000);
  }
} */