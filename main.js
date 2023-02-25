let x = prompt(`Enter number: `).split('')
for(let j = 0; j < x.length; j++){
    for(let i = 0; i < x.length - 1 - j; i++){
        if(x[i] > x[i + 1]){
            let y = x[i]
            x[i] = x[i + 1]
            x[i + 1] = y
        }
    }
}
alert(x)