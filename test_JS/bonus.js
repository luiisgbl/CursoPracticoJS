//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

let tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
case "Free":
       console.log("Solo puedes tomar los cursos gratis");
break;
case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
break;
case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
break;
case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
break;
}

// solucion 
tipoDeSuscripcion = "Basic"

if (tipoDeSuscripcion == 'Free') {
    alert('Solo puedes tomar los cursos gratis')
} else if (tipoDeSuscripcion = 'Basic'){
    alert('Puedes tomar casi todos los cursos de Platzi durante un mes')
} else if (tipoDeSuscripcion == 'Expert'){
    alert('Puedes tomar casi todos los cursos de Platzi durante un año')
} else if (tipoDeSuscripcion == 'ExpertPlus'){
    alert('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año')
} else {
    alert('Este plan no esta en nuestro catalogo')
};



//Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora  solo con if (sin else ni else if).

function sinElseIF(tipoDeSuscripcion){
        if (tipoDeSuscripcion == 'Free') {
        alert('Solo puedes tomar los cursos gratis')
        return
    };
        if (tipoDeSuscripcion = 'Basic'){
        alert('Puedes tomar casi todos los cursos de Platzi durante un mes')
        return
    };
    
        if (tipoDeSuscripcion == 'Expert'){
        alert('Puedes tomar casi todos los cursos de Platzi durante un año')
        return
    };
        if (tipoDeSuscripcion == 'ExpertPlus'){
        alert('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año')
        return
    }
    console.warn('esta suscripcion no exsiste');
};


//💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏


// con alrrays

tipoDeSuscripcion = 'ExpertDuo';

Suscripciones = {
    Free:'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert:'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertDuo:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
};

function noseQueNombre(tipoDeSuscripcion, Suscripciones) {

    let arrr = Object.entries(Suscripciones);
    
    for(i=0;i < arrr.length; i++){
        if (arrr[i] == tipoDeSuscripcion){
            console.log(arr[i])
        }
    }
}


noseQueNombre(tipoDeSuscripcion, Suscripciones);

// ejercicio resuetlo

const tiposDeSuscripciones =  {
    free:'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert:'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertDuo:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

function imprimirTipoDeSuscripcion(suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion])
        return
    }
    console.warn('esta suscripcion no existe')
}

