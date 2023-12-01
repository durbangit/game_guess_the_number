"use strict";

console.log('hello');

let game = document.querySelector('.game'); // главная обёртка

let startBtn = game.querySelector('.game__start'); // Начать игру
let restartBtn = game.querySelector('.game__restart'); // Проверить
let clickBtn = game.querySelector('.game__click'); // Начать игру занова

let inp = game.querySelector('.game__input'); // вводим число

let error = game.querySelector('.game__error'); // Введите число от 1 до 100
let text = game.querySelector('.game__text'); // Начните игру

let menu = game.querySelector('.game__menu'); // блок со списком li
let items = menu.querySelectorAll('span'); // массив li span

let result = items[0]; // Результат
let hinst = items[1]; // Подсказки
let check = items[2]; // Число попыток

let number = 0;
let i = 0;

startBtn.addEventListener('click', getNumber); // запускаем игру

function getNumber() { // запускаем игру
   number = getRandomInt(1, 100);
   i = 0;
   inp.value = '';
   inp.focus();
   check.textContent = 0;

   // console.log(number + ' rond');

   hinst.textContent = 'Введите число от 1 до 100.'
   text.textContent = 'Вы запустили игру!';
   clickBtn.addEventListener('click', hasNumber);
   restartBtn.addEventListener('click', cancel); // отменяем игру
   this.removeEventListener('click', getNumber);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hasNumber() {

   let num = Number(inp.value);
   
   if (i >= 9) {
      if (num == number) {
         result.textContent = 'Вы угодали!';
         hinst.textContent = 'Хотите начать Занова? Нажмите кнопку "Начать игру".';
         text.textContent = 'Поздравляем! Вы выиграли! Игра, окончена.';
         startBtn.addEventListener('click', getNumber);
         clickBtn.removeEventListener('click', hasNumber);
         restartBtn.removeEventListener('click', cancel);
         check.textContent = i;
      } else {
         i++;
         result.textContent = 'Вы не угодали!';
         hinst.textContent = 'Хотите начать Занова? Нажмите кнопку "Начать игру".';
         text.textContent = 'Вы проиграли. Игра, окончена.';
         startBtn.addEventListener('click', getNumber);
         clickBtn.removeEventListener('click', hasNumber);
         restartBtn.removeEventListener('click', cancel);
         check.textContent = i;
         i = 0;
      }
   } else {
      if (inp.value == "") {

      } else if (num > number) {
         i++;
         result.textContent = 'Вы не угодали.';
         hinst.textContent = 'Введите число по меньше.';
         check.textContent = i;
      } else if (num < number) {
         i++;
         result.textContent = 'Вы не угодали.';
         hinst.textContent = 'Введите число по больше.';
         check.textContent = i;
      } else if (num == number) {
         i++;
         result.textContent = 'Вы угодали!';
         hinst.textContent = 'Хотите начать Занова? Нажмите кнопку "Начать игру".';
         text.textContent = 'Поздравляем! Вы выиграли! Игра, окончена.';
         startBtn.addEventListener('click', getNumber);
         clickBtn.removeEventListener('click', hasNumber);
         restartBtn.removeEventListener('click', cancel);
         check.textContent = i;
      }
   }
}

function cancel() { // отменяем игру
   i = 0;
   inp.value = '';
   hinst.textContent = 'Нажмите кнопку "Начать игру".';
   check.textContent = i;
   text.textContent = 'Вы отменили игру! Начните занова.';
   startBtn.addEventListener('click', getNumber);
   clickBtn.removeEventListener('click', hasNumber);
}