// Desafio para o processo seletivo da Eduqo.
// Amanda Gutierrez Sato

// Para rodar o código, mude o nome do arquivo para 'desafio.js' e 
// use o comando 'node desafio.js' pelo terminal, no diretório
// onde está o script.

// Link para o respositório no GitHub:
// https://github.com/AmandaSato/desafio_eduqo

function Piramide(n){

    // Largura máxima da pirâmide:
    const L = 1 + (n-1)*2;

    // Posição do meio:
    const meio = (L+1)/2 -1

    // Construção da Pirâmide:
    const linha = Array(L);

    // Criando o topo da pirâmide:
    for(i = 0; i<L; i++){
        if(i == meio){
            linha[i] = "*"
        }
        else{
            linha[i] = "_"
        }
    }
    console.log(linha.join(""))

    // Criando as camadas da pirâmide até a base:
    for(j = 0; j<n; j++){
        linha[meio + j] = "*"
        linha[meio - j] = "*"
        console.log(linha.join(""))
    }
}

// Altura da pirâmide:
const n = 20;

// Chamando a função:
Piramide(n);



