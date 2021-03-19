const addInput1 = document.getElementById('add-1-input');
const addInput2 = document.getElementById('add-2-input');
const addButton = document.getElementById('add');
const addAnswer = document.getElementById('add-sum');

addButton.addEventListener('click', () => {

const value1 = Number(addInput1.value);
const value2 = Number(addInput2.value);

const sum = value1 + value2;

addAnswer.textContent = sum;

})


const subInput1 = document.getElementById('sub-1-input');
const subInput2 = document.getElementById('sub-2-input');
const subButton = document.getElementById('sub');
const subAnswer = document.getElementById('sub-sum');

subButton.addEventListener('click', () => {

    const value3 = Number(subInput1.value);
    const value4 = Number(subInput2.value);

    const sum = value3 - value4;

    subAnswer.textContent = sum;

})

const divInput1 = document.getElementById('div-1-input');
const divInput2 = document.getElementById('div-2-input');
const divButton = document.getElementById('div');
const divAnswer = document.getElementById('div-sum');

divButton.addEventListener('click', () => {

    const value3 = Number(divInput1.value);
    const value4 = Number(divInput2.value);

    const sum = value3 / value4;

    divAnswer.textContent = sum;

})

const multInput1 = document.getElementById('mult-1-input');
const multInput2 = document.getElementById('mult-2-input');
const multButton = document.getElementById('mult');
const multAnswer = document.getElementById('mult-sum');

multButton.addEventListener('click', () => {

    const value3 = Number(multInput1.value);
    const value4 = Number(multInput2.value);

    const sum = value3 * value4;

    multAnswer.textContent = sum;

})


