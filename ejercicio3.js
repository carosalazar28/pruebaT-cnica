// Ejercicio 3

// Crea una función llamada `caracteresEnComun` que recibe dos argumentos: `str1` y `str2`. La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.

//La logicá para iniciar con esta función es crear un arreglo por cada uno de los string que se van a pasar y que cada elemento del array sea un caracter del string, luego comparamos estos elementos del arreglo
function caracteresEnComun(str1, str2){
    //Declaro en una variable un array con cada caracter de los string que voy a recibir.
    let arr1 = str1.split('') //Array 1
    let arr2 = str2.split('') //Array 2
    //Declaro el nuevo array que voy a generar para imprimir los elementos que se repitan
    let newArr = [] 
    //Inicio un ciclo para recorrer el Array 1 y dentro de este ciclo voy a generar otro ciclo para recorrer el Array 2, con eso cuando tome un elemento del primer ciclo este va a entrar en el segundo ciclo y va a iterar para saber si encuentra este elemento.
    for(let i=0; i< arr1.length; i++){
        for(let j=0; j< arr2.length; j++){
            //Con este condicional hago la comparación entre los elementos que estoy iterando para saber si sin iguales
            if(arr1[i] === arr2[j]){
                //Cuando este condicional me retorne true, va a tomar el nuevo arreglo y va a hacer push del elemento del Array 1
                newArr.push(arr1[i])
            }
        }
    }
    //Finalmente para retornar el nuevo arreglo hago un ultimo filtro para eliminar los elementos que se repitan y dejar un array con un solo caracter por cada letra.
    return newArr.filter((a, b) => newArr.indexOf(a) === b)// Indico que el metodo filter recibe una función que va a recibir dos parametros (a, b) y va a buscar el elemento a en el indice y lo compara con el otro elemento, si son iguales solo retorna el primer indice que puede encontrar.
}


console.log(caracteresEnComun("Hola", "Mundo")) // ["o"]
console.log(caracteresEnComun("German", "Gabriela")) // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye")) // []