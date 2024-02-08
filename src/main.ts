import { 
    buttonCardElement, 
    buttonStopElement, 
    buttonGameOverElement, 
    buttonClueElement, 
 } from './modelo';


import{
    stopGameFuntion,
    clueFuntion,
    newCard,
    playAgain,
    checkScore
} from './ui'



window.addEventListener("DOMContentLoaded", checkScore);
if (
  buttonCardElement !== null &&
  buttonCardElement !== undefined &&
  buttonCardElement instanceof HTMLButtonElement
) {
  buttonCardElement.addEventListener("click", newCard);
}
if (
  buttonStopElement !== null &&
  buttonStopElement !== undefined &&
  buttonStopElement instanceof HTMLButtonElement
) {
  buttonStopElement.addEventListener("click", stopGameFuntion);
}
if (
  buttonGameOverElement !== null &&
  buttonGameOverElement !== undefined &&
  buttonGameOverElement instanceof HTMLButtonElement
) {
  buttonGameOverElement.addEventListener("click", playAgain);
}
if (
  buttonClueElement !== null &&
  buttonClueElement !== undefined &&
  buttonClueElement instanceof HTMLButtonElement
) {
  buttonClueElement.addEventListener("click", clueFuntion);
}
