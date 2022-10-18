export default function changeBackground() {

}

const arrayColor = [
    {
        id: 1,
        color: '#ffffff',
    },
    {
        id: 2,
        color: '#b3b3b3'
    },
    {
        id: 3,
        color: '#000000'
    },
    {
        id: 4,
        color: '#6A5ACD'
    },
    {
        id: 5,
        color: '#00FA9A'
    },
    {
        id: 6,
        color: '#00FF00'
    },
    {
        id: 7,
        color: '#B8860B'
    },
    {
        id: 8,
        color: '#8A2BE2'
    },
    {
        id: 9,
        color: '#FF69B4'
    },
    {
        id: 10,
        color: '#808080'
    }
]

const textColor = document.querySelector('#color');
const btnProximo = document.querySelector('.proximo');
const btnAnterior = document.querySelector('.anterior');
let id = 0;

btnProximo.addEventListener('click', proximo);
btnAnterior.addEventListener('click', anterior);

textColor.innerHTML = '#202020'


function proximo(e) {
    e.preventDefault()
    id++;

    if (id >= 9) {
        id = 0;
    }
    mostrarCor(id)
}

function anterior() {
    id--;

    if (id < 0) {
        id = 0;
    }
    mostrarCor(id)
}

function mostrarCor(id) {
    textColor.innerHTML = arrayColor[id].color;

    document.body.style.backgroundColor = arrayColor[id].color;
}