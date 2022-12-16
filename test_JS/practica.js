//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

//Para resolver este ejercicio se debe transformar un objeto en alrrays


let usuario = {
Nombre: 'Luis',
Apellido: 'Barroso',
Edad: 24,
ColoresFav: ['Blanco', 'Rojo', 'Negro']
};

const arr = Object.entries(usuario);
console.log(arr);

function impObj(obj){
	const arr = Object.values(obj);
	for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
};
};

impObj(usuario)


