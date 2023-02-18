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
const spaceImage = document.querySelector('.spaceImage');

buttomPlay.addEventListener("click", buttomToPlay);
buttomValidate.addEventListener("click", buttomToValidate);
buttomClose.addEventListener("click", buttomClosePopUp);

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

function randomNumber() {
  return Math.floor(Math.random() * 12) + 1;
}

function buttomClosePopUp(){
  removeAnimateModalContainer()
  modal.classList.add("animate__animated"); 
  modal.classList.add("animate__backOutRight");
  setTimeout(function() {
    modalContainer.classList.add("inactive");
    modal.classList.remove("animate__animated"); 
  modal.classList.remove("animate__backOutRight");
  }, 1000);
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
    modalContainer.classList.remove("inactive");
    addAnimateModalContainer()
    modalText.innerText = "Felicitaciones";
    deleteChildArray();
    userlevel.push(1);
  } if(userSelectionChild.length!=0){
    modalContainer.classList.remove("inactive");
    addAnimateModalContainer()
    modalText.innerText = "!Hazlo mejor!";
    deleteChildArray();
  }
}
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

function createDummy() {
  if(userlevel[0]===1){
    const head = document.createElement("div");
    head.classList.add("head");
    spaceImage.appendChild(head);
  }
  if(userlevel[1]===1){
    const earsEarsRight = document.createElement("div");
    earsEarsRight.classList.add("ears");
    earsEarsRight.classList.add("earsRight");
    spaceImage.appendChild(earsEarsRight);
  }
  if(userlevel[2]===1){
    const earsEarsRight = document.createElement("div");
    earsEarsRight.classList.add("ears");
    earsEarsRight.classList.add("earsRight");
  }
}
const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        //product = {name, proce, image} -> product.image
        var imageCard = document.createElement("img");
        imageCard.setAttribute("src", product.image);
        /* imageCard.classList.add("product-card-img");
        imageCard.classList.add(product.name); */
        imageCard.addEventListener("click", openProductDetailAside);
        imageCard.addEventListener("click", insertProductDetailList(imageCard.getAttribute("src")));

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(imageCard);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);