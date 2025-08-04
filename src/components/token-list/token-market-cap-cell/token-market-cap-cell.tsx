import { TokenMarketCapCellProps } from "@/components/token-list/token-market-cap-cell/token-market-cap-cell-props.type";
import { formatNumber } from "@/utility/format-number";
import { FC } from "react";

export const TokenMarketCapCell: FC<TokenMarketCapCellProps> = ({ token }) => {
  return (
    <div className="col-span-1 font-medium">
      ${formatNumber(token.market_cap)}
    </div>
  );
};
