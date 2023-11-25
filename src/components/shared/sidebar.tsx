import { Logo } from "@/icons";
import React from "react";
import { SidebarMap, ThemeSwitcher } from ".";

export const Sidebar = () => {
  return (
    <main className="h-full w-[13.75rem] border-r-[3px] border-r-[#E3E3E3] dark:border-r-slate-900 p-[2rem] istack gap-[clamp(2rem,3.4vw,3.375rem)] justify-between dark:bg-slate-800">
      <div className="min-w-[92px]">
        <Logo />
      </div>
      <SidebarMap />
      <ThemeSwitcher />
    </main>
  );
};
