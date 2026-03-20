/*type Tarefa = {
    descricao: string;
    prioridade: number; // 1 = maior prioridade
    concluida: boolean;
  };
  
  function executarTarefas(
    tarefas: Tarefa[],
    callback: (descricao: string, indice: number, total: number) => void,
    intervalo: number = 1000
  ): void {
    // Criar cópia mantendo índice original
    const tarefasComIndice = tarefas.map((tarefa, index) => ({
      ...tarefa,
      indiceOriginal: index,
    }));
  
    // Ordenar por prioridade (1 = maior prioridade)
    tarefasComIndice.sort((a, b) => a.prioridade - b.prioridade);
  
    let contador = 0;
    const total = tarefasComIndice.length;
  
    const timer = setInterval(() => {
      if (contador >= total) {
        clearInterval(timer);
        return;
      }
  
      const tarefaAtual = tarefasComIndice[contador];
  
      // Interromper se encontrar "Cancelar"
      if (tarefaAtual.descricao === "Cancelar") {
        clearInterval(timer);
        return;
      }
  
      // Marcar como concluída (no array original)
      tarefas[tarefaAtual.indiceOriginal].concluida = true;
  
      // Chamar callback
      callback(
        tarefaAtual.descricao,
        tarefaAtual.indiceOriginal,
        total
      );
  
      contador++;
  
      // Parar ao finalizar todas
      if (contador >= total) {
        clearInterval(timer);
      }
    }, intervalo);
  }
  
  // Exemplo de uso
  const tarefas: Tarefa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false },
    { descricao: "Enviar e-mail", prioridade: 3, concluida: false },
    { descricao: "Reunião com equipe", prioridade: 1, concluida: false },
  ];
  
  function imprimirTarefa(
    descricao: string,
    indice: number,
    totalTarefas: number
  ): void {
    console.log(`Tarefa concluída: ${descricao}`);
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
  }
  
  executarTarefas(tarefas, imprimirTarefa, 1500); */


  type Tarefa = {
    descricao: string;
    prioridade: number; // 1 = maior prioridade
    concluida: boolean;
  };
  
  const tarefas: Tarefa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false },
    { descricao: "Enviar e-mail", prioridade: 3, concluida: false },
    { descricao: "Reunião com equipe", prioridade: 1, concluida: false },
  ];
  
  // Função que será chamada a cada tarefa concluída
  function imprimirTarefa(
    descricao: string,
    indice: number,
    totalTarefas: number
  ): void {
    console.log(`Tarefa concluída: ${descricao}`);
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
  }
  
  // Função principal que executa as tarefas com intervalo
  function executarTarefas(
    tarefas: Tarefa[],
    callback: (descricao: string, indice: number, total: number) => void,
    intervalo: number = 1000
  ): void {
    // Ordena as tarefas pela prioridade (menor número = maior prioridade)
    tarefas.sort((a, b) => a.prioridade - b.prioridade);
  
    let contador = 0;
  
    const interval = setInterval(() => {
      const total = tarefas.length;
  
      if (
        contador >= total ||
        tarefas[contador]?.descricao === "Cancelar"
      ) {
        clearInterval(interval);
        return;
      }
  
      const tarefa = tarefas[contador];
  
      if (tarefa) {
        // Marca como concluída
        tarefa.concluida = true;
  
        // Executa o callback
        callback(tarefa.descricao, contador, total);
  
        // Avança para próxima tarefa
        contador++;
      }
    }, intervalo);
  }
  
  // Executa
  executarTarefas(tarefas, imprimirTarefa, 1500);