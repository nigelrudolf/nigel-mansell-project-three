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
    heartIcon: `<li><img src="assets/heart-8bit.png" alt="heart icon used to indicate dog's level happiness"></li>`,
    treatIcon:  `<li><img src="assets/treats-8bit.png" alt="dog treat icon used to indicate number of treats available"></li>`,
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

// Pushes true to the treats[] for every 5 pet counters
// unless the treats[] has maxed out at 3
digiPetApp.petBtnIncreaseTreatCounter = function() {
    const {pet, treats} = digiPetApp.counter;
    if (treats.length === 3) {
        return null;
    } else if (pet >= 5 && pet % 5 === 0) {
        treats.push(true);   
    }
}

// Appends a treatIcon for every true value held in treats[]
// Increases treatIconDisplay by 1
// treatIconDisplayCount in combination with treats[] allows forEach to run
// even after treatCounter === 3 but treatIconDisplay === 2
digiPetApp.appendIcons = function() {
    const {treats} = digiPetApp.counter;
    const {treatIcon} = digiPetApp.assets;

    $('.treat-o-meter ul li').remove();

    treats.forEach(() => {
        $(`.treat-o-meter ul`).append(treatIcon);
        digiPetApp.counter['treatIconDisplayCount'] = treats.length;
      })
}

// Unless treats[] === 3 and treatIconDisplayCount === 3
digiPetApp.updateIcons = function() {
    const {treats, treatIconDisplayCount} = digiPetApp.counter;

    if (treats.length === 3 && treatIconDisplayCount === 3) {
        return null;
    } else {
       digiPetApp.appendIcons();
    }
}

digiPetApp.petBtnIncreaseHeartCounter = function() {
    const {pet, hearts} = digiPetApp.counter;

    if (hearts.length === 3) {
        return null;
    } else if (pet >= 40 && pet % 40 === 0) {
        hearts.push(true);
    }
}

digiPetApp.petBtnIncreaseHeartIcon = function() {
    const {pet, hearts, heartIconDisplayCount} = digiPetApp.counter;
    const {heartIcon} = digiPetApp.assets;

    if (hearts.length === 3 && heartIconDisplayCount === 3) {
        return null;
    } else if (pet >= 40 && pet % 40 === 0) {   
        $(`.happiness ul`).append(heartIcon);
        digiPetApp.counter['heartIconDisplayCount']++;
    }
}

// ****************
// Give Treat Btn
// ****************
digiPetApp.treatBtnDecreaseTreatCounter = function() {
    const {treats} = digiPetApp.counter;

    if (treats.length > 0 && treats.length < 4) {
        treats.pop();
    }
}


digiPetApp.treatBtnDecreaseTreatIcon = function() {
    const {treatIconDisplayCount, treats} = digiPetApp.counter;
    const {treatIcon} = digiPetApp.assets;

    if (treats.length === 0 && treatIconDisplayCount === 0) {
        console.log("You need more treats");
    } else if (treatIconDisplayCount > 0 && treatIconDisplayCount < 4){
            digiPetApp.counter['treatIconDisplayCount']--;
            $('.treat-o-meter ul li').remove();
            treats.forEach(() => {
                $(`.treat-o-meter ul`).append(treatIcon);
              })
    }
    console.log(digiPetApp.counter);
}

digiPetApp.treatBtnIncreaseHeartCounter = function() {
    const {hearts, treats} = digiPetApp.counter;
    if (hearts.length === 3 ) {
        return null;
    } else if (treats.length !== 0) {
        hearts.push(true);
    }
}

digiPetApp.treatBtnIncreaseHeartIcon = function() {
    const {heartIconDisplayCount, treatIconDisplayCount, hearts} = digiPetApp.counter;
    const {heartIcon} = digiPetApp.assets;

    if (hearts.length === 3 && heartIconDisplayCount === 3) {
        return null;
    } else if (treatIconDisplayCount !== 0) {
        $('.happiness ul li').remove();
        hearts.forEach(() => {
            $(`.happiness ul`).append(heartIcon);
            digiPetApp.counter['heartIconDisplayCount'] = hearts.length;
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
    const {heartIcon} = digiPetApp.assets;
    let heartCounter = digiPetApp.counter.hearts;
    let heartIconDisplayCount = digiPetApp.counter['heartIconDisplayCount'];
    if (heartCounter.length == 0 && heartIconDisplayCount == 0) {

    } else {
        // let heartIcon = digiPetApp.assets.heart;
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