/*eslint-disable*/
const digiPetApp = {};
digiPetApp.counter = {
    pet: 0,
    treats: [],
    treatIconDisplayCount: 0,
    hearts: [],
    heartIconDisplayCount: 0,
}
digiPetApp.assets = {
    heart: `<li><img src="assets/heart-8bit.png" alt="heart icon used to indicate dog's level happiness"></li>`,
    treat:  `<li><img src="assets/treats-8bit.png" alt="dog treat icon used to indicate number of treats available"></li>`,
    morusStand: `<img src="assets/morus-stand-8bit.png" alt="image of dog depicted in 8 bit art style">`,
    morusSit: `<img src="assets/morus-sit-8bit.png" alt="image of dog sitting depicted in 8 bit art style">`
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
    const {pet, treats} = digiPetApp.counter;
    if (treats.length === 3) {
        
    } else if (pet >= 5 && pet % 5 === 0) {
        treats.push(true);   
    }
}

// Appends a treatIcon for every true value held in treatCounter[]
// Increases treatIconDisplay by 1
// treatIconDisplay in combination with treatCounter[] allows forEach to run
// even after treatCounter = 3 but treatIconDisplay = 2
digiPetApp.appendIcons = function() {
    let treatIcon = digiPetApp.assets.treat;
    const treats = digiPetApp.counter.treats;
    $('.treat-o-meter ul li').remove();
    digiPetApp.counter['treatIconDisplayCount'] = 0;
    treats.forEach((treat) => {
        $(`.treat-o-meter ul`).append(treatIcon);
        digiPetApp.counter['treatIconDisplayCount']++;
      })
}

// Unless treatCounter[] = 3 and treatIconDisplay = 3
digiPetApp.updateIcons = function() {
    let treatCounter = digiPetApp.counter.treats;
    let treatIconDisplayCount = digiPetApp.counter['treatIconDisplayCount'];
    if (treatCounter.length == 3 && treatIconDisplayCount == 3) {

    } else {
       digiPetApp.appendIcons();
    }
}

digiPetApp.petBtnIncreaseHeartCounter = function() {
    let petCounter = digiPetApp.counter['pet'];
    let heartCounter = digiPetApp.counter.hearts;
    if (heartCounter.length == 3) {
        
    } else if (petCounter >= 40 && petCounter % 40 == 0) {
        digiPetApp.counter.hearts.push(true);
    }
}

digiPetApp.petBtnIncreaseHeartIcon = function() {
    let petCounter = digiPetApp.counter['pet'];
    let heartCounter = digiPetApp.counter.hearts;
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
    let treatCounter = digiPetApp.counter.treats;
    if (treatCounter.length > 0 && treatCounter.length < 4) {
        digiPetApp.counter.treats.pop();
    }
}


digiPetApp.treatBtnDecreaseTreatIcon = function() {
    let {treatIconDisplayCount, treats} = digiPetApp.counter;
    if (treats.length === 0 && treatIconDisplayCount === 0) {
        console.log("You need more treats");
    } else if (treatIconDisplayCount > 0 && treatIconDisplayCount < 4){
            digiPetApp.counter['treatIconDisplayCount']--;
            let treatIcon = digiPetApp.assets.treat;
            const treats = digiPetApp.counter.treats;
            $('.treat-o-meter ul li').remove();
            treats.forEach((treat) => {
                $(`.treat-o-meter ul`).append(treatIcon);
              })
    }
    console.log(digiPetApp.counter);
}

digiPetApp.treatBtnIncreaseHeartCounter = function() {
    let heartCounter = digiPetApp.counter.hearts;
    let treatCounter = digiPetApp.counter.treats;
    if (heartCounter.length == 3 ) {
       
    } else if (treatCounter.length != 0) {
        digiPetApp.counter.hearts.push(true);
    }
}

digiPetApp.treatBtnIncreaseHeartIcon = function() {
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];
    let treatIconDisplayCount = digiPetApp.counter['treatIconDisplayCount'];
    let heartCounter = digiPetApp.counter.hearts;
    if (heartCounter.length == 3 && heartIconDisplayCount == 3) {
        
    } else if (treatIconDisplayCount !== 0) {
        let heartIcon = digiPetApp.assets.heart;
        const hearts = digiPetApp.counter.hearts;
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
    let heartCounter = digiPetApp.counter.hearts;
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];
    if (heartCounter.length == 0 && heartIconDisplayCount == 0) {

    } else {
        let heartIcon = digiPetApp.assets.heart;
        const hearts = digiPetApp.counter.hearts;
        $('.happiness ul li').remove();
        digiPetApp.counter['heartIconDisplayCount'] = 0; // this clears the heart[] each time
        hearts.forEach((heart) => {
            $(`.happiness ul`).append(heartIcon);
            digiPetApp.counter['heartIconDisplayCount']++; // this starts from 0 and increases for every true value stored in hearts[]
          })
        return true;
    }
}

digiPetApp.doTrick = function(trickDialogueSelector, image) {
    let trickDialogue = digiPetApp.trickDialogue[trickDialogueSelector];
    let selector = digiPetApp.selector[trickDialogueSelector];
    let altImage = digiPetApp.assets[image];
    let defaultImage = digiPetApp.assets.morusStand;
    $('.morus div').remove(); // removes previously appended divs
    if (image) {
        $('.morus').html(altImage);
    }
    $('.morus').append(trickDialogue);
    setTimeout(function(){ 
        $(selector).remove();
        $('.morus').html(defaultImage);
    }, 3000);
}


// ****************
// Info
// ****************

digiPetApp.close = function() {
    $('.info').hide();
}

digiPetApp.open = function() {
    $('.info').show();
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
    });

    $('.give-treat-btn').on('click', function(){
        digiPetApp.treatBtnIncreaseHeartCounter();
        digiPetApp.treatBtnDecreaseTreatCounter();
        digiPetApp.treatBtnIncreaseHeartIcon();
        digiPetApp.treatBtnDecreaseTreatIcon();
    });

    $('.bark-btn').on('click', function(){
        digiPetApp.decreaseCounter("hearts");
        let heartIconDecrease = digiPetApp.decreaseHeartIcon();
        if (heartIconDecrease) {
            digiPetApp.doTrick("woof");
        }
    });

    $('.sit-btn').on('click', function(){
        digiPetApp.decreaseCounter("hearts");
        let heartIconDecrease = digiPetApp.decreaseHeartIcon();
        if (heartIconDecrease) {
            digiPetApp.doTrick("sit", "morusSit");
        }
    })

    $('.jump-btn').on('click', function(){
        digiPetApp.decreaseCounter("hearts");
        let heartIconDecrease = digiPetApp.decreaseHeartIcon();
        if (heartIconDecrease) {
            digiPetApp.doTrick("jump");
        }
    })

    digiPetApp.close();
    $('.info-btn').on('click', function(){
        digiPetApp.open();
    })

    $('.close').on('click', function(e){
        e.preventDefault();
        digiPetApp.close();
    })
}

$(document).ready(function(){
    digiPetApp.init();
});