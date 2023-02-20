
let clase = {};


let numeroDeAlumnos= 2        //! parseInt(prompt("Intruzca el numero de alumnos "))

function crearAlumnos(numeroDeAlumnos) {
for (let i = 1; i <= numeroDeAlumnos; i++){
    
    let nombre = prompt(`Introduce el nombre del alumno ${i}`);
    let nota1 = parseInt(prompt(`introduce primera nota del alumno ${i}`));
    let nota2 = parseInt(prompt(`introduce segunda nota del alumno  ${i}`));
    
    let alumno = {
        nombre: nombre,
        notas: [nota1,nota2]
    };

    let media = (nota1 + nota2) / 2;
    alumno.media = media;


    clase[`alumno${i}`] = alumno;
}
}
console.log(clase);

function calcularMediaAlta(clase) {
    
    let mediaMasAlta = 0;
    let alumnoConMediaMasAlta = "";

    for (let i = 1; i<=numeroDeAlumnos; i++) {
        let alumno = clase[`alumno${i}`];
        let media = alumno.media;
      
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


