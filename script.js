// let audio = new Audio('assets/cute.mp3');
// audio.play();



// let petCounter = 0;




let petCounter = 0;

$(document).ready(function(){
    
    let newGame = true;
    
    

    if (newGame == true) {
        $('.treats').hide();
        $('.hearts').hide();
    }

    $('.pet-btn').click(function(){
        petCounter++;

        if (petCounter >= 5) {
            $('.treat-1').show();
        } 
        if (petCounter >= 10) {
            $('.treat-2').show();
        } 
        if (petCounter >= 15) {
            $('.treat-3').show();
        }

        // $('.pet-btn').click(function(){
        //     petCounter++;
    
        //     if (petCounter >= 5) {
        //         $('.treat-1').show();
        //     } 
        //     if (petCounter >= 10) {
        //         $('.treat-2').show();
        //     } 
        //     if (petCounter >= 15) {
        //         $('.treat-3').show();
        //     }
    

        // return petCounter;
    });


    

    

    
    });



// Main screen plays audio in loop and awaits user to select play game or about
// DigiPets

// Play game
// Happiness and Treat-0-Meter are set to 1
// Petting increases happiness and treat-o-meter count
// 10 pets = 1 treat
// Clicking a trick when happiness is < required count results in a whimper to encourage more petting or treats
// User should be informed somehow that there are no treats or tricks are not able to be performed