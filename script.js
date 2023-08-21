const fortuneStarters = ['You', 'Your', 'The'];

const fortuneMiddles = {
    you: ['are', 'will', 'should'], 
    your: ['future', 'happiness', 'life'], 
    the: ['world', 'universe', 'sun'],
};

const fortuneEnds = {
    'you are': ['having a good day', 'experiencing good fortune', 'learning a valuable lesson'],
    'you will': ['meet someone special', 'receive a large sum of money', 'be very happy'],
    'you should': ['be careful crossing the street', 'never repeat a secret told in confidence', 'trust yourself'], 
   'your future': ['is bright', 'holds many possibilities', 'is an unknown'], 
    'your happiness': ['is certain', 'is just around the corner', 'will last forever'], 
    'your life': ['is just beginning', 'will be full of meaningful relationships', 'will begin when you want it to'], 
    'the universe': ['wants you to succeed', 'is on your side', 'holds many mysteries'], 
    'the sun': ['is always shining, we just don/t always see it', 'will come out tomorrow', 'creates light and shadows'], 
    'the  world': ['is your oyster', 'demands to be seen', 'is a beautiful place']
}

//function to randomly select an item from an array
const selectRandom = (input) => {
    return input[Math.floor(Math.random() * input.length)];
};



