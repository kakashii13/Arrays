let numbers = [];



function getNumbers(){
    for(let i = 0; i < 5; i++){
        let num = +prompt("Ingrese un numero")
        numbers.push(num)
    }
}
getNumbers()

console.log(numbers)
console.log(numbers.sort((a,b) => a - b))