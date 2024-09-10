// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const clases = ["clase1", "clase2", "clase3", "clase4", "clase5"];

for (country of countries) {
  const boxes = document.createElement ("div");
  const title = document.createElement ("h4");
  const image = document.createElement ("img");
  const button = document.createElement ("button");

  title.textContent = country.title;
  image.src = country.imgUrl;
  button.textContent = "Elimíname";

  button.addEventListener("click", function () {
    boxes.remove()
  })

boxes.appendChild (title);
boxes.appendChild (image);
boxes.appendChild (button);
document.body.appendChild(boxes);
}