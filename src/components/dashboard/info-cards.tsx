import { builder } from "@/api/builder";
import { Skeleton, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import capitalize from "lodash.capitalize";
import { ArrowDown2, Card, CardSend, Profile2User } from "iconsax-react";
import React, { ReactNode } from "react";
import { amountFormatter } from "@/utils";
import clsx from "clsx";

const icons: Record<string, ReactNode> = {
  active_users: <Profile2User color="#2F70F2" />,
  transactions: <CardSend color="#876AFE" />,
  cards_issued: <Card color="#FFBC02" />,
};
const infoColors = ["#2F70F2", "#876AFE", "#FFBC02"];

export const InfoCards = () => {
  const { data: transactionOverview, isLoading } = useQuery({
    queryFn: () => builder.use().transaction_overview.fetch(),
    queryKey: builder.transaction_overview.fetch.get(),
    select: ({ data }) => data?.data,
  });

  return (
    <section className="grid grid-cols-3 gap-[clamp(1rem,1.5vw,1.5rem)]">
      {isLoading
        ? Array(3)
            ?.fill(0)
            .map((_, idx) => (
              <Skeleton
                key={idx}
                w="100%"
                h={110}
                radius="lg"
                className="bg-[#ccc] dark:bg-slate-800"
              />
            ))
        : transactionOverview?.map(({ name, current, last_month }, idx) => (
            <article
              key={idx}
              className="p-[1.25rem] bg-white rounded-xl istack gap-3 dark:bg-slate-800 "
            >
              <div className="iflex gap-2">
                {icons[name]}
                <Text
                  className="text-[clamp(0.6rem,1vw,1rem)] font-medium"
                  style={{
                    color: infoColors[idx],
                  }}
                >
                  {capitalize(name?.replace("_", " "))}
                </Text>
              </div>
              <div className="iflex">
                <Title className="text-[clamp(0.8rem,1.8vw,1.75rem)] text-[#121212] dark:text-white whitespace-nowrap">
                  $ {amountFormatter(current)}
                </Title>
                <Text
                  style={{
                    color:
                      (current - (last_month / last_month) * 100)?.toString() <
                      "50"
                        ? "red"
                        : "green",
                  }}
                  className="iflex gap-1 text-sm"
                >
                  <span>
                    <ArrowDown2
                      className={clsx(
                        (
                          current -
                          (last_month / last_month) * 100
                        )?.toString() > "50"
                          ? "rotate-180"
                          : null
                      )}
                      size={20}
                      color={
                        (
                          current -
                          (last_month / last_month) * 100
                        )?.toString() < "50"
                          ? "red"
                          : "green"
                      }
                      variant="Bold"
                    />
                  </span>
                  {(current - (last_month / last_month) * 100)
                    ?.toString()
                    ?.slice(0, 2) + "%"}
                </Text>
              </div>
            </article>
          ))}
    </section>
  );
};
