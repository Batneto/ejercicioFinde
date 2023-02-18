// Definimos el objeto clase

let clase = {};


let numeroDeAlumnos= 2        //! parseInt(prompt("Intruzca el numero de alumnos "))

// Pedimos los datos de dos alumnos con un bucle for.
function crearAlumnos(numeroDeAlumnos) {
for (let i = 1; i <= numeroDeAlumnos; i++){
    //Pedimos el nombre y las notas del alumno.
    let nombre = prompt(`Introduce el nombre del alumno ${i}`);
    let nota1 = parseInt(prompt(`introduce primera nota del alumno ${i}`));
    let nota2 = parseInt(prompt(`introduce segunda nota del alumno  ${i}`));
    
    // Creamos un objeto por cada alumno y le asignamos las variables.
    let alumno = {
        nombre: nombre,
        notas: [nota1,nota2]
    };

    // Calculamos la media de las notas del alumno y las asignamos a la variable media.
    let media = (nota1 + nota2) / 2;
    alumno.media = media;

    // Añadimos el objeto alumno al objeto clase.

    clase[`alumno${i}`] = alumno;
}
}
console.log(clase);

// Creamos una función que nos muestre el alumno con la nota media más alta de la clase.
function calcularMediaAlta(clase) {
    //Inicializamos la nota más alta a 0.
    let mediaMasAlta = 0;
    //Inicializamos el objeto alumno con nota más alta a null.$
    let alumnoConMediaMasAlta = "";

    // Recorremos los objetos alumno del objeto clase.
    for (let i = 1; i<=numeroDeAlumnos; i++) {
        let alumno = clase[`alumno${i}`];
        let media = alumno.media;
        // Comporbamos si la media de este alumno es mayor que la media más alta hasta el momento.$
        if(media>mediaMasAlta){
            mediaMasAlta = media;
            alumnoConMediaMasAlta = alumno;
        }
    }
    let parrafo=document.createElement("p")
    parrafo.textContent=`El alumno con la media más alta es ${alumnoConMediaMasAlta.nombre} con una nota media de ${mediaMasAlta}`
    let div =document.getElementById("div")

    div.append(parrafo)

    // console.log();
}


// function pintarTablaDatos(params) {
//     for (let i = 0; i < numeroDeAlumnos; i++) {
    
//     const fila=document.createElement("tr")

//     for (let i = 1; i <= 4; i++) {
//         let alumno=clase[`alumno${i}`]
//           const columna=document.createElement("td")
//           columna.textContent= alumno.nombre
//         fila.append(columna)
//     }
  
   
//     let tabla=document.getElementById("tabla")


    
//     tabla.append(fila)

// }
// }


    







crearAlumnos(numeroDeAlumnos);
calcularMediaAlta(clase);
// pintarTablaDatos()
// console.log(clase);


