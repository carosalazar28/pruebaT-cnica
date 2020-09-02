//Ejercicio de Anagram

//Mi primera lógica para desarrollar esta función fue conviertiendo en un arreglo el string y luego con el metodo sort se ordena alfabeticamente y finalmente lo convierto en un string nuevamente y lo comparo para que me indique si son completamente iguales
var isAnagram = function(s, t) {       
    //Para tener una mejor lectura del codigo voy a guardar en unas variables el resultado de: convertir en un arreglo de cada caracter el string, luego con el metodo sort() se ordena ascendentemente las letras y por ultimo con el metodo join() volvemos a juntar estos caracteres en un string
    let stringS = s.split('').sort().join('')
    let stringT = t.split('').sort().join('')
    //Una vez que tengo el string ordenado puedo hacer una comparación completamente igual para que me retorne true o false, dado que va a revisar que tengan los mismos caracteres y la misma longitud.
    return  stringS === stringT
}

console.log(isAnagram('a', 'b'))
console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))