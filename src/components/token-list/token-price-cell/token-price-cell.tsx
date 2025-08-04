import { TokenPriceCellPropsType } from "@/components/token-list/token-price-cell/token-price-cell.-props.type";
import { FC } from "react";

export const TokenPriceCell: FC<TokenPriceCellPropsType> = ({
  currentPrice,
  token,
}) => {
  return (
    <div className="col-span-1 flex items-center space-x-2">
      <p className="tabular-nums">
        {currentPrice.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: currentPrice < 1 ? 4 : 2,
          maximumFractionDigits: 6,
        })}
      </p>
      <span
        className={`flex items-center text-xs font-bold px-2 py-1 rounded-md ${
          token.price_change_percentage_24h >= 0
            ? "bg-green-500/20 text-green-400"
            : "bg-red-500/20 text-red-400"
        }`}
      >
        {token.price_change_percentage_24h >= 0 ? (
          <>
            <span className="mr-1">⌃</span>+
            {token.price_change_percentage_24h.toFixed(2)}%
          </>
        ) : (
          <>
            <span className="mr-1 rotate-180 inline-block">⌃</span>
            {token.price_change_percentage_24h.toFixed(2)}%
          </>
        )}
      </span>
    </div>
  );
};
