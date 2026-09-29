 function burguerF(){
   alert("S LA HORA DE LA HAMBURGUESA ")
 }

const  eventClick = document.getElementById('event');
eventClick.addEventListener('click', () => {
    console.log("¡Alguien hizo clic en BURGER TOWN!")
})
const redColor = document.getElementById('redColor');

const changeColor = document.getElementById("changeColor").addEventListener('click', () => {
    redColor.classList.add('red');
    setTimeout(() => {
        redColor.classList.remove('red');
    },2000)
})