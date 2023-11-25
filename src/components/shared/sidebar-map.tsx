import { Category } from "iconsax-react";
import { PiBriefcaseLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLock } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useIntl } from "react-intl";

export const SidebarMap = () => {
  const { pathname } = useRouter();
  // const sidebarTitle = intl.messages["page.home.sidebar.title"];
  // const sidebarData = intl.messages["page.home.sidebar.data"];
  // const sidebarLowerData = intl.messages["page.home.sidebar.lowerpartdata"];
  const data = [
    {
      id: 139,
      name: "Dashboard",
      children: [
        { id: 1, name: "Home", icon: <Category size={18} />, link: "/" },
        { id: 2, name: "Files", icon: <FaRegUser />, link: "/files" },
        {
          id: 3,
          name: "Deadline Project",
          icon: <PiBriefcaseLight />,
          link: "/deadline-project",
        },
        { id: 4, name: "Management", icon: <SlLock />, link: "/management" },
        { id: 5, name: "Database", icon: <SlLock />, link: "/database" },
      ],
    },
    {
      id: 2345,
      name: "Customer Data",
      children: [
        {
          id: 1,
          name: "Team Award",
          icon: <Category size={18} />,
          link: "/team-award",
        },
        {
          id: 2,
          name: "Invoice Data",
          icon: <FaRegUser />,
          link: "/invoice-data",
        },
        {
          id: 3,
          name: "Settings",
          icon: <IoSettingsOutline />,
          link: "/settings",
        },
        {
          id: 4,
          name: "Announments",
          icon: <SlLock />,
          link: "/announcements",
        },
        {
          id: 5,
          name: "Media Assets",
          icon: <SlLock />,
          link: "/media-assets",
        },
        {
          id: 6,
          name: "Client Feedback",
          icon: <SlLock />,
          link: "/client-feedback",
        },
      ],
    },
  ];

  return (
    <aside className="istack gap-[clamp(3.5rem,4.5vw,4.5rem)]">
      {data.map(({ id, name, children }) => (
        <section key={id}>
          <h2 className="text-base text-[#1F1F1F] dark:text-white font-medium pb-[0.7rem] border-b border-b-[#E3E3E3]">
            {name}
          </h2>
          <ul className="istack gap-[1rem] pt-[1rem]">
            {children.map(({ name, icon, link }, idx) => (
              <li
                key={idx}
                className={clsx(
                  pathname.includes(link)
                    ? "text-[#2F70F2] dark:text-[#2F70F2]"
                    : null,
                  "iflex gap-2 cursor-pointer py-1.5 hover:bg-[#ddd] dark:hover:bg-slate-700 px-1 rounded-lg text-sm text-[#121212] dark:text-white"
                )}
              >
                {icon}
                {name}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
};
