import { useState } from 'react';
import styles from './App.module.css';
import Galeria from './components/Galeria';
import Detalhes from './components/Detalhes';
import imagem1 from './assets/images/personagem1.jpg';

function App() {
  const [tema, setTema] = useState('claro');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  const personagens = [
    { id: 1, nome: 'Personagem 1', imagem: imagem1, descricao: 'Descrição...' },
   
  ];

  const toggleTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <div style={{
      backgroundColor: tema === 'claro' ? '#f5f5f5' : '#1a1a1a',
      color: tema === 'claro' ? '#333' : '#f5f5f5',
      minHeight: '100vh',
      padding: '20px',
      transition: 'all 0.3s ease'
    }}>
      <h1 style={{ textAlign: 'center' }}>Galeria de Personagens</h1>
      
      <TemaToggle tema={tema} onToggle={toggleTema} />
      
      <Detalhes personagem={personagemSelecionado} tema={tema} />
      
      <Galeria 
        personagens={personagens}
        onPersonagemClick={setPersonagemSelecionado}
        tema={tema}
      />
    </div>
  );
}

export default App;