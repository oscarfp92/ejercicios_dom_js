// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log(document.querySelector('.showme'));


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector('#pillado'));


//1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll("p");
for (const parrafo of parrafos) {
  console.log (parrafo);
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const pokemons = document.querySelectorAll(".pokemon");
for (const pokemon of pokemons){
  console.log(pokemon);
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testeMe"
const pruebas = document.querySelectorAll("[data-function=testMe]");
for (const prueba of pruebas){
  console.log(prueba);
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log (pruebas[2]);