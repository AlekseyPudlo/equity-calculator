/**
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
 * 
 * @param pb The price at which the initial stock quantity was bought.
 * @param qb The initial quantity of stocks bought.
 * @param pn The price at which the new stocks are to be bought or sold.
 * @param pa The desired average price of the total stock position after adjustment.
 * @returns The quantity of stocks to buy (positive number) or sell (negative number) to achieve the desired average price.
 * @throws {Error} If the new price (`P_n`) and the desired average price (`P_a`) are the same, indicating an invalid operation.
 */
export function calculateStocksToAdjust(pb: number, qb: number, pn: number, pa: number): number {
  // Validate inputs to avoid division by zero or other invalid operations
  if (pn === pa) throw new Error("New price and desired average price cannot be the same.");

  const qn = ((pa * qb) - (pb * qb)) / (pn - pa);
  
  return qn;
}
