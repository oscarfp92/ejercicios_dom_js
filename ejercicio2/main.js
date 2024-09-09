// 2.1 Inserta dinamicamente en un html un div vacío con javascript.
let newDiv = document.createElement('div');
document.body.appendChild(newDiv);

// 2.2 Inserta dinámicamente en un html un div que contenga un p con javascript.
let secondDiv = document.createElement('div');
let parrafo = document.createElement('p');
document.body.appendChild(secondDiv);
secondDiv.appendChild(parrafo);

// 2.3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let thirdDiv = document.createElement('div')
for (let i = 0; i < 6; i++) {
  let nuevoParrafo = document.createElement('p');
  thirdDiv.appendChild(nuevoParrafo);
}
document.body.appendChild(thirdDiv);

// 2.4 Inserta dinámicamente con javascript en un html una p con el texto "Soy dinámico"·
let dinamico = document.createElement('p');
dinamico.innerText = 'Soy dinámico!';
document.body.appendChild(dinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto "Wubba Lubba dub dub"
let elemento = document.querySelector('.fn-insert-here');
elemento.textContent = 'Wubba Lubba dub dub';

// 2.6 Basándote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');

for (let app of apps) {
  const aplicacion = document.createElement('li');
  aplicacion.textContent = app;
  lista.appendChild(aplicacion);
}
document.body.appendChild(lista);

// 2.7  Elimina todos los nodos que tengan la clase .fn remove-me
let eliminados = document.querySelectorAll('.fn-remove-me');
for (let eliminado of eliminados) {
  eliminado.remove();
}

// 2.8 Inserta una p con el texto "Voy en medio!" entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild
const paragraph = document.createElement('p');
paragraph.textContent = 'Voy en medio!';

const caja = document.querySelectorAll('div');
const parentDiv = caja[0].parentNode;
parentDiv.insertBefore(paragraph, caja[1]);
