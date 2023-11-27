import { Dropdown, InternationalizationPopover } from "@/popovers";
import { Avatar, Text, TextInput, rem } from "@mantine/core";
import { Message, Notification, SearchNormal } from "iconsax-react";
import React from "react";
import { TbSettings2 } from "react-icons/tb";
import { useIntl } from "react-intl";

export const Header = () => {
  const intl = useIntl();
  const placeholder = intl.messages["page.home.header.placeholder"] as string;

  return (
    <article className="px-[clamp(1.5rem,2vw,2rem)] py-[1rem] bg-[#F7F7FF] iflex justify-between dark:bg-slate-700">
      <TextInput
        miw="25%"
        styles={{
          label: {
            color: "#121212",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "22.4px",
          },
          input: {
            paddingLeft: rem(14),
            height: "fit-content",
            lineHeight: "normal",
            border: `none`,
            background: "white",
            borderRadius: rem(8),
            paddingBlock: rem(15),
            "&::placeholder": {
              color: "#ccc",
              fontWeight: 400,
              fontSize: rem(14),
              lineHeight: "22.4px",
            },
            "&:focus": {
              border: `${rem(1)} solid #2F70F2`,
            },
          },
        }}
        icon={<SearchNormal size={22} />}
        placeholder={placeholder}
      />
      <section className="iflex gap-[clamp(1rem,1.5vw,1.5rem)] ">
        <div className="flex  items-center gap-[clamp(1rem,1.5vw,1.5rem)] max-[870px]:hidden">
          <InternationalizationPopover />
          <Message className="cursor-pointer" size="24" />
          <TbSettings2 className="cursor-pointer" size={24} />
          <Notification className="cursor-pointer" size="24" />
        </div>
        <figure className="iflex gap-3">
          <Avatar size={32} radius="100%" src="/alex.svg" />
          <Text className="text-base text-[#121212] font-semibold dark:text-white">
            Alex Smith
          </Text>
          <div className="hidden max-[870px]:block cursor-pointer">
            <Dropdown />
          </div>
        </figure>
      </section>
    </article>
  );
};
