import { TokenChartCellProps } from "@/components/token-list/token-chart-cell/token-chart-props.type";
import { TokenLineChart } from "@/components/token-list/token-chart-cell/token-line-chart/token-line-chart";
import { FC } from "react";

export const TokenChartCell: FC<TokenChartCellProps> = ({ token }) => {
  return (
    <div className="col-span-1">
      <TokenLineChart
        data={token?.chartData}
        positive={token.price_change_percentage_24h >= 0}
      />
    </div>
  );
};
