const buttons = document.querySelectorAll('.button')

function onBtnClick() {
    console.log('Функция сработало');
}
buttons.forEach(btn => btn.addEventListener('click', onBtnClick))

const counter = document.querySelector('.counter')
const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')

function increment () {
    counter.innerHTML++
}

function decrement () {
    counter.innerHTML--
}

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)