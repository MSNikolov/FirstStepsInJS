function solve (x, y, operator){
    let result = 0;
    switch(operator){
        case "+": result = x+y; break;
        case "-": result = x-y; break;
        case "*": result = x*y; break;
        case "/": result = x / y; break;
        case "%": result = x % y; break;
        case "**": result = x ** y; break;
    }
    return result;
}

console.log(solve(1 ,2, "+"))