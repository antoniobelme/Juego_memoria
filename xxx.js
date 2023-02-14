/* function pushChild() {
  for (let i = 0; i <= 20; i++){
    const randomN = randomNumber();
    const childVar = document.querySelector("."+arrChild[randomN]);
    if (notRepeatChild.indexOf(childVar) === -1 && notRepeatChild.length < 5 && childVar != null) {
      randomNumberArry.push(randomN);
      notRepeatChild.push(childVar);
      notRepeatChildClass.push(arrChild[randomN]);
    }
  }
} */

function reAssignButtonClick() {
    buttom.addEventListener("click", function() {
      const buttonText = buttom.textContent;
      if(buttonText == "A Jugar"){
        console.log("inicio de juego")
        modifyChild();
        returnChild();
        setTimeout(function() {
          timeDoClickChild();
        }, 6.5 * 1000);
      }if(buttonText == "Valida"){
        console.log("validación de juego")
        validateSelection();
        setTimeout(function() {
          cleanChild()
          reAssignButtonClick();
        }, 2 * 1000);
      } 
    });
  }
  

  //
  function userSelection(childName) {
    if (!userSelectionChild.includes(childName)) {
      userSelectionChild.push(childName);
    }
  }
  