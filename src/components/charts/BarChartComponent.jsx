import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function BarChartComponent({ data }) {
  return (
    <BarChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#4f46e5" />
    </BarChart>
  );
}
