import { Category } from "iconsax-react";
import { PiBriefcaseLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLock } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { MessageFormatElement, useIntl } from "react-intl";

export const SidebarMap = () => {
  const { pathname } = useRouter();
  // const sidebarTitle = intl.messages["page.home.sidebar.title"];
  // const sidebarData = intl.messages["page.home.sidebar.data"];
  // const sidebarLowerData = intl.messages["page.home.sidebar.lowerpartdata"];
  const intl = useIntl();
  const dashboard = intl.messages["page.home.sidebar.dashboard"] as string;
  const customer = intl.messages["page.home.sidebar.customer"] as string;
  intl.messages["page.home.sidebar.title"];
  const sidebarData = intl.messages[
    "page.home.sidebar.data"
  ] as unknown as Record<string, string>;
  const sidebarLowerData = intl.messages[
    "page.home.sidebar.Lowerdata"
  ] as unknown as Record<string, string>;
  const data = [
    {
      id: 139,
      name: dashboard,
      children: [
        {
          id: 1,
          name: sidebarData?.home,
          icon: <Category size={18} />,
          link: "/",
        },
        {
          id: 2,
          name: sidebarData?.files,
          icon: <FaRegUser />,
          link: "/files",
        },
        {
          id: 3,
          name: sidebarData?.deadline,
          icon: <PiBriefcaseLight />,
          link: "/deadline-project",
        },
        {
          id: 4,
          name: sidebarData?.management,
          icon: <SlLock />,
          link: "/management",
        },
        {
          id: 5,
          name: sidebarData?.database,
          icon: <SlLock />,
          link: "/database",
        },
      ],
    },
    {
      id: 2345,
      name: customer,
      children: [
        {
          id: 1,
          name: sidebarLowerData?.team,
          icon: <Category size={18} />,
          link: "/team-award",
        },
        {
          id: 2,
          name: sidebarLowerData?.invoice,
          icon: <FaRegUser />,
          link: "/invoice-data",
        },
        {
          id: 3,
          name: sidebarLowerData?.settings,
          icon: <IoSettingsOutline />,
          link: "/settings",
        },
        {
          id: 4,
          name: sidebarLowerData?.announcement,
          icon: <SlLock />,
          link: "/announcements",
        },
        {
          id: 5,
          name: sidebarLowerData?.media,
          icon: <SlLock />,
          link: "/media-assets",
        },
        {
          id: 6,
          name: sidebarLowerData?.client,
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
