import "./form.css";
import { useState } from "react";

export default function Form() {
  const [tarefa, setTarefa] = useState({ nome: "", status: "", dataCriacao: "" });
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  const adicionaTarefa = (e) => {
    e.preventDefault();

    if (modoEdicao) {
      const tarefasAtualizadas = [...tarefas];
      tarefasAtualizadas[indiceEdicao] = { ...tarefa };
      setTarefas(tarefasAtualizadas);
      setModoEdicao(false);
      setIndiceEdicao(null);
    } else {
      setTarefas([
        ...tarefas,
        { ...tarefa, dataCriacao: new Date().toLocaleString() },
      ]);
    }

    setTarefa({ nome: "", status: "", dataCriacao: "" });
  };

  function Reset() {
    setTarefas([]);
  }

  function mudaTarefa(nome) {
    const tarefas_novas = tarefas.map((t) =>
      t.nome === nome ? { ...t, status: "Realizada" } : t
    );
    setTarefas(tarefas_novas);
  }

  function Ordenar(ordem) {
    const tarefas_ordenadas = [...tarefas].sort((a, b) =>
      ordem === "cres"
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome)
    );
    setTarefas(tarefas_ordenadas);
  }

  function editarTarefa(index) {
    const tarefaSelecionada = tarefas[index];
    setTarefa(tarefaSelecionada);
    setModoEdicao(true);
    setIndiceEdicao(index);
  }

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "todas") return true;
    return t.status === filtro;
  });

  return (
    <>
      <h1>Lista de tarefas</h1>

      <div>
        <strong>Filtrar:</strong>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("Realizada")}>Realizadas</button>
        <button onClick={() => setFiltro("Pendente")}>Pendentes</button>
      </div>

      <button onClick={Reset}>Reset</button> <br />

      <div>
        <strong>Ordenar:</strong>
        <button onClick={() => Ordenar("cres")}>Crescente</button>
        <button onClick={() => Ordenar("desc")}>Decrescente</button>
      </div>

      <h2>{modoEdicao ? "Editar tarefa" : "Adicione tarefas"}</h2>
      <form onSubmit={adicionaTarefa}>
        <input
          placeholder="Nome da tarefa"
          type="text"
          onChange={(e) => setTarefa({ ...tarefa, nome: e.target.value })}
          value={tarefa.nome}
          required
        />
        <select
          id="status"
          onChange={(e) => setTarefa({ ...tarefa, status: e.target.value })}
          value={tarefa.status}
          required
        >
          <option value="">Status</option>
          <option value="Realizada">Realizada</option>
          <option value="Pendente">Pendente</option>
          <option value="Não realizada">Não realizada</option>
        </select>
        <button type="submit">
          {modoEdicao ? "Salvar edição" : "Enviar"}
        </button>
      </form>

      {tarefas.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
              <th>Criada em</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tarefasFiltradas.map((t, index) => (
              <tr key={index}>
                <td>{t.nome}</td>
                <td>{t.status}</td>
                <td>{t.dataCriacao}</td>
                <td>
                  {(t.status === "Pendente" || t.status === "Não realizada") && (
                    <button onClick={() => mudaTarefa(t.nome)}>
                      Concluir
                    </button>
                  )}
                  {t.status === "Realizada" && "✅"}
                  <button onClick={() => editarTarefa(index)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma tarefa adicionada</p>
      )}
    </>
  );
}
