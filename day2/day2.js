/** --- Day 2: Password Philosophy --- */

const input = require('./input.json')

const freequencyCounter = str => {
    return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
};


// Part 1
let count = 0;
for (let index = 0; index < input.length; index++) {
    const [, min, max, character, password] = /(\d+)-(\d+) ([a-z]): ([a-z]+)/.exec(input[index]);
    res = freequencyCounter(password);
    if (res[character] && res[character] >= min && res[character] <= max) {
        count++;
    }
}

console.log(`Number of valid passwords in Part 2  are ${count}`)

// Part 2
let count2 = 0;
for (let index = 0; index < input.length; index++) {
    const [, firtpos, lastPos, character, password] = /(\d+)-(\d+) ([a-z]): ([a-z]+)/.exec(input[index]);
    const isAtPositionOne = password[firtpos - 1] === character; 
    const isAtPositionTwo = password[lastPos - 1] === character; 
    if (isAtPositionOne + isAtPositionTwo === 1) {
        count2 = count2 + 1;
    }
    
}

console.log(`Number of valid passwords in Part 2 are ${count2}`)