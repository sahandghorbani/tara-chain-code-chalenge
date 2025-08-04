export type TokenData = {
  readonly id: string;
  readonly productId: string;
  readonly symbol: string;
  readonly name: string;
  readonly image: string;
  readonly current_price: number;
  readonly market_cap: number;
  readonly total_volume: number;
  readonly total_supply: number;
  readonly price_change_percentage_24h: number;
  readonly chartData: Array<number>;
};
