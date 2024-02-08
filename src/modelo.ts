export const textScoreElement = document.getElementById("text-score");
export const textOverElement = document.getElementById("text-over");
export const buttonCardElement = document.getElementById("button-card");
export const buttonStopElement = document.getElementById("button-stop");
export const buttonGameOverElement = document.getElementById("button-game-over");
export const buttonClueElement = document.getElementById("button-clue");
export const cardElement = document.getElementById('card');

export const cardUrls: { [key: number]: string } = {
  1: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
  2: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
  3: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
  4: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
  5: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
  6: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
  7: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
  10: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
  11: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
  12: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
};

export const allCards: { [key: string]: string } = {
  "1": "<b>As de copas</b>",
  "2": "<b>Dos de copas</b>",
  "3": "<b>Tres de copas</b>",
  "4": "<b>Cuatro de copas</b>",
  "5": "<b>Cinco de copas</b>",
  "6": "<b>Seis de copas</b>",
  "7": "<b>Siete de copas</b>",
  "8": "<b>Ocho de copas</b>",
  "9": "<b>Nueve de copas</b>",
  "10": "<b>Sota de copas</b>",
  "11": "<b>Caballo de copas</b>",
  "12": "<b>Rey de copas</b>",
}