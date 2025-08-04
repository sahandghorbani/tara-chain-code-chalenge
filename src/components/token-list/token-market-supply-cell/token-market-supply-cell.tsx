import { TokenMarketSupplyCellProps } from "@/components/token-list/token-market-supply-cell/token-market-supply-cell-props.type";
import { formatNumber } from "@/utility/format-number";
import { FC } from "react";

export const TokenMarketSupplyCell: FC<TokenMarketSupplyCellProps> = ({
  token,
}) => {
  return (
    <div className="col-span-1 font-medium">
      ${formatNumber(token.total_supply)}
    </div>
  );
};
