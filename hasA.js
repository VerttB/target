const strings = ["banana", "carro", "oleo", "leite", "node", "donnut"]

const hasA = (string) => {
    let aIncluded = false;
    let quantity = 0;

    string.split("").forEach(l => {
        if(l === 'A' || l === 'a'){
            aIncluded = true;
            quantity++;
        }
    })

    return quantity;
}


strings.forEach(s => {
    let q = hasA(s);
    console.log(`A string ${s} ${q > 0 ? `possui ${q}` : 'não possui'} a's`)
})
    
