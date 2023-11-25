import { builder } from "@/api/builder";
import { Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

export function TotalPointsTable() {
  const { data: forecastData } = useQuery({
    queryFn: () => builder.use().total_points.fetch(),
    queryKey: builder.total_points.fetch.get(),
    select: ({ data }) => data?.data,
  });

  const rows = forecastData?.map((element) => (
    <tr key={element.name}>
      <td className=" !font-normal  !text-[#A8A8A8] ">{element?.name}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">
        {element?.actual_value}
      </td>
      <td className="!font-normal  !text-[#A8A8A8] ">
        {element?.forecasted_value}
      </td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element?.q1_variance}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element?.q2_variance}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element?.q3_variance}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element?.q4_variance}</td>
    </tr>
  ));

  return (
    <Table verticalSpacing={16}>
      <thead className=" border-black">
        <tr className=" border-b border-b-[#121212] text-[#121212]">
          <th>Actual</th>
          <th>Actual</th>
          <th>Forecast</th>
          <th>Variance</th>
          <th>Variance</th>
          <th>Variance</th>
          <th>Variance</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
