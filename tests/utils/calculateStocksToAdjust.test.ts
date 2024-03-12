import { describe, it, expect } from 'vitest';
import { calculateStocksToAdjust } from '../../src/utils/calculateStocksToAdjust';

describe('calculateStocksToAdjust', () => {
  it('calculates the number of stocks to buy to reach the desired average price', () => {
    expect(calculateStocksToAdjust(100, 50, 120, 110)).toBeCloseTo(150);
  });

  it('calculates the number of stocks to sell to reach the desired average price for a short position', () => {
    expect(calculateStocksToAdjust(120, 50, 100, 110)).toBeCloseTo(-250);
  });

  // Add more tests to cover edge cases, such as no change needed, division by zero scenarios, etc.
});
