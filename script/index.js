"use strict"

let valueHuman = "";
let valueComputer = "";


function getComputerChoice( random, value1, value2, value3){

    value1 = 1;
    value2 = 2;
    value3 = 3;
    random = Math.floor(Math.random() * 3) + 1;
    let valor; 
    

    if ( random === value1 ) {
        valor = "piedra"
    } else if ( random === value2 ) {
        valor = "papel"
    } else if ( random === value3 ) {
        valor = "tijeras"
    }

    valueHuman = valor;

    console.log(`La eleccion de la computadora es: ${ valor }`);

}


function getHumanChoice() {

    let question = prompt("¿Que elijes? Piedra, Papel o Tijeras?");
    let minus = question.toLowerCase();

    valueComputer = minus;

    console.log( `Ingresaste: ${question}` );

}


let humanScore = 0;
let computerScore = 0;


function playRound() {

    getHumanChoice();
    getComputerChoice();

    if ( valueHuman === valueComputer ) {
        console.log( `¡Empate!, Tu ingresaste: ${ valueHuman } y la maquina ingreso: ${ valueComputer } Intentalo Nuevamente` );
        console.log(`Puntuacion: Por ser empate a ninguno de los dos se le asigna puntos`);
    } else if ( 
    (valueHuman === "piedra" && valueComputer === "papel") || 
    (valueHuman === "papel" && valueComputer === "tijeras") || 
    (valueHuman === "tijeras" && valueComputer === "piedra")
    ) {
        console.log( `¡Ganaste!, ${ valueComputer }, Le gana a ${ valueHuman }, Sigue asi` );
        humanScore = humanScore + 1;
        console.log(`Puntuacion: llevas: ${humanScore} puntos, La maquina lleva ${computerScore} puntos `);
    } else {
        console.log(`¡Perdiste!, ${ valueHuman } le gana a ${ valueComputer } Intenta Nuevamente`);
        computerScore = computerScore + 1
        console.log(`Puntuacion: llevas: ${humanScore} puntos, La maquina lleva ${computerScore} puntos `);
    }

}


function playGame() {

    containerfor: for (let round1 = 0; round1 == 0; round1++  ) {
        
        console.warn("RONDA 1");
        alert("Ingresa Piedra Papel o Tijeras para Jugar");
        alert("RONDA 1");
        playRound()
        
        for (let round2 = 0; round2 == 0; round2++  ) {

            console.warn("RONDA 2");
            alert("RONDA 2");
            playRound()

            for (let round3 = 0; round3 == 0; round3++) {

                console.warn("RONDA 3");
                alert("RONDA 3");
                playRound()

                for (let round4 = 0; round4 == 0; round4++) {

                    console.warn("RONDA 4");
                    alert("RONDA 4");
                    playRound()

                    for (let round5 = 0; round5 == 0; round5++ ) {

                        console.warn("RONDA 5");
                        alert("RONDA 5");
                        playRound()

                    }

                }

            }

        }

        
        if ( humanScore > computerScore ) {
            console.error(`¡Felicidades!, Eres el ganador Con: ${ humanScore } puntos, La maquina: ${ computerScore } `);
        } else if ( computerScore > humanScore ) {
            console.error(`¡Lo siento!, La maquina te ha ganado Con: ${ computerScore } Puntos, Tus puntos: ${ humanScore }`);
        } else if ( computerScore == humanScore ) {
            console.error(`Han quedado empate Tus puntos: ${ humanScore }, La maquina: ${ computerScore }`);
        }

    }

}


playGame()
