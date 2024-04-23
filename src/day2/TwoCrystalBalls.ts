export default function two_crystal_balls(breaks: boolean[]): number {

    // O (N^)

    // aqui definimos qual será a estratégia de pulo
    // na intenção de otimizar a busca
    // aqui nós setamos que vamos ao invés de passar por cada um dos itens, um de cada vez
    // vamos pulando pelo valor da raiz quadrada do tamanho do array
    // apenas vamos iterando o valor dessa raiz
    const quantidadePulo = Math.floor(Math.sqrt(breaks.length)); 

    let i = quantidadePulo; 

    // aqui, pulando através do valor do quantidade de pulo (raiz quadrada do tamanho do array)
    // aqui é interessante pois como estamos pulando, podemos localizar um item true, porém não temos como saber se é o primeiro
    // outro ponto, que ao final desse loop, 
    // o valor de i é ajustado para a posição do primeiro item verdadeiro encontrado (estamos pulando, lemnbre-se) ou 
    // para o último índice percorrido no loop (caso nenhum item verdadeiro seja encontrado)
    for (; i < breaks.length; i = i + quantidadePulo) { 

        // caso localize algum item true, apenas sai
        if (breaks[i]) {
            break;
        }
    }

    // aqui nós estamos ajustando o i para que ele retrocesa para a posição onde a 
    // última verificação foi feita antes de localizarmos um true no primeiro loop
    // isso permite que seja possível voltar a posição mais alta onde temos certeza que ainda não tem nenhum true
    // e com isso diminuir a quantidade de verificações
    i = i - quantidadePulo; 

    // Aqui agora passamos por cada um dos itens iterando +1 porém com a diferença que
    // não precisamos necessariamente percorrer todo o array, visto que eliminamos algumas posições com o código acima
    // esse loop permite que localizemos o primeiro true do array
    for (let j = 0; (j <= quantidadePulo) && (i < breaks.length); ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    // caso não localize nenhum retorna -1
    return -1;
}