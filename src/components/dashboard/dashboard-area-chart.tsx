import { Text } from "@mantine/core";
import { IoMdSquare } from "react-icons/io";
import React from "react";
import { ArrowDown2 } from "iconsax-react";
import { AreaChart } from "./charts";

export const DashboardAreaChart = () => {
  return (
    <main className="h-full">
      <section className="iflex justify-between">
        <div className="iflex gap-4">
          <span className="iflex gap-3">
            <Text className="text-[#121212] dark:text-white">Salary</Text>
            <IoMdSquare size={24} color="#876AFE" />
          </span>
          <span className="iflex gap-3">
            <Text className="text-[#121212] dark:text-white">Cash bond</Text>
            <IoMdSquare size={24} color="#FFBC02" />
          </span>
        </div>
        <div className="iflex gap-2">
          <Text className="text-[#A8A8A8] text-xs font-normal">From:</Text>
          <span className="iflex gap-2">
            <Text className="text-[#121212] text-sm font-medium">20 June</Text>
            <ArrowDown2 size={14} className="cursor-pointer" />
          </span>
          <Text className="text-[#A8A8A8] text-xs font-normal">To:</Text>
          <span className="iflex gap-2">
            <Text className="text-[#121212] text-sm font-medium">20 July</Text>
            <ArrowDown2 size={14} className="cursor-pointer" />
          </span>
        </div>
      </section>
      <section className="w-full">
        <AreaChart />
      </section>
    </main>
  );
};
