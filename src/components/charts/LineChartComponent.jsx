import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function LineChartComponent({ data }) {
  return (
    <LineChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
    </LineChart>
  );
}
