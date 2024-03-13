import { describe, it, expect } from 'vitest';
import { calculateStocksToAdjust } from '../../src/utils/calculateStocksToAdjust';

describe('calculateStocksToAdjust', () => {
  it('calculates the number of stocks to buy to reach the desired average price', () => {
    expect(calculateStocksToAdjust(100, 50, 120, 110)).toBeCloseTo(150);
  });

  it('calculates the number of stocks to sell to reach the desired average price for a short position', () => {
    expect(calculateStocksToAdjust(120, 50, 100, 110)).toBeCloseTo(-250);
  });

  it('throws an error if the new price and the desired average price are the same', () => {
    expect(() => calculateStocksToAdjust(100, 50, 120, 120)).toThrowError("New price and desired average price cannot be the same.");
  });

  it('throws an error if the new price and the desired average price are the same for a short position', () => {
    expect(() => calculateStocksToAdjust(120, 50, 100, 100)).toThrowError("New price and desired average price cannot be the same.");
  });

  it('calculates the number of stocks to buy to reach the desired average price for a short position', () => {
    expect(calculateStocksToAdjust(120, 50, 100, 110)).toBeCloseTo(-250);
  });

  it('calculates the number of stocks to buy to reach the desired average price for a short position with a smaller number of stocks', () => {
    expect(calculateStocksToAdjust(120, 10, 100, 110)).toBeCloseTo(-50);
  });

  it('calculates the number of stocks to buy to reach the desired average price for a short position with a larger number of stocks', () => {
    expect(calculateStocksToAdjust(120, 100, 100, 110)).toBeCloseTo(-500);
  });

  it('calculates the number of stocks to buy to reach the desired average price with a larger number of stocks', () => {
    expect(calculateStocksToAdjust(100, 100, 120, 110)).toBeCloseTo(150);
  });

  it('calculates the number of stocks to buy to reach the desired average price with a larger number of stocks and a higher price', () => {
    expect(calculateStocksToAdjust(100, 100, 150, 110)).toBeCloseTo(1000);
  });
});
