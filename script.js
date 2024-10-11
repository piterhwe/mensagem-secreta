const dica = document.querySelectorAll('.dica');
const first_butao = document.getElementById('butao 1');

let currentDica = 0;

function hideDica() {
    dica.forEach(item => item.classList.remove('on'))
}

function showDica() {
    dica[currentDica].classList.add('on')
}

function nextDica() {
    hideDica()
    if(currentDica == dica.length -1) {
        currentDica = 0
    } else {
        currentDica++
    }
    showDica()
}
function prevDica() {
    hideDica()
    if(currentDica == 0) {
        currentDica = dica.length -1
    } else {
        currentDica--
    }
    showDica()
}

first_butao.addEventListener('click', prevDica)

console.log(dica)
