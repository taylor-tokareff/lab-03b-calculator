import {
    addTwoNumbers
} from "./mathUtils.js"

const addInput1 = document.getElementById('add-1-input');
const addInput2 = document.getElementById('add-2-input');
const addAnswer = document.getElementById('add-sum');

export function handleAddClick() {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const sum = addTwoNumbers(value1, value2)
    addAnswer.textContent = sum;
}

