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
    <main className="bg-white rounded-xl p-[1.25rem] dark:bg-slate-800">
      <div className="iflex gap-2 pb-3 border-b border-[#E3E3E3]">
        <EmptyWallet />
        <Text className="text-base font-medium text-[#121212] dark:text-white">
          Quick Transfer
        </Text>
      </div>
      <section className="overflow-auto iflex gap-3 pt-2">
        {data.map(({ id, icon, details }) => (
          <article
            key={id}
            className="iflex gap-2 border border-[#ccc] rounded-lg py-1.5 px-2.5"
          >
            {icon}
            <Text className="text-[#121212] text-xs font-medium dark:text-white">
              {details}
            </Text>
          </article>
        ))}
      </section>
    </main>
  );
};
