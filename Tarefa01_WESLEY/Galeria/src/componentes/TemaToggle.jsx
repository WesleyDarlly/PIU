const TemaToggle = ({ tema, onToggle }) => {
    return (
      <button
        onClick={onToggle}
        style={{
          display: 'block',
          margin: '0 auto 20px',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          backgroundColor: tema === 'claro' ? '#333' : '#f5f5f5',
          color: tema === 'claro' ? 'white' : '#333'
        }}
      >
        {tema === 'claro' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </button>
    );
  };
  
  export default TemaToggle;