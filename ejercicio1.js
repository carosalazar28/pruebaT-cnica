// Ejercicio 1

// Escribe una función llamada `numDuplicados` que reciba un string y retorne el número de caracteres que aparecen más de una vez.

//Para desarrollar esta función se inicio con la lógica de crear un arreglo al que se le iban a ir quitando elementos para finalemente obtener un elemento por cada caracter que se repite más de una vez
function numDuplicados(str){
    //Declaramos en una variable el arreglo de con cada uno de los caracteres que tiene el string
    let arr = str.split('')
    //Luego en una variable vamos a guardar un nuevo arreglo con los caracteres que estén mas de una vez, este metodo de filter va a retornar el arreglo con varios elementos de este mismo caracter.
    let charRepeat = arr.filter((a, b) => arr.indexOf(a) !== b)
    //Por lo tanto, en una ultima variable vamos a guardar un nuevo arreglo ubicando solo una vez este caracter.
    let oneChar = charRepeat.filter((a, b) => charRepeat.indexOf(a) === b)

    //Finalemente retornamos la longitud de este arreglo que me va a indicar el numero de caracteres que aparecen más de una vez
    return oneChar.length
}

console.log(numDuplicados("abcaa")) // 1
console.log(numDuplicados("abab")) // 2
console.log(numDuplicados("abc")) // 0 