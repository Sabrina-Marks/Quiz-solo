const notaUm = prompt("qual sua primeira nota?")
const notaDois = prompt("qual sua segunda nota?")
const notaTres = prompt("qual sua terceira nota?")

let resultadoGeral = (Number(notaUm) + Number(notaDois) + Number(notaTres)) / 3
console.log(resultadoGeral)

if(resultadoGeral<=5){
    console.log("Infelizmente foi reprovado")
} else if(resultadoGeral>=6 && resultadoGeral<=8){
    console.log("boa, chegou lá")
} else{
    console.log("parabens, foi aprovado")
}