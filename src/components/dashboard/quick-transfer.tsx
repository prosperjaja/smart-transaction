import { Mastercard, Visa } from "@/icons";
import { Text } from "@mantine/core";
import { EmptyWallet } from "iconsax-react";
import React from "react";

const data = [
  { id: 1, icon: <Visa />, details: "3419 Debit Card" },
  { id: 2, icon: <Mastercard />, details: "3419 Debit Card" },
  { id: 3, icon: <Visa />, details: "3419 Debit Card" },
  { id: 4, icon: <Mastercard />, details: "3419 Debit Card" },
];

export const QuickTransfer = () => {
  return (
    <main className="bg-white rounded-xl p-[1.25rem] dark:bg-slate-800  w-full">
      <div className="iflex gap-2 pb-3 border-b border-[#E3E3E3]">
        <EmptyWallet />
        <Text className="text-base font-medium text-[#121212] dark:text-white">
          Quick Transfer
        </Text>
      </div>
      <article className="overflow-x-auto scroll-bar-hidden">
        <section className="overflow-auto flex items-center gap-3 pt-2 flex-1">
          {data.map(({ id, icon, details }) => (
            <article
              key={id}
              className=" px-[clamp(11px,0.8vw,12px)] py-[clamp(5px,0.6vw,9px)] border border-[#DFDFDF] gap-[12px] flex rounded-[6px] items-center"
            >
              {icon}
              <Text className="text-[#121212] text-xs font-medium dark:text-white">
                {details}
              </Text>
            </article>
          ))}
        </section>
      </article>
    </main>
  );
};
