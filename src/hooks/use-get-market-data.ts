import { TokenData } from "@/types/token-data";
import { useQuery } from "@tanstack/react-query";

const idMap: { [key: string]: string } = {
  bitcoin: "BTC-USD",
  ethereum: "ETH-USD",
  tether: "USDT-USD",
  binancecoin: "BNB-USD",
  solana: "SOL-USD",
  cardano: "ADA-USD",
  ripple: "XRP-USD",
  dogecoin: "DOGE-USD",
  "avalanche-2": "AVAX-USD",
  polkadot: "DOT-USD",
};

async function getMarketData(): Promise<TokenData[]> {
  const coinGeckoIds = Object.keys(idMap).join(",");

  const marketResponse = await fetch(
    `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/markets?vs_currency=usd&ids=${coinGeckoIds}`
  );
  if (!marketResponse.ok) {
    throw new Error("Network response was not ok");
  }
  const marketData: Omit<TokenData, "productId" | "chartData">[] =
    await marketResponse.json();

  // Fetch chart data for each coin
  const chartDataPromises = marketData.map((token) =>
    fetch(
      `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/${token.id}/market_chart?vs_currency=usd&days=7`
    )
      .then((res) => (res.ok ? res.json() : Promise.resolve({ prices: [] })))
      .then((data) => data.prices.map((p: [number, number]) => p[1]))
  );

  const allChartData = await Promise.all(chartDataPromises);

  return marketData.map((token, index) => ({
    ...token,
    productId: idMap[token.id],
    chartData: allChartData[index] || [],
  }));
}

export const useGetMarketData = () => {
  return useQuery<Array<TokenData>, Error>({
    queryKey: ["marketData"],
    queryFn: getMarketData,
    staleTime: 5 * 60 * 1000,
  });
};
