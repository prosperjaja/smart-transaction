import { Text } from "@mantine/core";
import { BiCoinStack } from "react-icons/bi";
import React from "react";
import { TotalPointsTable } from "@/shared";
import { useIntl } from "react-intl";

export const TotalPoints = () => {
  const intl = useIntl();
  const table = intl.messages["page.home.hero.Total-points"] as string;

  return (
    <main className="bg-white rounded-xl p-[1.25rem] h-full dark:bg-slate-800 overflow-auto">
      <div className="iflex justify-between pb-3 border-b border-[#E3E3E3]">
        <figure className="iflex gap-2">
          <BiCoinStack size={24} />
          <Text className="text-base font-medium text-[#121212] dark:text-white">
            {table}
          </Text>
        </figure>
        <Text className="text-sm text-[#876AFE] font-medium cursor-pointer">
          View All
        </Text>
      </div>
      <TotalPointsTable />
    </main>
  );
};
