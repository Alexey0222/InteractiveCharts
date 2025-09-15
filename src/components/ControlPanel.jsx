export default function ControlPanel({ chartType, onChartTypeChange, onAddRow }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button 
        onClick={onAddRow} 
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer',
          marginRight: '0.5rem'
        }}
      >
        + Добавить
      </button>
      
      <select 
        value={chartType} 
        onChange={(e) => onChartTypeChange(e.target.value)} 
        style={{
          padding: '0.25rem',
          border: '1px solid #ccc',
          borderRadius: '0.25rem'
        }}
      >
        <option value="line">Линейный</option>
        <option value="bar">Столбчатый</option>
        <option value="pie">Круговой</option>
        <option value="gauge">Тахометр</option>
      </select>
    </div>
  );
}
