import React from "react";
import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import { useRouter } from "next/router";
import Link from "next/link";

const data = [
  { id: 1, language: "English" },
  { id: 2, language: "Spanish" },
  { id: 3, language: "Francais" },
];

export const InternationalizationPopover = () => {
  const [opened, { close, toggle }] = useDisclosure(false);
  const { locale, locales, push } = useRouter();

  const handleClick = (l: string) => () => {
    push(`/`, undefined, { locale: l });
  };

  return (
    <Popover
      opened={opened}
      onChange={close}
      width="target"
      position="bottom"
      withArrow={false}
    >
      <Popover.Target>
        <Text className="text-sm iflex gap-2 cursor-pointer" onClick={toggle}>
          Select Language: {locale}
          <ArrowDown2 size={18} />
        </Text>
      </Popover.Target>
      <Popover.Dropdown
        sx={{
          borderRadius: 8,
        }}
        className="dark:bg-slate-800"
      >
        <div className=" flex flex-col gap-1">
          {locales?.map((l) => (
            <Text
              key={l}
              className="iflex gap-2 p-2 rounded-lg hover:bg-[#ddd] dark:hover:bg-slate-700"
              onClick={handleClick(l)}
            >
              {l}
            </Text>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
