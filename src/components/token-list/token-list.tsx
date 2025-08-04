"use client";
import { Error } from "@/components/token-list/error";
import { Loading } from "@/components/token-list/loading";
import { TokenActionCell } from "@/components/token-list/token-action-cell/token-action-cell";
import { TokenChartCell } from "@/components/token-list/token-chart-cell/token-chart-cell";
import { TokenListHeader } from "@/components/token-list/token-list-header";
import { TokenMarketCapCell } from "@/components/token-list/token-market-cap-cell/token-market-cap-cell";
import { TokenMarketSupplyCell } from "@/components/token-list/token-market-supply-cell/token-market-supply-cell";
import { TokenMarketVolumeCell } from "@/components/token-list/token-market-volume-cell /token-market-volume-cell";
import { TokenNameCell } from "@/components/token-list/token-name-cell/token-name-cell";
import { TokenPriceCell } from "@/components/token-list/token-price-cell/token-price-cell";
import { useGetMarketData } from "@/hooks/use-get-market-data";
import { useTokenPrices } from "../../hooks/use-token-prices"; // We will use this again!

export const TokenList = () => {
  const { data: initialData, isLoading, isError } = useGetMarketData();

  const livePrices = useTokenPrices();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="px-4 sm:px-8 py-12 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Top 10 Trending Tokens
      </h2>

      <div className="overflow-x-auto">
        <div className="min-w-[1280px]">
          <TokenListHeader />
          <div className="flex flex-col space-y-2 mt-2">
            {initialData?.map((token, index) => {
              const livePrice = livePrices[token.productId];
              const currentPrice = livePrice
                ? parseFloat(livePrice)
                : token.current_price;

              return (
                <div
                  key={token.id}
                  className="grid grid-cols-7 bg-[#0A1F0699] gap-2 items-center p-4 hover:bg-gray-800/40 transition-colors border-b border-gray-900/50"
                >
                  <TokenNameCell index={index} token={token} />

                  <TokenPriceCell token={token} currentPrice={currentPrice} />

                  <TokenMarketCapCell token={token} />

                  <TokenMarketVolumeCell token={token} />

                  <TokenMarketSupplyCell token={token} />

                  <TokenChartCell token={token} />

                  <TokenActionCell />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
