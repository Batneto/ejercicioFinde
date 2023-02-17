// Se solicita al usuario el nombre y 2 notas de x alumnos y se almacenan en un array
//     1º Sacar la media de cada alumno
//     2º Mostrar por pantalla la la media más alta y el nombre de los alumnos que tengan dicha media

let x = 2

const objsClase = []


function pedirNombres() {

    for (i = 0; i < x; i++) {

        const objAlumno = {
            nota:[]
        }

        objAlumno.nombre =validar(prompt("Meta el nombre del primer alumno "))


        for (let i = 0; i < 2; i++) {
            
          nota.push(parseInt(prompt("Meta la primera nota ")))
        }


        objAlumno.media= media()
      
        console.log(objAlumno); 
        objsClase.push(objAlumno)
    };

}


function media() {
    objsClase.forEach(({nota}) => {
        let total=0
        nota.forEach(item => {
            total+=item

        });
       
    });
    
    return total/nota.length
}


pedirNombres()
console.log(objsClase);

// media()