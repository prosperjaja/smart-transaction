import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export const AreaChart = () => {
  const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options: ApexOptions = {
    chart: {
      height: 270,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#876AFE", "#FFBC02"],
    },
    xaxis: {
      type: "datetime",
      categories: [
        "20 June",
        "21 June",
        "22 June",
        "23 June",
        "24 June",
        "25 June",
        "26 June",
        // "27 June",
        // "28 June",
        // "29 June",
        // "30 June",
      ],
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#eceaf5", "transparent"],
        shadeIntensity: 0,
        type: "horizontal",
        stops: [0, 100, 100, 100],
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1440,
        options: {
          legend: {
            show: false,
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ApexCharts options={options} series={series} type="area" height={280} />
    </div>
  );
};
