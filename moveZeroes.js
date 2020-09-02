//Ejercicio para mover los ceros al final del array


//Para iniciar con la lógica del ejercicio se toma que primero recorra el arreglo y cada vez que encuentre un cero lo elimine y luego le haga push al final
var moveZeroes = function(nums) {
    //Iniciamos por declarar como una variable la longitud del arreglo para poder reasignarlo mas adelante
    let numsLength = nums.length
    //Con el ciclo de for iniciamos a recorrer el arreglo para que puedo luego revisar cada elemento bajo un condicional  
    for(let i=0; i< numsLength; i++){
        //En este condicional le decimos al arreglo que verifique si ese elemento es completamente igual a 0
        if(nums[i] === 0){
            //De ser asi va a eliminar ese elemento ubicado en la posición i
            nums.splice(i, 1)
            //Luego va a hacer push de 0 
            nums.push(0)
            //Disminuimos esta posición i de la iteración para que no haya conflictos
            i--
            //Finalmente, tambien le disminuimos a la longitud del arreglo para que no se quede iterando, por este motivo se declaro desde un inicio esta variable
            numsLength--
        }
    }
      
        //Finalmente retornamos el arreglo que hemos modificado
      return nums
  };

let nums = [0,1,0,3,12] //[1,3,12,0,0]
let nums2 = [0,0,1] //[ 1, 0, 0 ]

console.log(moveZeroes(nums))
console.log(moveZeroes(nums2))

//En LeetCode tuve un fallo inicial porque me falta disminuir la longitud del arreglo y disminuir esta posición que se esta eliminando