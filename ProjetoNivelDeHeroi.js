let nomeDoHeroi = "Carinha"
let nivelDoHeroi = 100000;
let rank 

if (nivelDoHeroi <= 1000) {
    rank = "Ferro";
} else if (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000){
    rank ="Bronze";
} else if (nivelDoHeroi >= 2001 && nivelDoHeroi <=5000){
   rank = "Prata"
} else if (nivelDoHeroi >=5001 && nivelDoHeroi <=7000){
   rank = "Ouro"
} else if (nivelDoHeroi >=7001 && nivelDoHeroi <= 8000){
    rank = "Platina"
} else if (nivelDoHeroi >=8001 && nivelDoHeroi <= 9000){
     rank = "Ascedente"
} else if (nivelDoHeroi >=9001 && nivelDoHeroi<= 10000){
    rank = "Imortal"
} else if (nivelDoHeroi >=10001){
    rank = "Radiante"
}
console.log ("O Herói de Nome " + nomeDoHeroi + " está no nível de " + rank)