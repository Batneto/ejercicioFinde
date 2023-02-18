// Se solicita al usuario el nombre y 2 notas de x alumnos y se almacenan en un array
//     1º Sacar la media de cada alumno
//     2º Mostrar por pantalla la la media más alta y el nombre de los alumnos que tengan dicha media

let x = 2;
let cantNotas = 2;
let cantMedias=[]
let total = 0;


const clasearra = [];

const clase = [];

function objsAlumnos() {
  for (i = 0; i < x; i++) {
    const objAlumno = {};
    objAlumno.nombre = prompt("Meta el nombre del primer alumno ");
    objAlumno.nota1 = parseInt(prompt("Meta la primera nota "));
    objAlumno.nota2 = parseInt(prompt("Meta la segunda nota "));
    objAlumno.media = (objAlumno.nota1 + objAlumno.nota2) / cantNotas;

    clase.push(objAlumno);
  }
}

function mejorMedia() {
    clase.forEach(({ media }) => {
    cantMedias.push(media)
})

return Math.max(...cantMedias);
}


objsAlumnos();
mejorMedia()
console.log( mejorMedia());
console.log(clase);
console.log(cantMedias);
