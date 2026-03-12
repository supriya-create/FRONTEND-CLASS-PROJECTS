export const average = (a,b,c,d,e) => (a+b+c+d+e)/5;

export const bigger = (...numbers) => {
    return numbers.filter(n=>n>3);
}