// let audio = new Audio('assets/cute.mp3');
// audio.play();

// Happiness and Treat-0-Meter are set to 1
let petCounter = 0;
let treatCounter = 0;
let heartCounter = 0;

const treats = ['.treat-1','.treat-2','.treat-3'];
const hearts = ['.heart-1','.heart-2','.heart-3'];

$(document).ready(function(){
    
    let newGame = true;

    if (newGame == true) {
        $('.treats').hide();
        $('.hearts').hide();
    }

    // Pet Button Functionality
    // Treats are given at 5, 10 and 15 pets
    $('.pet-btn').click(function(){
        petCounter++;
        if (treatCounter == 3) {
            console.log("Treat limit reached"); // use a jquery method to scale up and down the size of the last treat indicating limit has been reached
        } else if (petCounter >= 5 && petCounter % 5 == 0) {
            treatCounter++;
            console.log(`${treatCounter} treat(s)`); //debug
            for (let i = 0; i < treatCounter; i++) {
                $(treats[i]).show();
            }
        } 
        // 1 happiness heart is awarded for every 40 pets
        if (heartCounter == 3) {
            console.log("Heart limit reached"); // use a jquery method to scale up and down the size of the last heart indicating limit has been reached
        } else if (petCounter >= 40 && petCounter % 40 == 0) {
            heartCounter++;
            console.log(`${heartCounter} heart(s)`); //debug
            for (let i = 0; i < heartCounter; i++) {
                $(hearts[i]).show();
            }
        }
        
    });


    

    

    
    });



// Main screen plays audio in loop and awaits user to select play game or about
// DigiPets

// Play game

// Petting increases happiness and treat-o-meter count
// 10 pets = 1 treat
// Clicking a trick when happiness is < required count results in a whimper to encourage more petting or treats
// User should be informed somehow that there are no treats or tricks are not able to be performed