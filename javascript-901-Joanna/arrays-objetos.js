// que son y como se define 
// listas de array o vectores son lo mismo pero depende del lenguaje en que estemos trabajando 

//arrays -- es un conjunto de variables que se puede usara dentro de un proceso 

//ejemplo de como se define un arrays 
// 1 era menera se declara una cosntante , se agrega y se inicializa 
const datos = [1, "Hola", true, undefined, null]; 
// manera 1 en como es que se imprime  ejemplo de impresion 
console.log(datos);
// segundo ejemplo de como se declara 
const datos2 = new Array (1, "Hola", true, undefined, null);
// igual se imprime por consola de datos 1 
console.log(dato2);

// otra forma de declararlo es solo definiendo su tamaño  ( tercera opcion )
const datos3 = new Array (3)
datos2[1] = "Hola Mundo";
// mandarlo a imprimir 
console.log(datos3);

//esta es otra manera de declarar una linea 
const datos4 =[ datos, datos2, datos3];
// mandar a imprimir 
console.log(datos4);


//objetos  son las entidades a las que podemos asignara atributso y los atributos son todas las carcateristicaas que puede llegar a tener un onhejor 
const alumno /*<--objeto*/ = { // colocareos atributos 
    nombre:
    "Pedro",
    edad: 15, 
    isBlack: false,
    amistades: ["Joanna", "Juan", "Ana"]
         // objetio dentro de otro objeto 
         // ejemplo 
         const ing1 = {
            atricula: 1232100543,
            carrera: "sistemas"
         }
}
// forma de imprimir 
console.log(alumno);

//imprime mas especifico 
console.log(alumno.nombre);

