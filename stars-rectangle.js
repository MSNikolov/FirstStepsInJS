function draw (a = 5){
    for (let i = 0; i < a; i++){
        let row = Array(a).fill("*");
        console.log(row.join(" "));
    }
}

draw(6);