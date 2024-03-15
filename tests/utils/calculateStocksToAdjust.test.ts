import { describe, it, expect } from 'vitest';
import { calculateStocksToAdjust } from '../../src/utils/calculateStocksToAdjust';

describe('calculateStocksToAdjust test suite', () => {
  describe('Long Position tests', () => {
    it('should calculate the correct quantity for a long position with price increase', () => {
      expect(calculateStocksToAdjust('long', 100, 50, 120, 110)).toBeCloseTo(50);
    });
  });

  describe('Short Position tests', () => {
    it('should calculate the correct quantity for a short position with price decrease', () => {
      expect(calculateStocksToAdjust('short', 100, 50, 80, 110)).toBeCloseTo(-17);
    });
  });

  describe('Error Handling tests', () => {
    it('should throw an error if the new price equals the desired average price', () => {
      expect(() => calculateStocksToAdjust('long', 100, 50, 100, 100)).toThrow("New price and desired average price cannot be the same.");
    });
  
    it('should throw an error for an invalid position type', () => {
      expect(() => calculateStocksToAdjust('invalid' as 'long' | 'short', 100, 50, 110, 105)).toThrow("Invalid position type. Must be 'long' or 'short'.");
    });
  
    it('should throw an error for an unfavorable adjustment for a long position', () => {
      expect(() => calculateStocksToAdjust('long', 100, 50, 90, 95)).toThrow("New price not favorable for adjustment based on position type.");
    });
  
    it('should throw an error for an unfavorable adjustment for a short position', () => {
      expect(() => calculateStocksToAdjust('short', 100, 50, 110, 105)).toThrow("New price not favorable for adjustment based on position type.");
    });
  });

  describe('Edge Cases', () => {
    it('should handle minimal stock quantity and price changes', () => {
      expect(calculateStocksToAdjust('long', 1, 1, 2, 1.5)).toBeCloseTo(1);
    });
  
    it('should handle maximal stock quantity and price changes', () => {
      expect(calculateStocksToAdjust('long', 100000, 100000, 120000, 110000)).toBeCloseTo(100000);
    });
  });
});
