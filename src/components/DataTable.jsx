export default function DataTable({ data, onUpdateRow, onRemoveRow }) {
  return (
    <table style={{ width: '100%', border: '1px solid #ccc', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Label</th>
          <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Value</th>
          <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid #ccc', padding: '0.25rem' }}>
              <input 
                value={item.label} 
                onChange={e => onUpdateRow(index, "label", e.target.value)} 
                style={{ border: '1px solid #ccc', padding: '0.25rem', width: '100%' }}
              />
            </td>
            <td style={{ border: '1px solid #ccc', padding: '0.25rem' }}>
              <input 
                type="number" 
                value={item.value} 
                onChange={e => onUpdateRow(index, "value", e.target.value)} 
                style={{ border: '1px solid #ccc', padding: '0.25rem', width: '80px' }}
              />
            </td>
            <td style={{ border: '1px solid #ccc', padding: '0.25rem' }}>
              <button 
                onClick={() => onRemoveRow(index)} 
                style={{
                  padding: '0.25rem 0.5rem',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.25rem',
                  cursor: 'pointer'
                }}
              >
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
