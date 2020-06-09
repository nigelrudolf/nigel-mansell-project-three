const digiPetApp = {};
digiPetApp.counter = {
    pet: 0,
    treat: [],
    treatIconDisplayCount: 0,
    heart: [],
    heartIconDisplayCount: 0,
}
digiPetApp.assets = {
    heart: `<li><img src="assets/heart-8bit.png" alt="heart icon used to indicate dog's level happiness"></li>`,
    treat:  `<li><img src="assets/treats-8bit.png" alt="dog treat icon used to indicate number of treats available"></li>`,

}
digiPetApp.trickDialogue = {
    woof: '<div class="woof">Woof!</div>',
    sit: '<div class="sit">Morus sat down</div>',
    jump: '<div class="jump">Morus jumped</div>'
}
digiPetApp.selector = {
    heart: '.happiness ul li:nth-child(1)',
    treat: '.treat-o-meter ul li:nth-child(1)',
    woof: '.woof',
    sit: '.sit',
    jump: '.jump'
}


// *******
// Pet Btn
// *******

digiPetApp.increasePetCounter = function() {
    digiPetApp.counter['pet']++;
}

digiPetApp.petBtnIncreaseTreatCounter = function() {
    let petCounter = digiPetApp.counter['pet'];
    let treatCounter = digiPetApp.counter.treat;
    if (treatCounter.length == 3) {
        
    } else if (petCounter >= 5 && petCounter % 5 == 0) {
        digiPetApp.counter.treat.push(true);   
    }
}

digiPetApp.appendIcons = function() {
    let treatIcon = digiPetApp.assets.treat;
    const treats = digiPetApp.counter.treat;
    $('.treat-o-meter ul li').remove();
    digiPetApp.counter['treatIconDisplayCount'] = 0;
    treats.forEach((treat) => {
        $(`.treat-o-meter ul`).append(treatIcon);
        digiPetApp.counter['treatIconDisplayCount']++;
      })
}

digiPetApp.updateIcons = function() {

    let treatCounter = digiPetApp.counter.treat;
    let treatIconDisplayCount = digiPetApp.counter['treatIconDisplayCount'];

    if (treatCounter.length == 3 && treatIconDisplayCount == 3) {

    } else {
       this.appendIcons();
    }
    
}

digiPetApp.petBtnIncreaseHeartCounter = function() {
    let petCounter = digiPetApp.counter['pet'];
    let heartCounter = digiPetApp.counter.heart;

    if (heartCounter.length == 3) {
        
    } else if (petCounter >= 40 && petCounter % 40 == 0) {
        digiPetApp.counter.heart.push(true);
    }
}

digiPetApp.petBtnIncreaseHeartIcon = function() {
    let petCounter = digiPetApp.counter['pet'];
    let heartCounter = digiPetApp.counter.heart;
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];

    if (heartCounter.length == 3 && heartIconDisplayCount == 3) {
        
    } else if (petCounter >= 40 && petCounter % 40 ==0) {   
        let heartIcon = digiPetApp.assets.heart; 
        $(`.happiness ul`).append(heartIcon);
        digiPetApp.counter['heartIconDisplayCount']++;
    }
}

// ****************
// Give Treat Btn
// ****************
digiPetApp.treatBtnDecreaseTreatCounter = function() {
    let treatCounter = digiPetApp.counter.treat;

    if (treatCounter.length > 0 && treatCounter.length < 4) {
        digiPetApp.counter.treat.pop();
    }
}



digiPetApp.treatBtnDecreaseTreatIcon = function() {
    let treatIconDisplayCount = digiPetApp.counter['treatIconDisplayCount'];
    let treatCounter = digiPetApp.counter.treat;

    if (treatCounter.length == 0 && treatIconDisplayCount == 0) {
        
    } else if (treatIconDisplayCount > 0 && treatIconDisplayCount < 4){
            digiPetApp.counter['treatIconDisplayCount']--;

            let treatIcon = digiPetApp.assets.treat;
            const treats = digiPetApp.counter.treat;
            $('.treat-o-meter ul li').remove();

            treats.forEach((treat) => {
                $(`.treat-o-meter ul`).append(treatIcon);
              })
    }
}

digiPetApp.treatBtnIncreaseHeartCounter = function() {
    let heartCounter = digiPetApp.counter.heart;
    let treatCounter = digiPetApp.counter.treat;

    if (heartCounter.length == 3 ) {
       
    } else if (treatCounter.length != 0) {
        digiPetApp.counter.heart.push(true);
    }
}

digiPetApp.treatBtnIncreaseHeartIcon = function() {
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];
    let treatIconDisplayCount = digiPetApp.counter['treatIconDisplayCount'];

    let heartCounter = digiPetApp.counter.heart;


    if (heartCounter.length == 3 && heartIconDisplayCount == 3) {
        
    } else if (treatIconDisplayCount !== 0) {
        let heartIcon = digiPetApp.assets.heart;
        const hearts = digiPetApp.counter.heart;
        $('.happiness ul li').remove();
        digiPetApp.counter['heartIconDisplayCount'] = 0; // potentially remove
        hearts.forEach((heart) => {
            $(`.happiness ul`).append(heartIcon);
            digiPetApp.counter['heartIconDisplayCount']++; // potentially remove
          })

    }
}

// ****************
// Trick Buttons
// ****************
digiPetApp.decreaseCounter = function(counterType) {
    let counter = digiPetApp.counter[counterType];
    if (counter.length >= 1) {
        digiPetApp.counter[counterType].pop();
    }
}

digiPetApp.decreaseHeartIcon = function() {
    let heartCounter = digiPetApp.counter.heart;
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];

    if (heartCounter.length == 0 && heartIconDisplayCount == 0) {

    } else {
        let heartIcon = digiPetApp.assets.heart;
        const hearts = digiPetApp.counter.heart;
        $('.happiness ul li').remove();
        digiPetApp.counter['heartIconDisplayCount'] = 0; // this clears the heart[] each time
        hearts.forEach((heart) => {
            $(`.happiness ul`).append(heartIcon);
            digiPetApp.counter['heartIconDisplayCount']++; // this starts from 0 and increases for every true value stored in hearts[]
          })
          
        return true;
    }
}

digiPetApp.doTrick = function(trickDialogueSelector) {
    let trickDialogue = digiPetApp.trickDialogue[trickDialogueSelector];
    let selector = digiPetApp.selector[trickDialogueSelector];
    $('.morus').append(trickDialogue);
    setTimeout(function(){ 
        $(selector).remove();
    }, 3000);
}


// ****************
// Init
// ****************
digiPetApp.init = function() {

    $('.pet-btn').on('click', function(){
        digiPetApp.increasePetCounter();
        digiPetApp.petBtnIncreaseTreatCounter();
        digiPetApp.updateIcons(); // treat icons
        digiPetApp.petBtnIncreaseHeartCounter();
        digiPetApp.petBtnIncreaseHeartIcon();

        console.log(digiPetApp.counter); // remove later
    });

    $('.give-treat-btn').on('click', function(){
        digiPetApp.treatBtnIncreaseHeartCounter();
        digiPetApp.treatBtnDecreaseTreatCounter();
        digiPetApp.treatBtnIncreaseHeartIcon();
        digiPetApp.treatBtnDecreaseTreatIcon();
        console.log(digiPetApp.counter); // remove later
    });

    $('.bark-btn').on('click', function(){
        digiPetApp.decreaseCounter("heart");
        let heartIconDecrease = digiPetApp.decreaseHeartIcon();
        if (heartIconDecrease) {
            digiPetApp.doTrick("woof");
        }
        console.log(digiPetApp.counter); // remove later
    });

    $('.sit-btn').on('click', function(){
        digiPetApp.decreaseCounter("heart");
        let heartIconDecrease = digiPetApp.decreaseHeartIcon();
        if (heartIconDecrease) {
            digiPetApp.doTrick("sit");
        }
        console.log(digiPetApp.counter); // remove later
    })

    $('.jump-btn').on('click', function(){
        digiPetApp.decreaseCounter("heart");
        let heartIconDecrease = digiPetApp.decreaseHeartIcon();
        if (heartIconDecrease) {
            digiPetApp.doTrick("jump");
        }
        console.log(digiPetApp.counter); // remove later
    })

    $('.pet-btn, .give-treat-btn, .bark-btn, .sit-btn, .jump-btn').on('click', function(){
        
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