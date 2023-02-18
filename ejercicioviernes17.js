// Se solicita al usuario el nombre y 2 notas de x alumnos y se almacenan en un array
//     1º Sacar la media de cada alumno
//     2º Mostrar por pantalla la la media más alta y el nombre de los alumnos que tengan dicha media

let x = 2;


let total=0;

const objsClase = [];

function pedirNombres() {
  for (i = 0; i < x; i++) {
    const objAlumno = {
      nota: [],
      media: 0,
    };

    objAlumno.nombre = prompt("Meta el nombre del primer alumno ");

    for (let i = 0; i < 2; i++) {
      objAlumno.nota.push(parseInt(prompt("Meta la primera nota ")));
    }

    objsClase.push(objAlumno);

    // console.log(objAlumno);
  }
}

function insertarMedia() {
  objsClase.forEach((item) => {
    item.media = media();
  });
}

function media() {
  objsClase.forEach(({ nota }) => {
    nota.forEach((item) => {
        console.log(item);
      total += item;
    });
    return total / 2;
  }); 
}



pedirNombres();
insertarMedia();

console.log(objsClase);
