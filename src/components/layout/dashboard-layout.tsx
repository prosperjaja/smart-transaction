import { Header, Sidebar } from "@/shared";
import { SearchNormal, Notification, Message } from "iconsax-react";
import { TbSettings2 } from "react-icons/tb";
import React, { ReactNode } from "react";
import { Avatar, Text } from "@mantine/core";

export const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <main className="iflex h-[100vh] overflow-auto">
    <Sidebar />
    <section className="istack flex-1 h-full ">
      <Header />
      {children}
    </section>
  </main>
);
