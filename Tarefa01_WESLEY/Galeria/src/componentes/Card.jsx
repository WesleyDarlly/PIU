const Card = ({ personagem, onClick, tema }) => {
    return (
      <div
        onClick={() => onClick(personagem)}
        style={{
          cursor: 'pointer',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: tema === 'claro' ? 'white' : '#2d2d2d',
          color: tema === 'claro' ? '#333' : '#f5f5f5',
          transition: 'all 0.3s ease'
        }}
      >
        <img
          src={personagem.imagem}
          alt={personagem.nome}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover'
          }}
        />
        <h3 style={{ padding: '10px', textAlign: 'center' }}>{personagem.nome}</h3>
      </div>
    );
  };
  
  export default Card;