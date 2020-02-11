function sum (min, max){
    let result = 0;
    let a = Number(min);
    let b = Number(max);
    for (let i = a; i <= b; i++){
        result+=i;
    }
    return result;
}

console.log(sum(1, 5))