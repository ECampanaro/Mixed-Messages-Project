//function to randomly select an item from an array
const selectRandom = (input) => {
    return input[Math.floor(Math.random() * input.length)];
};

const fortuneStarters = ['You', 'Your', 'The'];

const fortuneMiddles = {
    you: ['are', 'will', 'should'], 
    your: ['future', 'happiness', 'life'], 
    the: ['world', 'universe', 'sun'],
};

const fortuneEnds = {
    are: ['having a good day', 'experiencing good fortune', 'learning a valuable lesson'],
    will: ['meet someone special', 'receive a large sum of money', 'be very happy'],
    should: ['be careful crossing the street', 'never repeat a secret told in confidence', 'trust yourself'], 
    future: ['is bright', 'holds many possibilities', 'is an unknown'], 
    happiness: ['is certain', 'is just around the corner', 'will last forever'], 
    life: ['is just beginning', 'will be full of meaningful relationships', 'will begin when you want it to'], 
    universe: ['wants you to succeed', 'is on your side', 'holds many mysteries'], 
    sun: ['is always shining, we just don/t always see it', 'will come out tomorrow', 'creates light and shadows'], 
    world: ['is your oyster', 'demands to be seen', 'is a beautiful place']
}

//generates random fortune comprising of a start, middle, end
const generateRandomFortune = () => {
    //placeholder for start, middle, and end pieces
    let fortuneSentence = [];
    //generates a random start from fortuneStarters array
    const randStart = selectRandom(fortuneStarters);
    //pushes random start to the placeholder array
    fortuneSentence.push(randStart);
    //generates a random middle based on the random start
    const genRandMiddle = () => {
        if(randStart === 'You'){
        return selectRandom(fortuneMiddles.you );
        } else if (randStart === 'Your'){
        return selectRandom(fortuneMiddles.your);
        } else if (randStart === 'The'){
        return selectRandom(fortuneMiddles.the);
        }  
    };
    //pushes random middle to the placeholder array
    fortuneSentence.push(genRandMiddle()); 
    //generates a random end based on what is currently in placeholder array
    const genRandEnd = () => {
        if(fortuneSentence.join(' ') === 'You are'){
         return selectRandom(fortuneEnds.are);
        } else if(fortuneSentence.join(' ') === 'You will'){
         return selectRandom(fortuneEnds.will);
        } else if(fortuneSentence.join(' ') === 'You should'){
         return selectRandom(fortuneEnds.should);
        } else if(fortuneSentence.join(' ') === 'Your future'){
         return selectRandom(fortuneEnds.future);
        } else if(fortuneSentence.join(' ') === 'Your happiness'){
         return selectRandom(fortuneEnds.happiness);
        } else if(fortuneSentence.join(' ')  === 'Your life'){
         return selectRandom(fortuneEnds.life);
        } else if(fortuneSentence.join(' ')  === 'The sun'){
         return selectRandom(fortuneEnds.sun);
        } else if(fortuneSentence.join(' ') === 'The world'){
         return selectRandom(fortuneEnds.world);
        } else if(fortuneSentence.join(' ') === 'The universe'){
         return selectRandom(fortuneEnds.universe);
        }
    }
    //pushes random end to placeholder array
    fortuneSentence.push(genRandEnd());
    //joins all 3 variables in placeholder array to form the fortune sentence
    console.log(fortuneSentence.join(' '));
    
}
    
console.log(generateRandomFortune());