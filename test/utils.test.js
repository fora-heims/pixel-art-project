import {
    setStorage,
    getStorage,
    titleKey,
    updateImage,
    createImage,
} from '../utils.js';

const test = QUnit.test;

test('setStorage should stringify the imageObject', (expect) => {
    localStorage.removeItem('TEST');

    const testObject = {
        height: 10,
        width: 10,
        colors: ['457431', '03b213'],
    };

    setStorage('TEST', testObject);

    const actualString = localStorage.getItem('TEST');
    const actual = JSON.parse(actualString);

    expect.deepEqual(testObject, actual);
});

test('getStorage should return the imageObject', (expect) => {
    localStorage.removeItem('TEST');

    const testObject = {
        height: 10,
        width: 10,
        colors: ['457431', '03b213'],
    };

    const testString = JSON.stringify(testObject);
    localStorage.setItem('test', testString);

    const actual = getStorage('test');
    const expected = testObject;

    expect.deepEqual(actual, expected);
});

test('titleKey should remove spaces from image title and capitalize string', (expect) => {
    const imageTitle = 'title with spaces';
    const expected = 'TITLEWITHSPACES';

    const actual = titleKey(imageTitle);

    expect.equal(actual, expected);
});

test('createImage should initialize a new image object', (expect) => {
    const newImage = {
        title: 'Awesome Artwork',
        height: 10,
        width: 10,
        colors: [
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)',
            'rgba(220, 220, 220, 0.4)',
            'rgba(130, 130, 130, 0.4)'
        ],
    };
    const newTitle = 'Awesome Artwork';

    const actual = createImage(newTitle, 10, 10);

    expect.deepEqual(newImage, actual);
});

test('updateImage should add an array of color values to the image object', (expect) => {
    const colorsArray = ['ffffff', 'aaaaaa', '000000', '123456', 'f0f0f0'];

    const newImage = {
        title: 'Awesome Artwork',
        height: 10,
        width: 10,
        colors: [],
    };

    const expected = {
        title: 'Awesome Artwork',
        height: 10,
        width: 10,
        colors: ['ffffff', 'aaaaaa', '000000', '123456', 'f0f0f0'],
    };

    const actual = updateImage(newImage, colorsArray);

    expect.deepEqual(actual, expected);
});
