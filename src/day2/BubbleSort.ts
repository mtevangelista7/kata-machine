export default function bubble_sort(arr: number[]): void {

    // nesse primeiro for, passamos uma vez por cada item do array
    for (let i = 0; i < arr.length; i++) {

        // aqui passamos novamente por cada um dos itens visto que pode ser preciso passar mais de uma
        // vez pelo array para garantir a ordenação
        //
        for (let j = 0; j < arr.length - 1 - i; j++) {

            // Caso o item atual seja maior que o proximo item
            if (arr[j] > arr[j + 1]) {

                // realiza o swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}