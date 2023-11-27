import { Text } from "@mantine/core";
import { BiCoinStack } from "react-icons/bi";
import React from "react";
import TopBarChart from "./charts/bar-chart";
import BarChart from "./charts/bar-chart";
import { ArrowDown2 } from "iconsax-react";
import { useIntl } from "react-intl";

const data = [
  { id: 1, title: "View Per Quarter" },
  { id: 2, title: "View Per Year" },
];

export const ActivityCharts = () => {
  const intl = useIntl();
  const activity = intl.messages["page.home.hero.activity-charts"] as string;

  return (
    <main className="bg-white rounded-xl p-[1.25rem] h-full dark:bg-slate-800 ">
      <div className="iflex gap-2 pb-3 border-b border-[#E3E3E3]">
        <BiCoinStack size={24} />
        <Text className="text-base font-medium text-[#121212] dark:text-white">
          {activity}
        </Text>
      </div>
      <figure className="flex flex-col items-center gap-2 justify-center">
        <div className="istack gap-2 pt-2">
          <Text className="text-[#A8A8A8] pb-2">Per Week</Text>
          <BarChart
            barData={[25, 20, 60, 30, 35, 10, 47]}
            color={[
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
            ]}
            empty={["", "", "", "", "", "", ""]}
          />
        </div>
        <div className="istack gap-2 pt-2">
          <Text className="text-[#A8A8A8] pb-2">Per Month</Text>
          <BarChart
            barData={[
              35, 10, 47, 25, 20, 60, 30, 35, 10, 47, 57, 21, 34, 58, 66,
            ]}
            color={[
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
            ]}
            empty={["", "", "", "", "", "", "", "", "", "", ""]}
          />
        </div>
      </figure>
      <article className="istack gap-2">
        {data.map(({ id, title }) => (
          <div className="iflex justify-between text-sm" key={id}>
            {title}
            <ArrowDown2 size={14} className="cursor-pointer" />
          </div>
        ))}
      </article>
    </main>
  );
};
