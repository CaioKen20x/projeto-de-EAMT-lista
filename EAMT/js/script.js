function adicionarItem() {
    const select = document.getElementById("eletro")
    const valorSelecionado = select.value;
    const tabela = document.getElementById("tabela").querySelector("tbody");

    if (!valorSelecionado) {
        alert ("Por favor selecione um valor");
        return (0);
    }


const dados = {
    geladeira: {
        intervalo: "A cada seis meses",
        observacoes: "Limpar bobinas e verificar vedação da porta"
    },
    lavadora: {
        intervalo: "Semanal",
        observacoes: "Use sabão na quantidade correta para evitar excesso de espuma"
    },
    microondas: {
        intervalo: "Semanal",
        observacoes: "Esterelizar gorduras"
    },
    ar: {
        intervalo: "Quinzenal",
        observacoes: "Use protetor de voltagem para evitar danos elétricos."
    }
};

    const item = dados[valorSelecionado];

    const novaLinha = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = select.options[select.selectedIndex].text;

    const tdIntervalo = document.createElement("td");
    tdIntervalo.textContent = item.intervalo;

    const tdObservacoes = document.createElement("td");
    tdObservacoes.textContent = item.observacoes;

    novaLinha.appendChild(tdNome);
    novaLinha.appendChild(tdIntervalo);
    novaLinha.appendChild(tdObservacoes);

    tabela.appendChild(novaLinha);

    select.value = "";
}