function area (a){
    if (typeof a === "number"){
        let result = Math.PI*a*a;
        console.log(result.toFixed(2))
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof a}.`)
    }
}

area(5)