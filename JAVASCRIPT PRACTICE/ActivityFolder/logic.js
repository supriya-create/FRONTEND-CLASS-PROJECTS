
// export function avg(a,b,c,d,e){
//     return (a+b+c+d+e)/5;
// }

// export function max(arr){
//     let max = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

export const average = (a,b,c,d,e) => (a+b+c+d+e)/5;
export const bigger = (...numbers) => {
    return numbers.filter(n=>n>3);
}