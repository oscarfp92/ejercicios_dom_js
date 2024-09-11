// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click.
const boton = document.createElement ("button");
boton.id = "btnToClick";
boton.textContent = "Info";
document.body.appendChild (boton);
  
boton.addEventListener ("click", (event) => {
  console.log (event);
});


// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const foco = document.querySelector (".focus");
foco.addEventListener ("focus", (event) => {
  console.log (event.target.value);
});


// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valor = document.querySelector (".value");
valor.addEventListener ("input", (event) => {
  console.log (event.target.value);
})


// 4.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const list = document.createElement("ul");
for (const album of albums) {
  const listAlbum = document.createElement ("li");
  listAlbum.textContent = album;
  list.appendChild (listAlbum);
  document.body.appendChild (list);
}
