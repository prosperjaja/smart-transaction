import { Text } from "@mantine/core";
import { BiCoinStack } from "react-icons/bi";
import React from "react";

export const ActivityCharts = () => {
  return (
    <main className="bg-white rounded-xl p-[1.25rem] h-full dark:bg-slate-800">
      <div className="iflex gap-2 pb-3 border-b border-[#E3E3E3]">
        <BiCoinStack size={24} />
        <Text className="text-base font-medium text-[#121212] dark:text-white">
          Activity Charts
        </Text>
      </div>
    </main>
  );
};
