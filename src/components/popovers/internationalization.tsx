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
  const { locales } = useRouter();

  // const handleClick = (l: string) => () => {
  //   push(`/`, undefined, { locale: l });
  // };

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
          Select Language
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
          {[...(locales as string[])].sort().map((locale) => (
            <Link
              key={locale}
              href="/"
              locale={locale}
              className="iflex gap-2 p-2 rounded-lg hover:bg-[#ddd] dark:hover:bg-slate-700"
              onClick={() => {
                close(), console.log(locale);
              }}
            >
              {locale === "en"
                ? "English"
                : locale === "fr"
                ? "French"
                : "Dutch"}
            </Link>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
