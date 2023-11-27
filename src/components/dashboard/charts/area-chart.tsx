import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import dayjs from "dayjs";
import { Text } from "@mantine/core";

export const AreaChart = () => {
  const { data: chartData } = useQuery({
    queryFn: () => builder.use().transaction_logs.fetch(),
    queryKey: builder.transaction_logs.fetch.get(),
    select: ({ data }) => data?.data,
  });

  console.log(chartData);

  const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

  const series = [
    {
      name: "Salary",
      data: chartData?.map((item) =>
        item?.salary_paid?.toString()?.slice(0, 2)
      ),
    },
    {
      name: "Cash Bond",
      data: chartData?.map((item) =>
        item?.cash_bond_bought?.toString()?.slice(0, 2)
      ),
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
      categories: chartData?.map((item) => dayjs(item?.date)?.format("MMM DD")),
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
      {chartData ? (
        <ApexCharts
          options={options}
          series={series as any}
          type="area"
          height={280}
          width="100%"
        />
      ) : (
        <div className="h-[20vh] bg-white dark:bg-slate-700 rounded-xl iflex justify-center">
          <Text className="text-base font-bold text-[#121212]">
            No Chart Data Available...
          </Text>
        </div>
      )}
    </div>
  );
};
