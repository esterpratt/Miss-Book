'user strict';

// to get date as input-type-date value
Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});

export const utilService = {
}

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// function makeId(length=5) {
//     var text = '';
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     for (var i = 0; i < length; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
    
//     return text;
// }

// function makeLorem(length) {

//     var randStr = '';
//     while (randStr.length < length) {
//         var wordLength = getRandomInt(3, 6);
//         var word = createWord(wordLength);

//         if (Math.random() > 0.9) word += ',';

//         randStr += word + ' ';
//     }
//     randStr = randStr.substring(0, length);
//     randStr = randStr[0].toUpperCase() + randStr.substr(1)

//     return randStr;
// }



// function getRandChar() {
//     var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
//     var randIndex = parseInt(Math.random() * LETTERS.length)
//     return LETTERS.charAt(randIndex);
// }

// function createWord(length) {
//     var word = '';
//     while (word.length < length) {
//         var randChar = getRandChar();
//         word += randChar;
//     }

//     return word;
// }
