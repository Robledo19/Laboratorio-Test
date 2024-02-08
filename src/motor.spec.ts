import { getCardPoints, sumPoints, setScore, reviewGame, hasWon } from './motor';

describe('motor', () => {
  
  describe('getCardPoints', () => {
    it('debería devolver 0.5 para cartas mayores a 7', () => {
      // Act
      const pointsForEight = getCardPoints(8);
      const pointsForNine = getCardPoints(9);
      
      // Assert
      expect(pointsForEight).toBe(0.5);
      expect(pointsForNine).toBe(0.5);
    });

    it('debería devolver el valor de la carta para cartas de 7 o menos', () => {
      // Act
      const pointsForOne = getCardPoints(1);
      const pointsForSeven = getCardPoints(7);
      
      // Assert
      expect(pointsForOne).toBe(1);
      expect(pointsForSeven).toBe(7);
    });
  });

  describe('sumPoints', () => {
    it('debería sumar correctamente los puntos al score actual', () => {
      // Arrange
      setScore(3);
      
      // Act
      const newScore = sumPoints(2);
      
      // Assert
      expect(newScore).toBe(5);
    });
  });

  describe('reviewGame', () => {
    it('debería devolver "WIN" si la puntuación es exactamente 7.5', () => {
      // Arrange
      setScore(7.5);
      
      // Act
      const result = reviewGame();
      
      // Assert
      expect(result).toBe('WIN');
    });

    it('debería devolver "LOSE" si la puntuación es mayor a 7.5', () => {
      // Arrange
      setScore(8);
      
      // Act
      const result = reviewGame();
      
      // Assert
      expect(result).toBe('LOSE');
    });

    it('debería devolver "CONTINUE" si la puntuación es menor a 7.5', () => {
      // Arrange
      setScore(7);
      
      // Act
      const result = reviewGame();
      
      // Assert
      expect(result).toBe('CONTINUE');
    });
  });

  describe('hasWon', () => {
    it('debería devolver true si la puntuación es 7.5', () => {
      // Act & Assert
      expect(hasWon(7.5)).toBe(true);
    });

    it('debería devolver false si la puntuación no es 7.5', () => {
      // Act & Assert
      expect(hasWon(7)).toBe(false);
      expect(hasWon(8)).toBe(false);
    });
  });

});
