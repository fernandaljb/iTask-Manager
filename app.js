var Tarefa = /** @class */ (function () {
    function Tarefa(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
        this.dataCriacao = new Date();
    }
    Tarefa.prototype.renderizar = function () {
        var _this = this;
        var li = document.createElement("li");
        // 1. Criar o Checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.concluida;
        // 2. Criar o texto/conteúdo
        var texto = document.createElement("div");
        texto.innerHTML = "\n      <strong>".concat(this.titulo, "</strong>\n      <p>").concat(this.descricao, "</p>\n      <small>Criado em: ").concat(this.dataCriacao.toLocaleString(), "</small>\n    ");
        // 3. Evento do Checkbox
        checkbox.addEventListener("change", function () {
            _this.concluida = checkbox.checked;
            // Adiciona ou remove a classe CSS para estilizar a tarefa feita
            li.classList.toggle("concluida", _this.concluida);
        });
        // 4. Montagem (Ordem: Checkbox primeiro, depois o texto)
        li.appendChild(checkbox);
        li.appendChild(texto);
        return li;
    };
    return Tarefa;
}());
// --- Manipulação do DOM ---
var inputTitulo = document.getElementById("titulo_tarefa");
var inputDescricao = document.getElementById("descricao");
var botao = document.getElementById("botao-do-input");
var listaUl = document.getElementById("lista_tarefas");
botao.addEventListener("click", function () {
    var titulo = inputTitulo.value;
    var descricao = inputDescricao.value;
    if (titulo.trim() === "") {
        alert("Por favor, digite um título!");
        return;
    }
    var novaTarefa = new Tarefa(titulo, descricao);
    listaUl.appendChild(novaTarefa.renderizar());
    // Limpar os campos após adicionar
    inputTitulo.value = "";
    inputDescricao.value = "";
    inputTitulo.focus();
});
