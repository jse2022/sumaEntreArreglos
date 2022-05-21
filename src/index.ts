import "./styles.css";

/*Sumar Dos Arreglos

• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
function sumarDosArreglos(primerArreglo: number[], segundoArreglo: number[]) {
  let sumaDelArreglo: number[] = new Array(6);
  let indice = 0;
  for (indice = 0; indice < primerArreglo.length; indice++) {
    sumaDelArreglo[indice] = primerArreglo[indice] + segundoArreglo[indice];
  }

  return console.log(sumaDelArreglo);
}

let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);

for (let i = 0; i < 6; i++) {
  let numerosArregloUno: number = Number(
    prompt("Ingrese valor del arreglo 1: ")
  );
  let numerosArregloDos: number = Number(
    prompt("Ingrese valor del arreglo 2: ")
  );
  arreglo1[i] = numerosArregloUno;
  for (let j = 0; j < 6; j++) {
    arreglo2[j] = numerosArregloDos;
  }
}
console.log(arreglo1);
console.log(arreglo2);
sumarDosArreglos(arreglo1, arreglo2);
