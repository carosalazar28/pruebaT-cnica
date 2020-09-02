//Ejercicio de Anagram

//Mi primera lógica para desarrollar esta función fue conviertiendo en un arreglo el string y luego con el metodo sort se ordena alfabeticamente y finalmente lo convierto en un string nueva y lo comparo para que me indique si son completamente iguales
var isAnagram = function(s, t) {    
    return s.split('').sort().join('') === s.split('').sort().join('')
}


//Cuando imprimo la función en la consola del navegador funciona en algunos casos, por lo que investigando un poco mas desarrollé la función asi:

var isAnagram = function(s, t) {    
    
}

console.log(isAnagram('a', 'b'))
console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))