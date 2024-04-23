export default function bs_list(haystack: number[], needle: number): boolean {

    let low: number = 0;
    let high: number = haystack.length;

    do {
        // meio = arredonda (para baixo) a soma do menor número, com a divisão entre a subtração do maior para o menor divido por 2
        // é a forma usada para recuperar o número do meio ser ser quebrado, exemplo num array de 3 posições
        // (4, 5, 6) => Arredonda(0 + (3 - 0) / 2) o que seria = 1 ou seja 5 que é a posição do meio 
        const positionMid: number = Math.floor(low + (high - low) / 2);

        // aqui pega o valor do meio do array
        const valueMid = haystack[positionMid];

        // caso o valor seja o procurado, retorna e finaliza
        if (valueMid === needle) return true;

        // Caso o valor seja maior que o procurado
        if (valueMid > needle) {
            
            // Falamos que agora o maior é a posição do meio
            // imagine o array (4, 5, 6, 7, 8), o 6 (posição 2) seja maior que o prcurado (5)
            // agora o mais alto = 2, o while navega até o 6 (posição 2) e não mais até o 8 (ultima posição)
            // aqui não precisamos usar positionMid + 1, pois a condição é low < high e não <= então ele não irá verificar o 6
            // o array ficaria (4, 5, 6)
            high = positionMid;
        }
        // Caso o valor seja menor que o procurado
        else {
            
            // Falamos que o menor valor recebe a posição do meio + 1 pois
            // imagine o array (1, 2, 3, 4, 5, 6, 7, 8, 9), o 5 (posição 4) seja menor que o procurado (8)
            // o menor valor agora é = (4 + 1) = (valor 6), usamos o +1 pois dessa forma não temos que verificar novamente o valor 5
            // o array ficaria (6, 7, 8, 9)
            low = positionMid + 1;
        }
    } while (low < high);

    return false;
}