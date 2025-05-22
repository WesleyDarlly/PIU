import Card from './Card';
import styles from '../App.module.css';

const Galeria = ({ personagens, onPersonagemClick, tema }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {personagens.map((personagem) => (
        <Card
          key={personagem.id}
          personagem={personagem}
          onClick={onPersonagemClick}
          tema={tema}
        />
      ))}
    </div>
  );
};

export default Galeria;