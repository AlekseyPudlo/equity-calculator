/**
 * @param positionType The type of stock position, either 'long' or 'short'.s
 * @param priceInitial The price at which the initial stock quantity was bought.
 * @param stockNumberInitial The initial quantity of stocks bought.
 * @param priceNew The price at which the new stocks are to be bought or sold.
 * @param priceAverage The desired average price of the total stock position after adjustment.
 * @returns The quantity of stocks to buy (positive number) or sell (negative number) to achieve the desired average price.
 * @throws {Error} If the new price (`P_n`) and the desired average price (`P_a`) are the same, indicating an invalid operation.
 * 
 * Calculates the number of stocks to buy or sell to adjust the average price of a position to a desired value.
 * 
 * This function takes into account both long and short positions, allowing users to determine the necessary adjustments to reach a specific average price. It's designed for scenarios where an investor wants to modify their position average without manually calculating the required quantity change. This calculation is particularly useful for strategic decision-making in portfolio management, such as reducing the average cost of holdings or adjusting the average sell price for profit maximization.
 *
 * The function implements a formula derived from the basic principle of weighted averages, where the goal is to find the quantity (`Q_n`) that, when bought or sold at a new price (`P_n`), will adjust the overall average price to a desired level (`P_a`). 
 *
 * The formula used is: `Q_n = ((P_a * Q_b) - (P_b * Q_b)) / (P_n - P_a)`, where:
 * - `P_b` is the initial stock price bought.
 * - `Q_b` is the number of stocks initially bought.
 * - `P_n` is the new stock price to buy or sell at.
 * - `P_a` is the desired average price after buying or selling `Q_n` stocks.
 *
 * Note: The function throws an error if `P_n` is equal to `P_a` to prevent division by zero, which logically represents a scenario with no meaningful action needed since the new price equals the desired average price.
 */
export function calculateStocksToAdjust(
  positionType: 'long' | 'short',
  priceInitial: number,
  stockNumberInitial: number,
  priceNew: number,
  priceAverage: number,
  ): number {
    if (priceNew === priceAverage) {
      throw new Error("New price and desired average price cannot be the same.");
    }
    if (positionType !== 'long' && positionType !== 'short') {
      throw new Error("Invalid position type. Must be 'long' or 'short'.");
    }
    // Check conditions where no calculation is needed based on position type and price comparison
    if ((positionType === 'long' && priceNew < priceInitial) || (positionType === 'short' && priceNew > priceInitial)) {
      throw new Error("New price not favorable for adjustment based on position type.");
    }


    const stockNumberNew: number = (() => {
      const numerator = (priceAverage - priceInitial) * stockNumberInitial;
      const denominator = priceNew - priceAverage;
    
      // Ensure we do not divide by zero; this check is implicitly covered by previous conditions
      return numerator / denominator;
    })();
  
    // Round to nearest whole number to ensure stock quantity is an integer
    return Math.floor(stockNumberNew);
}
