const elnombre = document.querySelector('#tunombre')
const eseste = document.querySelector('.eseste')
const dondevaelnombre = document.querySelector('.minombre')

eseste.addEventListener('click',(e) =>{
    dondevaelnombre.innerText = 'Aca vas ' + elnombre.value;
})