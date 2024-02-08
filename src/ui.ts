import { 
    textScoreElement, 
    textOverElement, 
    buttonCardElement, 
    buttonStopElement, 
    buttonGameOverElement, 
    buttonClueElement, 
    cardElement,
    cardUrls,
    allCards,
 } from './modelo';

import{
    numberOfGame,
    getCardPoints,
    sumPoints,
    setScore,
    reviewGame,
    getCartNumber,
    getRandomNumber
 } from './motor'

export const printUrlCard = (card: number) => {
    const cardElement = document.getElementById("card");
  
    if (
      cardElement !== null &&
      cardElement !== undefined &&
      cardElement instanceof HTMLImageElement
    ) {
      cardElement.src = cardUrls[card];
    }
  };

  export const printScore = (score: number) => {
    if (textScoreElement !== null && textScoreElement !== undefined && textScoreElement instanceof HTMLSpanElement) {
      textScoreElement.textContent = score.toString();
    }
  };

  export const winGame = () => {
    if (
      textOverElement !== null && textOverElement !== undefined && textOverElement instanceof HTMLSpanElement &&
      buttonCardElement !== null && buttonCardElement !== undefined && buttonCardElement instanceof HTMLButtonElement &&
      buttonStopElement !== null && buttonStopElement !== undefined && buttonStopElement instanceof HTMLButtonElement &&
      buttonGameOverElement !== null && buttonGameOverElement !== undefined && buttonGameOverElement instanceof HTMLButtonElement
    ) {
      textOverElement.textContent = "¡Lo has clavado! ¡Enhorabuena!";
      buttonCardElement.disabled = true;
      buttonStopElement.disabled = true;
      buttonGameOverElement.disabled = false;
    }
  };

  export const lostGame = () => {
    if (
      textOverElement !== null && textOverElement !== undefined && textOverElement instanceof HTMLSpanElement &&
      buttonGameOverElement !== null && buttonGameOverElement !== undefined && buttonGameOverElement instanceof HTMLButtonElement &&
      buttonStopElement !== null && buttonStopElement !== undefined && buttonStopElement instanceof HTMLButtonElement &&
      buttonCardElement !== null && buttonCardElement !== undefined && buttonCardElement instanceof HTMLButtonElement
    ) {
      textOverElement.textContent = "Te has pasado";
      buttonGameOverElement.disabled = false;
      buttonStopElement.disabled = true;
      buttonCardElement.disabled = true;
    }
  };

  export  const updateUIAfterReview = () => {
    const gameResult = reviewGame();
    if (gameResult === 'WIN') {
      winGame()
    } else if (gameResult === 'LOSE') {
      lostGame()
    } 
  };

  export const checkScore = (): void => {
    if (textScoreElement !== null && textScoreElement !== undefined && textScoreElement instanceof HTMLSpanElement) {
      textScoreElement.textContent = '0';
    }
    checkButton();
  };
  

  export const resertClueFuntion = () =>{
    if (buttonClueElement !== null && buttonClueElement !== undefined && buttonClueElement instanceof HTMLButtonElement) {
      buttonClueElement.disabled = false; 
    }
  }

export const restartGame = (): void => {
  if (cardElement instanceof HTMLImageElement && cardElement !== undefined && cardElement !== null && 
    textOverElement instanceof HTMLSpanElement && textOverElement !== undefined && textOverElement !== null &&
    textScoreElement instanceof HTMLSpanElement && textScoreElement !== undefined && textScoreElement !== null) {
    cardElement.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    textOverElement.textContent = "";
    textScoreElement.textContent = numberOfGame.score.toString();
  }
};

export const activeButtonStop = () => {
  if (buttonStopElement instanceof HTMLButtonElement && buttonStopElement !== undefined && buttonStopElement !== null) {
    buttonStopElement.disabled = false;
  }
};
export const restartButton = (): void => {
  if (
    buttonCardElement !== null && buttonCardElement !== undefined && buttonCardElement instanceof HTMLButtonElement &&
    buttonStopElement !== null && buttonStopElement !== undefined && buttonStopElement instanceof HTMLButtonElement &&
    buttonGameOverElement !== null && buttonGameOverElement !== undefined && buttonGameOverElement instanceof HTMLButtonElement &&
    buttonClueElement !== null && buttonClueElement !== undefined && buttonClueElement instanceof HTMLButtonElement
  ) {
    buttonCardElement.disabled = false;
    buttonStopElement.disabled = true;
    buttonGameOverElement.disabled = true;
    buttonClueElement.classList.add("hide");
  }
};

export const checkButton = () => {
  if (buttonCardElement instanceof HTMLButtonElement && buttonCardElement.disabled && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonCardElement.classList.add("button-disabled");
  } else if(buttonCardElement instanceof HTMLButtonElement && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonCardElement.classList.remove("button-disabled");
  }

  if (buttonStopElement instanceof HTMLButtonElement && buttonStopElement.disabled && buttonStopElement !== undefined && buttonStopElement !== null) {
    buttonStopElement.classList.add("button-disabled");
  } else if(buttonStopElement instanceof HTMLButtonElement && buttonStopElement !== undefined && buttonStopElement !== null){
    buttonStopElement.classList.remove("button-disabled");
  }

  if (buttonClueElement instanceof HTMLButtonElement && buttonClueElement.disabled && buttonClueElement !== undefined && buttonClueElement !== null) {
    buttonClueElement.classList.add("button-disabled");
  } else if(buttonClueElement instanceof HTMLButtonElement && buttonClueElement !== undefined && buttonClueElement !== null){
    buttonClueElement.classList.remove("button-disabled");
  }

  if (buttonGameOverElement instanceof HTMLButtonElement && buttonGameOverElement.disabled && buttonCardElement !== undefined && buttonCardElement !== null) {
    buttonGameOverElement.classList.add("button-disabled");
  } else if(buttonGameOverElement instanceof HTMLButtonElement && buttonCardElement !== undefined && buttonCardElement !== null){
    buttonGameOverElement.classList.remove("button-disabled");
  }
};

const printTextStopGame = ():string =>{
  if (numberOfGame.score < 4) {
    return "Has sido muy conservador";
  } else if (numberOfGame.score <= 5) {
    return "Te ha entrado el canguelo eh?";
  } else if (numberOfGame.score <= 7) {
    return "Casi casi...";
  } else if (numberOfGame.score === 7.5) {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  }
  return "";
}


export const stopGameFuntion = (): void => {
  if (buttonCardElement !== null && buttonCardElement !== undefined && buttonCardElement instanceof HTMLButtonElement &&
    buttonStopElement !== null && buttonStopElement !== undefined && buttonStopElement instanceof HTMLButtonElement &&
    buttonGameOverElement !== null && buttonGameOverElement !== undefined && buttonGameOverElement instanceof HTMLButtonElement) 
    {
    buttonCardElement.disabled = true;
    buttonStopElement.disabled = true;
    buttonGameOverElement.disabled = false;
  }
  if (buttonClueElement !== null && buttonClueElement !== undefined && buttonClueElement instanceof HTMLButtonElement) {
    buttonClueElement.classList.remove("hide");
  }
  const message = printTextStopGame()
  if (textOverElement instanceof HTMLSpanElement && textOverElement !== null && textOverElement !== undefined) {
    textOverElement.textContent = message; 
  }
  checkButton();
};

export const clueFuntion = (): void => {
  let nextRandomNumber = getRandomNumber();
  let cardNumber = getCartNumber(nextRandomNumber);
  if (textOverElement !== null && textOverElement !== undefined && textOverElement instanceof HTMLSpanElement) {
    const cardName = allCards[cardNumber.toString()];
    textOverElement.innerHTML = `La siguiente hubiera sido la carta: <br>${cardName}`;
  }

  if (buttonClueElement !== null && buttonClueElement !== undefined && buttonClueElement instanceof HTMLButtonElement) {
    buttonClueElement.disabled = true; 
  }
  checkButton()
};

export const newCard = (): void => {
  const randomNumber = getRandomNumber();
  const card = getCartNumber(randomNumber);
  printUrlCard(card);
  const points = getCardPoints(card);
  const pointsSum = sumPoints(points);
  setScore(pointsSum);
  printScore(numberOfGame.score);
  activeButtonStop();
  updateUIAfterReview();
  checkButton();
};

export const playAgain = (): void => {
  numberOfGame.score = 0;
  numberOfGame.randomNumber = 0;
  restartGame();
  resertClueFuntion();
  restartButton();
  checkButton();
};
