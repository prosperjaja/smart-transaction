import React from "react";
import { InfoCards } from "./info-cards";
import { DashboardAreaChart } from "./dashboard-area-chart";
import { TransactionDetails } from "./transaction-details";
import { QuickTransfer } from "./quick-transfer";
import { ActivityCharts } from "./activity-charts";
import { TotalPoints } from "./total-points";

export const Dashboard = () => {
  return (
    <main className="h-full istack bg-[#F6F6F6] overflow-auto dark:bg-slate-600">
      {/* FIRST LAYER OF DASHBOARD WITH AREA CHART  */}
      <section className="flex items-center gap-[clamp(1rem,2vw,2rem)] max-[1265px]:flex-col">
        <article className="flex-1 max-[1265px]:w-full p-[clamp(1rem,2vw,2rem)] istack gap-[clamp(1rem,2vw,2rem)] h-full max-[1265px]:p-[1rem]">
          <InfoCards />
          <DashboardAreaChart />
        </article>
        <article className="w-[40%] max-[1265px]:w-full p-[clamp(1rem,2vw,2rem)] istack gap-[clamp(1rem,2vw,2rem)] istack h-full overflow-auto">
          <TransactionDetails />
          <QuickTransfer />
        </article>
      </section>
      {/* SECOND LAYER OF DASHBOARD WITH LINE CHART AND TABLE */}
      <section className="flex items-center gap-[clamp(1rem,2vw,1.5rem)] h-full max-[1265px]:flex-col">
        <article className="w-[20%] h-full p-[clamp(1rem,2vw,2rem)] max-[1265px]:w-full">
          <ActivityCharts />
        </article>
        <article className="flex-1 h-full p-[clamp(1rem,2vw,2rem)] w-full">
          <TotalPoints />
        </article>
      </section>
    </main>
  );
};
