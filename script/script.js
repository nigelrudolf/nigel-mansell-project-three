const digiPetApp = {};
digiPetApp.counter = {
    pet: 0,
    treat: 0,
    treatIconDisplayCount: 0,
    heart: 0,
    heartIconDisplayCount: 0
}
digiPetApp.assets = {
    heart: "",
    treat:  "",
    audio: ""
}
digiPetApp.selector = {
    heart: "",
    treat: ""
}
digiPetApp.petBtn = $('.pet-btn').on('click', function(){});
digiPetApp.treatBtn = $('.give-treat-btn').on('click', function(){});
digiPetApp.barkBtn = $('.bark-btn').on('click', function(){});
digiPetApp.sitBtn = $('.sit-btn').on('click', function(){});
digiPetApp.jumpBtn = $('.jump-btn').on('click', function(){});


// try using an array to hold the display state (bool), use push and pop to add and remove from the array and then use a for each statement to display the actual icons

// let heartIconDisplayState = [bool,bool,bool];

digiPetApp.updatePetCounter = function() {
    digiPetApp.counter['pet']++;
}

digiPetApp.updateTreatCounter = function() {
    let petCounter = digiPetApp.counter['pet'];
    let treatCounter = digiPetApp.counter['treat'];

    if (treatCounter == 3) {
       
    } else if (petCounter >= 5 && petCounter % 5 == 0) {
        digiPetApp.counter['treat']++;
    }
}

digiPetApp.increaseTreatIcon = function() {
    let petCounter = digiPetApp.counter['pet'];
    let treatCounter = digiPetApp.counter['treat'];
    let treatIconDisplayCount = digiPetApp.counter['treatIconDisplayCount'];

    if (treatCounter == 3 && treatIconDisplayCount == 3) {
        
    } else if (petCounter >= 5 && petCounter % 5 ==0) {
            $(`.treat-o-meter ul`).append(`<li><img src="assets/treats-8bit.png" alt="dog treat icon used to indicate number of treats available"></li>`);
            digiPetApp.counter['treatIconDisplayCount']++;
    }
}

digiPetApp.increaseHeartCounter = function() {
    let petCounter = digiPetApp.counter['pet'];
    let heartCounter = digiPetApp.counter['heart'];

    if (heartCounter == 3) {
        
    } else if (petCounter >= 40 && petCounter % 40 == 0) {
        digiPetApp.counter['heart']++;
    }
}

digiPetApp.increaseHeartIcon = function() {
    let petCounter = digiPetApp.counter['pet'];
    let heartCounter = digiPetApp.counter['heart'];
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];

    if (heartCounter == 3 && heartIconDisplayCount == 3) {
        
    } else if (petCounter >= 40 && petCounter % 40 ==0) {    
        $(`.happiness ul`).append(`<li><img src="assets/heart-8bit.png" alt="heart icon used to indicate dog's level happiness"></li>`);
        digiPetApp.counter['heartIconDisplayCount']++;
    }
}

// ****************
// Give Treat Btn
// ****************
digiPetApp.treatBtnDecreaseTreatCounter = function() {
    let treatCounter = digiPetApp.counter['treat'];

    if (treatCounter > 0 && treatCounter < 4) {
        digiPetApp.counter['treat']--;
    }
}

digiPetApp.treatBtnDecreaseTreatIcon = function() {
    let treatCounter = digiPetApp.counter['treat'];
    let treatIconDisplayCount = digiPetApp.counter['treatIconDisplayCount'];

    if (treatCounter == 0 && treatIconDisplayCount == 0) {
        
    } else if (treatIconDisplayCount > 0 && treatIconDisplayCount < 4){
            $(`.treat-o-meter ul li:nth-child(1)`).remove();
            digiPetApp.counter['treatIconDisplayCount']--;
    }
}

digiPetApp.treatBtnIncreaseHeartCounter = function() {
    let heartCounter = digiPetApp.counter['heart'];
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount']; // remove
    let treatCounter = digiPetApp.counter['treat'];
    let treatIconDisplay = digiPetApp.counter['treatIconDisplayCount']; // remove


    if (heartCounter == 3 ) {
       
    } else if (treatCounter != 0) {
        digiPetApp.counter['heart']++;
    }
}

digiPetApp.treatBtnIncreaseHeartIcon = function() {
    let heartCounter = digiPetApp.counter['heart'];
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];
    let treatCounter = digiPetApp.counter['treat']; // remove
    let treatIconDisplay = digiPetApp.counter['treatIconDisplayCount'];

    if (heartCounter == 3 && heartIconDisplayCount == 3) {
        
    } else if (treatIconDisplay !== 0) {
        $(`.happiness ul`).append(`<li><img src="assets/heart-8bit.png" alt=""></li>`);
        digiPetApp.counter['heartIconDisplayCount']++;
    }
}



// ****************
// Bark Button
// ****************
digiPetApp.barkBtnDecreaseHeartCounter = function() {
    let heartCounter = digiPetApp.counter['heart'];
    if (heartCounter >= 1) {
        digiPetApp.counter['heart']--;
    }
}

digiPetApp.bark = function() {
        $('.morus').append(`<div class="woof">Woof!</div>`);
                
        setTimeout(function(){ 
            $('.woof').remove();
        }, 3000);
}

digiPetApp.barkBtnDecreaseHeartIcon = function() {
    let heartCounter = digiPetApp.counter['heart'];
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];

    if (heartCounter == 0 && heartIconDisplayCount == 0) {

    } else {
        $('.happiness ul li:nth-child(1)').remove();
        digiPetApp.counter['heartIconDisplayCount']--;
        digiPetApp.bark();
    }
}

// ****************
// Sit Button
// ****************
digiPetApp.sitBtnDecreaseHeartCounter = function() {
    let heartCounter = digiPetApp.counter['heart'];
    if (heartCounter >= 1) {
        digiPetApp.counter['heart']--;
    }
}

digiPetApp.sit = function() {
        $('.morus').append(`<div class="sit">Morus sat down</div>`);
                
        setTimeout(function(){ 
            $('.sit').remove();
        }, 3000);
}

digiPetApp.sitBtnDecreaseHeartIcon = function() {
    let heartCounter = digiPetApp.counter['heart'];
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];

    if (heartCounter == 0 && heartIconDisplayCount == 0) {

    } else {
        $('.happiness ul li:nth-child(1)').remove();
        digiPetApp.counter['heartIconDisplayCount']--;
        digiPetApp.sit();
    }
}

// ****************
// Jump Button
// ****************
digiPetApp.jumpBtnDecreaseHeartCounter = function() {
    let heartCounter = digiPetApp.counter['heart'];
    if (heartCounter >= 1) {
        digiPetApp.counter['heart']--;
    }
}

digiPetApp.jump = function() {
        $('.morus').append(`<div class="jump">Morus jumped</div>`);
                
        setTimeout(function(){ 
            $('.jump').remove();
        }, 3000);
}

digiPetApp.jumpBtnDecreaseHeartIcon = function() {
    let heartCounter = digiPetApp.counter['heart'];
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];

    if (heartCounter == 0 && heartIconDisplayCount == 0) {

    } else {
        $('.happiness ul li:nth-child(1)').remove();
        digiPetApp.counter['heartIconDisplayCount']--;
        digiPetApp.jump();
    }
}



// ****************
// Init
// ****************
digiPetApp.init = function() {

    $('.pet-btn').on('click', function(){
        digiPetApp.updatePetCounter();
        digiPetApp.updateTreatCounter();
        digiPetApp.increaseTreatIcon();
        digiPetApp.increaseHeartCounter();
        digiPetApp.increaseHeartIcon();
        console.log(digiPetApp.counter); // remove later
        // make function names more verbose
    });

    $('.give-treat-btn').on('click', function(){
        digiPetApp.treatBtnIncreaseHeartCounter();
        digiPetApp.treatBtnDecreaseTreatCounter();
        digiPetApp.treatBtnIncreaseHeartIcon();
        digiPetApp.treatBtnDecreaseTreatIcon();
        console.log(digiPetApp.counter); // remove later
    });

    $('.bark-btn').on('click', function(){
        digiPetApp.barkBtnDecreaseHeartCounter();
        digiPetApp.barkBtnDecreaseHeartIcon();
        console.log(digiPetApp.counter); // remove later
    });

    $('.sit-btn').on('click', function(){
        digiPetApp.sitBtnDecreaseHeartCounter();
        digiPetApp.sitBtnDecreaseHeartIcon();
        console.log(digiPetApp.counter); // remove later
    })

    $('.jump-btn').on('click', function(){
        digiPetApp.jumpBtnDecreaseHeartCounter();
        digiPetApp.jumpBtnDecreaseHeartIcon();
        console.log(digiPetApp.counter); // remove later
    })

    $('.pet-btn, .give-treat-btn, .bark-btn, .sit-btn, .jump-btn').on('click', function(){
        // use this space to update the display icons
    })

    
    // // Update icons
    
}

// let audio = new Audio('assets/cute.mp3');
// audio.play();

$(document).ready(function(){
    digiPetApp.init();
});

// DigiPets

// STRETCH: Welcome Screen with "Start Game" and "About" Options
// STRETCH: Incorporate relaxing audio on welcome screen and / or main screen

// Stretch: Happiness and Treat-0-Meter are set to 1

// need some kind of counter mechanism that interfaces with an updateIcons() mechanism
// clicking buttons updates a counter, updateIcons() reads counter value and displays correct number of treats and hearts

// pet-button Functionality
// Player earns a treat at 5, 10 and 15 pets
// Player earns a heart for every 40 pets
// STRETCH: Petting is animated / Cursor could be an image of a hand, last treat/heart scales up to indicate limiit reached 
// STRETCH: Possibly sounds added to match animations

// Give Treat button functionality
// Giving 1 treat adds 1 heart and removes 1 treat
// STRETCH: Animate giving treat

// Bark Button functionality
// Costs 1 heart to achieve
// Dog Barks, mvp: visual text indicator (Morus Barks)
// Remove 1 heart
// If not enough hearts, dog whimpers to encourage more petting or treats
// STRETCH: Animate barking, sound for whimpering

// Sit Button functionality
// Costs 2 hearts to achieve
// Dog Sits, mvp: visual text indicator (Morus Sits)
// If not enough hearts, dog whimpers to encourage more petting or treats
// STRETCH: Animate Sitting, sound for whimpering

// Jump Button functionality
// Costs 3 heart to achieve
// Dog Jumps, mvp: visual text indicator (Morus Jumps)
// If not enough hearts, dog whimpers to encourage more petting or treats 
// STRTECH: Animate Jumping, sound for whimpering