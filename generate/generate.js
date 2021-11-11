import { getStorage, setStorage } from '../utils.js';

const button = document.getElementById('button');
const input = document.getElementById('input');

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