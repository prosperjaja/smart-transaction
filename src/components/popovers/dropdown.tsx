import { Menu, Button, Text } from "@mantine/core";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import React from "react";
import { Message, Notification } from "iconsax-react";
import { TbSettings2 } from "react-icons/tb";

const data = [
  {
    id: 1,
    title: "Message",
    icon: <Message className="cursor-pointer" size="24" />,
  },
  {
    id: 2,
    title: "Settings",
    icon: <TbSettings2 className="cursor-pointer" size={24} />,
  },
  {
    id: 3,
    title: "Notification",
    icon: <Notification className="cursor-pointer" size="24" />,
  },
];

export const Dropdown = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <span>
          <HiOutlineMenuAlt3 size={22} />
        </span>
      </Menu.Target>

      <Menu.Dropdown
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: 10,
        }}
        className="bg-[#ccc] dark:bg-slate-800"
      >
        {data.map(({ id, title, icon }) => (
          <li
            key={id}
            className="iflex gap-2 p-1.5 hover:bg-[#ccc] dark:hover:bg-slate-700 rounded-lg cursor-pointer"
          >
            {icon}
            {title}
          </li>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
