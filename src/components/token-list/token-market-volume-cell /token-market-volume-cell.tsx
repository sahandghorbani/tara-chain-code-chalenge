import { TokenMarketVolumeCellProps } from "@/components/token-list/token-market-volume-cell /token-market-volume-props.type";
import { formatNumber } from "@/utility/format-number";
import { FC } from "react";

export const TokenMarketVolumeCell: FC<TokenMarketVolumeCellProps> = ({
  token,
}) => {
  return (
    <div className="col-span-1 font-medium">
      ${formatNumber(token.total_volume)}
    </div>
  );
};
