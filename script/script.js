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

// Increases the pet counter by 1 for each click
digiPetApp.increasePetCounter = function() {
    digiPetApp.counter['pet']++;
}

// Pushes true to the treatCounter[] for every 5 pet counters
// unless the treatCounter[] has maxed out at 3
digiPetApp.petBtnIncreaseTreatCounter = function() {
    let petCounter = digiPetApp.counter.pet;
    let treatCounter = digiPetApp.counter.treat;
    if (treatCounter.length == 3) {
        
    } else if (petCounter >= 5 && petCounter % 5 == 0) {
        digiPetApp.counter.treat.push(true);   
    }
}

// Appends a treatIcon for every true value held in treatCounter[]
// Increases treatIconDisplay by 1
// treatIconDisplay in combination with treatCounter[] allows forEach to run
// even after treatCounter = 3 but treatIconDisplay = 2
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

// Unless treatCounter[] = 3 and treatIconDisplay = 3
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
        digiPetApp.counter['heartIconDisplayCount'] = 0;
        hearts.forEach((heart) => {
            $(`.happiness ul`).append(heartIcon);
            digiPetApp.counter['heartIconDisplayCount']++;
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
    $('.morus div').remove(); // removes previously appended divs
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
}

$(document).ready(function(){
    digiPetApp.init();
});