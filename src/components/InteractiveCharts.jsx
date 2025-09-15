import { useState } from "react";
import ControlPanel from "./ControlPanel";
import DataTable from "./DataTable";
import LineChartComponent from "./charts/LineChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import GaugeChartComponent from "./charts/GaugeChartComponent";

export default function InteractiveCharts() {
  const [data, setData] = useState([
    { label: "A", value: 30 },
    { label: "B", value: 55 },
    { label: "C", value: 25 },
  ]);
  const [chartType, setChartType] = useState("line");

  function addRow() {
    setData([...data, { label: "New", value: 0 }]);
  }
  
  function updateRow(index, field, val) {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: field === "value" ? Number(val) : val };
    setData(newData);
  }
  
  function removeRow(index) {
    setData(data.filter((_, i) => i !== index));
  }

  function handleChartTypeChange(newType) {
    setChartType(newType);
  }

  function renderChart() {
    switch (chartType) {
      case "line":
        return <LineChartComponent data={data} />;
      case "bar":
        return <BarChartComponent data={data} />;
      case "pie":
        return <PieChartComponent data={data} />;
      case "gauge":
        return <GaugeChartComponent data={data} />;
      default:
        return <LineChartComponent data={data} />;
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Интерактивные графики</h2>
      
      <ControlPanel 
        chartType={chartType}
        onChartTypeChange={handleChartTypeChange}
        onAddRow={addRow}
      />

      <DataTable 
        data={data}
        onUpdateRow={updateRow}
        onRemoveRow={removeRow}
      />

      <div style={{ height: '400px', width: '100%', marginTop: '1rem', border: '2px solid #ccc' }}>
        <h3>График ({chartType}):</h3>
        {renderChart()}
      </div>
    </div>
  );
}
