import { Text } from "@mantine/core";
import { BiCoinStack } from "react-icons/bi";
import React from "react";
import { TotalPointsTable } from "@/shared";

export const TotalPoints = () => {
  return (
    <main className="bg-white rounded-xl p-[1.25rem] h-full dark:bg-slate-800">
      <div className="iflex justify-between pb-3 border-b border-[#E3E3E3]">
        <figure className="iflex gap-2">
          <BiCoinStack size={24} />
          <Text className="text-base font-medium text-[#121212] dark:text-white">
            Total Points
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
