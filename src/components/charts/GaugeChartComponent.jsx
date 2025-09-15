import { RadialBarChart, RadialBar, Tooltip } from "recharts";

export default function GaugeChartComponent({ data }) {
  // Функция для расчета данных тахометра
  function getGaugeData() {
    const maxValue = Math.max(...data.map(d => d.value));
    const totalValue = data.reduce((sum, d) => sum + d.value, 0);
    const averageValue = data.length > 0 ? totalValue / data.length : 0;
    
    return [
      { 
        name: 'Текущее значение', 
        value: maxValue,
        fill: '#4f46e5'
      },
      { 
        name: 'Среднее значение', 
        value: averageValue,
        fill: '#10b981'
      },
      { 
        name: 'Общая сумма', 
        value: totalValue,
        fill: '#f59e0b'
      }
    ];
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <RadialBarChart 
        width={400} 
        height={300}
        cx="50%" 
        cy="50%" 
        innerRadius="20%" 
        outerRadius="80%" 
        startAngle={180} 
        endAngle={0} 
        data={getGaugeData()}
      >
        <RadialBar dataKey="value" cornerRadius={10} />
        <Tooltip />
      </RadialBarChart>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#4f46e5', borderRadius: '2px' }}></div>
            <span>Максимум: {Math.max(...data.map(d => d.value))}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '2px' }}></div>
            <span>Среднее: {(data.reduce((sum, d) => sum + d.value, 0) / data.length).toFixed(1)}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#f59e0b', borderRadius: '2px' }}></div>
            <span>Сумма: {data.reduce((sum, d) => sum + d.value, 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
