import { builder } from "@/api/builder";
import { GoogleCloud, Spotify, TransferCircle, Upwork, Xd } from "@/icons";
import { Avatar, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import React from "react";

const icons = [<Spotify />, <GoogleCloud />, <Xd />, <Upwork />];

export const TransactionDetails = () => {
  const { data: transactionDetailsData } = useQuery({
    queryFn: () => builder.use().transaction_details.fetch(),
    queryKey: builder.transaction_details.fetch.get(),
    select: ({ data }) => data?.data,
  });

  return (
    <main className="bg-white rounded-xl p-[1.25rem] dark:bg-slate-800">
      <div className="iflex gap-2 pb-3 border-b border-[#E3E3E3]">
        <TransferCircle />
        <Text className="text-base font-medium text-[#121212] dark:text-white">
          Transaction Details
        </Text>
      </div>
      <section className="istack gap-4 pt-4">
        {transactionDetailsData?.map(
          ({ created_at, charge, charged_by }, idx) => (
            <article key={idx} className="iflex justify-between">
              <div className="iflex gap-4">
                {/* <Avatar src={charged_by?.logo} size={30} radius="100%" /> */}
                {icons[idx]}
                <span className="istack">
                  <Text>{charged_by?.company}</Text>
                  <Text className="text-[#A8A8A8] text-xs font-normal">
                    {dayjs(created_at)?.format("YYYY-MM-DD")}
                  </Text>
                </span>
              </div>
              <Text
                className="text-xs font-medium"
                style={{
                  color: charge?.type?.includes("debit")
                    ? "#D62C2C"
                    : "#4EEA7A",
                }}
              >
                {charge?.type?.includes("debit") ? "-" : "+"}{" "}
                {charge?.currency?.sign} {charge?.amount}
              </Text>
            </article>
          )
        )}
      </section>
    </main>
  );
};
