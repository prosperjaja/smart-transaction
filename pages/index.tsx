import Image from "next/image";
import { Inter } from "next/font/google";
import { Sidebar } from "@/shared";
import { DashboardLayout } from "@/layout";
import { Dashboard } from "@/dashboard";

export default function Home() {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}
