export default function linear_search(haystack: number[], needle: number): boolean {

    // passamos por cada um dos itens do array e verificamos se é o desejado / O(N)
    for (let now: number = 0; now < haystack.length; now++) {
        if (haystack[now] === needle) return true;
    }

    return false;
}