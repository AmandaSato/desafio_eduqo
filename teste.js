const matriz = 
[[2, 1, 1, 1, 1, 3],
[1, 2, 1, 1, 3, 1],
[1, 1, 2, 3, 1, 1],
[1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 2, 1],
[1, 1, 1, 1, 1, 2]]

function maiorProduto(matriz){

    let produtoH = 1;
    let produtoV = 1;
    let produtoD = 1;
    let listaProdutosHorizontal = [];
    let listaProdutosVertical = [];
    let listaProdutosDiagonal = [];

    // Linhas e colunas
    for (let i=0 ; i < matriz.length; i++){
        for (let j=0 ; j < matriz[i].length; j++){
            produtoH *= matriz[i][j];
            produtoV *= matriz[j][i];
        }
        listaProdutosHorizontal[i]= produtoH;
        listaProdutosVertical[i] = produtoV;
        produtoH = 1;
        produtoV = 1;
    }
    console.log(listaProdutosHorizontal);
    console.log(listaProdutosVertical);

    // Diagonal
    for (let w=0 ; w < 5; w++){
        
    }

}

maiorProduto(matriz);