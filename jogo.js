const prompt = require("prompt-sync")();
const jogos = [];
const validarIndice = indice => indice >= 0 && indice < jogos.length
const modelo = () => {
    const nome = prompt("Nome do jogo: ");
    const anoLancamento = prompt("Ano de lançamento: ");
    const duracao = prompt("Duração média em horas: ");
    const preco = prompt("Preço: ");
    const estudio = prompt("Qual o estúdio do jogo? ");
    let sequencia = -1
    if(listar()){
        const sequencia = prompt("Qual é a sequência do jogo? Digite 0 se não houver ") - 1;
    }


    if (
        nome != "" &&
        anoLancamento >= 1962 && anoLancamento <= 2024 &&
        duracao > 0 &&
        preco == 0 &&
        estudio != "" &&
        sequencia > 0 &&
        ((sequencia >= -1 && sequencia < jogos.length) || jogos.length == 0)
    ) {
        return {
            nome,
            anoLancamento, 
            duracao, 
            preco, 
            estudio, 
            sequencia
        };
    } else {
        console.log("Dados inválidos");
    }
}
const criar = () => {
    const jogo = modelo()
    if (jogo != undefined) {
        jogos.push(jogo)
        console.log("Jogo cadastrado com sucesso! ");   
    }
};

const listar = () => {
    if (jogos.length == 0) {
        console.log ("Nenhum jogo encontrado");
        return false
    } else {
        jogos.forEach((jogo, indice) => {
            console.log(`
            ${indice+1}.
            Nome: ${jogo.nome}
            Ano de lançamento: ${jogo.anoLancamento}
            Duração: ${jogo.duracao}
            Preço: ${jogo.preco}
            Estúdio: ${jogo.estudio}
            Sequência: ${jogo.sequencia}
            `);
        });
    }
}
const atualizar = () => {
    if (!listar()) {
        return
    }
    const indice = prompt("Qual é o índice que deseja atualizar? ") - 1;
    const jogo = modelo()
    if (
        jogo != undefined &&
        validarIndice(indice)
    ) {
        jogos[indice] = jogo
        console.log("Jogo atualizado com sucesso");
    }else{
        console.log("Falha na atualização");
    }
};
const remover = () => {
    if (!listar()) {
        return
    }
    const indice = prompt("Qual índice você deseja remover? ")
    if (validarIndice(indice)) {
        jogos.splice(indice, 1);
        console.log("Jogo removido com sucesso");
    }else{
        console.log("Falha na remoção");
    }
}
module.exports = {
    criar,
    atualizar,
    listar,
    remover
}
