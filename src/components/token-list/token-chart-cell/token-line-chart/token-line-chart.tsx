"use client";

import { TokenLineChartPropsType } from "@/components/token-list/token-chart-cell/token-line-chart/token-line-chart-props.type";
import dynamic from "next/dynamic";
import { FC } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const TokenLineChart: FC<TokenLineChartPropsType> = ({
  data,
  positive,
}) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    colors: [positive ? "#22C55E" : "#EF4444"],
    markers: {
      size: 0,
    },
    tooltip: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Price",
      data: data,
    },
  ];

  if (!data || data.length === 0) {
    return <div className="w-[100px] h-[30px]" />;
  }

  return (
    <div className="w-[100px] h-[30px]">
      <Chart
        options={options}
        series={series}
        type="area"
        height="100%"
        width="100%"
      />
    </div>
  );
};
