class Tarefa {
  titulo: string;
  descricao: string;
  concluida: boolean;
  dataCriacao: Date;

  constructor(titulo: string, descricao: string) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.concluida = false;
    this.dataCriacao = new Date();
  }

  /* renderizar é um método, ou seja,( uma função dentro de uma classe) */
  renderizar(): HTMLLIElement {
    const li = document.createElement("li"); /* criar lista do ts para html */

    /* criando checkbox */
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.concluida; /* check, se concluido for verdadeiro */

    /* criando o texto */
    const texto = document.createElement("div");
    texto.innerHTML = `
      <strong>${this.titulo}</strong>
      <p>${this.descricao}</p>
      <small>Criado em: ${this.dataCriacao.toLocaleString()}</small>
    `;

    /* se vc clicar adiciona ou remove as classes com classlist, para sublinhar no css */
    checkbox.addEventListener("change", () => {
      this.concluida = checkbox.checked;
      li.classList.toggle("concluida", this.concluida);
    });

    /* colocando os elementos na tela, ou seja, passa do ts para o html (appendChild) */
    li.appendChild(checkbox);
    li.appendChild(texto);

    return li;
  }
}

/* DOM: buscando os elementos no html para o ts  */

const inputTitulo = document.getElementById(
  "titulo_tarefa",
) as HTMLInputElement;
const inputDescricao = document.getElementById("descricao") as HTMLInputElement;
const botao = document.getElementById("botao-do-input") as HTMLButtonElement;
const listaUl = document.getElementById("lista_tarefas") as HTMLUListElement;
/* se você clicar no botão, substitua o titulo e a descrição pelo valor digitado */
botao.addEventListener("click", () => {
  const titulo = inputTitulo.value;
  const descricao = inputDescricao.value;
  /* criando novo objeto (instância) da classe Tarefa */
  const novaTarefa = new Tarefa(
    titulo,
    descricao,
  ); /* o objeto se chama novaTarefa */
  listaUl.appendChild(novaTarefa.renderizar()); /* colocando elena tela */
});
