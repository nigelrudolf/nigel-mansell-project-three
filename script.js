
// let audio = new Audio('assets/cute.mp3');
// audio.play();

// Happiness and Treat-0-Meter are set to 1
let petCounter = 0;
let treatCounter = 0;
let heartCounter = 0;

$(document).ready(function(){
    
    let newGame = true;

    if (newGame == true) {
        $('.treats').hide();
        $('.hearts').hide();
    }

    // pet-button Functionality
    // Treats are given at 5, 10 and 15 pets
    // change this to the .on('click', function(event){})

    $('.pet-btn').on('click', function(){
        petCounter++;
        if (treatCounter == 3) {
            console.log("Treat limit reached"); // use a jquery method to scale up and down the size of the last treat indicating limit has been reached
        } else if (petCounter >= 5 && petCounter % 5 == 0) {
            treatCounter++;
            console.log(`${treatCounter} treat(s)`); //debug
            $('.treat-o-meter ul').append(`<li><img src="assets/treats-8bit.png" alt=""></li>`);
        } 
        // 1 happiness heart is awarded for every 40 pets
        if (heartCounter == 3) {
            console.log("Heart limit reached"); // use a jquery method to scale up and down the size of the last heart indicating limit has been reached
        } else if (petCounter >= 40 && petCounter % 40 == 0) {
            heartCounter++;
            console.log(`${heartCounter} heart(s)`); //debug
            $('.happiness ul').append(`<li><img src="assets/heart-8bit.png" alt=""></li>`);
        }
        
    });

    $('.give-treat-btn').on('click', function(){
        
    });

});

// STRETCH: Welcome Screen with "Start Game" and "About" Options

// Happiness and Treat-0-Meter are set to 0
// Stretch: Happiness and Treat-0-Meter are set to 1

// pet-button Functionality
// Player earns a treat at 5, 10 and 15 pets
// Player earns a heart for every 40 pets
// STRETCH: Petting is animated / Cursor be an image of a hand, last treat/heart scales up to indicate limiit reached 
// STRETCH: Possibly sounds added to match animations

// Give Treat button functionality
// Giving 1 treat adds 1 heart


// Bark Button functionality
// Costs 1 heart to achieve
// Dog barks, mvp: visual text indicator (Bark)

// DigiPets

// Play game

// Petting increases happiness and treat-o-meter count
// 10 pets = 1 treat
// Clicking a trick when happiness is < required count results in a whimper to encourage more petting or treats
// User should be informed somehow that there are no treats or tricks are not able to be performed



// Main screen plays audio in loop and awaits user to select play game or about