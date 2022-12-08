const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('contenido');
content.textContent = 'This is glorious text!';
const parrafo = document.createElement('p'),
unheader3 = document.createElement('h3'),
undiv = document.createElement('div'),
unheader1 = document.createElement('h1'),
unp = document.createElement('p');

parrafo.textContent = 'Hey im red!';
parrafo.style.color = 'red';

unheader3.textContent = 'Im a blue h3';
unheader3.style.color = 'blue';


undiv.style.backgroundColor = 'pink';
undiv.style.border = "2px dotted black";
unheader1.innerHTML = 'Im in a div'
unp.innerHTML = 'ME TOO!';
undiv.appendChild(unheader1);
undiv.appendChild(unp);

container.appendChild(content);
content.appendChild(parrafo);
content.appendChild(unheader3);
content.appendChild(undiv);
