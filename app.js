var Tarefa = /** @class */ (function () {
    function Tarefa(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
        this.dataCriacao = new Date();
    }
    /* renderizar é um método, ou seja,( uma função dentro de uma classe) */
    Tarefa.prototype.renderizar = function () {
        var _this = this;
        var li = document.createElement("li"); /* criar lista do ts para html */
        /* criando checkbox */
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.concluida; /* check, se concluido for verdadeiro */
        /* criando o texto */
        var texto = document.createElement("div");
        texto.innerHTML = "\n      <strong>".concat(this.titulo, "</strong>\n      <p>").concat(this.descricao, "</p>\n      <small>Criado em: ").concat(this.dataCriacao.toLocaleString(), "</small>\n    ");
        /* se vc clicar adiciona ou remove as classes com classlist, para sublinhar no css */
        checkbox.addEventListener("change", function () {
            _this.concluida = checkbox.checked;
            li.classList.toggle("concluida", _this.concluida);
        });
        /* colocando os elementos na tela, ou seja, passa do ts para o html (appendChild) */
        li.appendChild(checkbox);
        li.appendChild(texto);
        return li;
    };
    return Tarefa;
}());
/* DOM: buscando os elementos no html para o ts  */
var inputTitulo = document.getElementById("titulo_tarefa");
var inputDescricao = document.getElementById("descricao");
var botao = document.getElementById("botao-do-input");
var listaUl = document.getElementById("lista_tarefas");
/* se você clicar no botão, substitua o titulo e a descrição pelo valor digitado */
botao.addEventListener("click", function () {
    var titulo = inputTitulo.value;
    var descricao = inputDescricao.value;
    /* criando novo objeto (instância) da classe Tarefa */
    var novaTarefa = new Tarefa(titulo, descricao); /* o objeto se chama novaTarefa */
    listaUl.appendChild(novaTarefa.renderizar()); /* colocando elena tela */
});
