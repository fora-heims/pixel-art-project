import { getStorage, setStorage, isEven } from '../utils.js';

const button = document.getElementById('button');
const horizontalButton = document.getElementById('horizontal-button');
const verticalButton = document.getElementById('vertical-button');
const input = document.getElementById('input');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

function setGeneratedStorage(key, array) {
    let object = {
        title: key,
        height: 50,
        width: 50,
        colors: array
    };
    let string = JSON.stringify(object);
    localStorage.setItem(key, string);
}

button.addEventListener('click', () => {
    let array = [];
    for (let i = 0; i < 2500; i++) {
        array.push('purple');
    }
    let key = input.value;
    setGeneratedStorage(key, array);
    let keys = getStorage('KEYS');
    keys.keys.push(key);
    setStorage('KEYS', keys);
});

verticalButton.addEventListener('click', () => {
    let array = [];
    for (let i = 0; i < 2500; i++) {
        if (isEven(50)) {
            
            array.push('purple');
        }
    }
    let key = input3.value;
    setGeneratedStorage(key, array);
    let keys = getStorage('KEYS');
    keys.keys.push(key);
    setStorage('KEYS', keys);
});

horizontalButton.addEventListener('click', () => {
    let array = [];
    for (let i = 0; i < 2500; i++) {
        array.push('purple');
    }
    let key = input2.value;
    setGeneratedStorage(key, array);
    let keys = getStorage('KEYS');
    keys.keys.push(key);
    setStorage('KEYS', keys);
});