import styles from '../App.module.css';

const Detalhes = ({ personagem, tema }) => {
  if (!personagem) return null;

  return (
    <div style={{
      margin: '30px auto',
      maxWidth: '600px',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: tema === 'claro' ? 'white' : '#2d2d2d',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>{personagem.nome}</h2>
      <img
        src={personagem.imagem}
        alt={personagem.nome}
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          margin: '15px 0',
          borderRadius: '4px'
        }}
      />
      <p>{personagem.descricao}</p>
    </div>
  );
};

export default Detalhes;