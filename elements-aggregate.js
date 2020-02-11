function agg (params){
    let sum = (params.reduce((a, b) => a + b, 0))
    let inverseSum = (params.reduce((a, b) => a + 1 / b, 0))
    let concat = params.reduce((a, b) => a + b.toString(), "")
    console.log(sum)
    console.log(inverseSum)
    console.log(concat)
}

agg ([1, 2, 3])

