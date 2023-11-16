'use strict';

const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');

const changeText = function(e) {
   if (input.value !== "") square.style.backgroundColor = input.value;
   input.value = "";
};

const changeSize = function(e) {
   circle.style.height = e.target.value + '%';
   circle.style.width = e.target.value + '%';
}

btn.addEventListener('click', changeText);
range.addEventListener('input', changeSize);

e_btn.style.display = 'none';