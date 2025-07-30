import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  const senhaCorreta = 'PIUprova';//DEFINIR PREVIAMENTE A SENHA
  

const enviar = (e) => {
    e.preventDefault();
    if (senha === senhaCorreta) {
      setLogado(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  return (
    <div id = "contein"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: logado ? '#90ee' : '#4169E1',
        transition: 'background-color 0.3s ease',
        height:'400px'
      }}
    >
      <form
        onSubmit={enviar}
        style={{
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '6px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
        }}
      >
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Palavra-chave"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

