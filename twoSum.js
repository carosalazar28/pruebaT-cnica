//Crear una solución que imprima las posiciones de nums (arreglo) que sumado su valor den igual al target

//Para iniciar a desarrollar el ejercicio pense que el arreglo deberia entrar y revisar cada elemento de su arreglo sabiendo el inidice de este, por lo que se desarrollaría en el metodo for, luego como debía comparar dos valores tendría que hacer un ciclo for mas para que recorra otro elemento en otra posición y lo pueda comparar.
var twoSum = function(nums, target) {
    //Inicialmente genero una variable con un nuevo arreglo que es donde voy a hacer push de las posiciones que cumplan la condición
    let newArr = []
    //Inicio con el primer ciclo que va a iniciar desde la posición 0
    for(let i=0; i< nums.length; i++){
        //Para el segundo ciclo encadenado la variable inicial va a ser desde la siguiente posición de donde este la variable del anterior ciclo, por lo que lo colocó en i+1
        for(let j=i+1; j< nums.length; j++){
            //Una vez que ya tengo dos elementos diferentes del array entro en el condicional donde reviso que el elemento i mas el elemento j sean completamente iguales al target que estoy buscando, de ser asi, entra y hace push de su respectiva posición y finalmente como ya tengo los dos valores retorno el arreglo.
            if(nums[i] + nums[j] === target){
                newArr.push(i, j)
                return newArr
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9)) //[0,1]
console.log(twoSum([3,2,4], 6)) //[1,2]
console.log(twoSum([3,3], 6)) //[0,1]
