// 1.1 Basándote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los países.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countryList = document.createElement ("ul");
for (const country of countries) {
  const paises = document.createElement ("li");
  paises.textContent = country;
  countryList.appendChild (paises);
} 
document.body.appendChild (countryList);


// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.
const element = document.querySelector (".fn-remove-me");
element.remove();


// 3.3 Utiliza el array para crear dinámicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carsList = document.createElement ("ul");
for (const car of cars) {
  const coches = document.createElement ("li");
  coches.textContent = car;
  carsList.appendChild (coches);
}
const box = document.querySelector ("[data-function=printHere]");
box.appendChild(carsList);


// 3.4  Crea dinámicamente en el html una serie de divs que contenga un elemento h4 para el título y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country2 of countries2) {
  const boxes = document.createElement ("div");
  const titleBox = document.createElement ("h4");
  const image = document.createElement ("img");
  titleBox.textContent = country2.title;
  image.src = country2.imgUrl;
  boxes.appendChild (titleBox);
  boxes.appendChild (image);
  document.body.appendChild (boxes);
}


// 3.5 Basándote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const boton = document.createElement ("button");
boton.textContent = "Elimina el último div";
document.body.appendChild (boton);

const lastDiv = document.querySelector ("div:last-of-type");
lastDiv.classList.add ("ultimo");

const ultimoDiv = document.querySelector (".ultimo");
boton.addEventListener ("click", function () {
  ultimoDiv.remove();
});


// 3.6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (country of countries) {
  const boxes = document.createElement ("div");
  const title = document.createElement ("h4");
  const image = document.createElement ("img");
  const button = document.createElement ("button");

  title.textContent = country.title;
  image.src = country.imgUrl;
  button.textContent = "Elimíname";

  button.addEventListener("click", function () {
    boxes.remove();
  })

boxes.appendChild (title);
boxes.appendChild (image);
boxes.appendChild (button);
document.body.appendChild(boxes);
}