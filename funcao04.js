//calcular o fatorial de um número

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat*= c               //(fat = 1; c=5 (fa=5)), (fat = 5 ; c=4(fat=20)
        console.log(fat)      // (fat = 20 ; c=3(fat=60), (fat = 60 ; c=2(fat=120)
                              // (fat = 120 ; c=1 (fat=120)
  }
return fat 
}
console.log(fatorial(5))