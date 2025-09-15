import { PieChart, Pie, Tooltip } from "recharts";

const COLORS = ["#4f46e5", "#ef4444", "#f59e0b", "#10b981"];

export default function PieChartComponent({ data }) {
  const pieData = data.map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length]
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie 
        data={pieData} 
        dataKey="value" 
        nameKey="label" 
        outerRadius={80} 
        fill="#4f46e5"
      />
      <Tooltip />
    </PieChart>
  );
}
