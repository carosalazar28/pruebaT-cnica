





// Ejercicio 4

// Escribir una función llamada `triqui` que reciba un argumento `board` (un arreglo de arreglos) y retorne `true` si hay triqui, `false` de lo contrario.

//La lógica para desarrollar esta función es generar multiples condicionales para los diferentes casos que se pueden presentar cuando hacemos triqui, dado que sabemos las posiciones en las que se debe ubicar el elemento en nuestra matriz(board) hacemos condiciones compuestas
function triqui(board){
    //La serie de condiciones que se exponen son para definir en este caso si la segunda columna los elementos son iguales, comparando el primero con el segundo y luego el segundo con el tercero, esto retorna true
    if(board[0][1] === board[1][1] && board[1][1] === board[2][1]){
        return true
    } 
    //de lo contrario si la primera columna los elementos son iguales retorne true
    else if(board[0][0] === board[1][0] && board[1][0] === board[2][0]){
        return true
    }
    //de lo contrario si la tercera columna de elementos son iguales retorne true
    else if(board[0][2] === board[1][2] && board[1][2] === board[2][2]){
        return true
    }
    //de lo contrario si la primera fila de elementos son iguales retorne true
    else if(board[0][0] === board[0][1] && board[0][1] === board[0][2]){
        return true
    }
    //de lo contrario si la segunda fila de elementos son iguales retorne true
    else if(board[1][0] === board[1][1] && board[1][1] === board[1][2]){
        return true
    }
    //de lo contrario si la tercera fila de elementos son iguales retorne true
    else if(board[2][0] === board[2][1] && board[2][1] === board[2][2]){
        return true
    }
    //de lo contrario si los elementos en diagonal desde el primer elemento de la primera fila son iguales retorne true
    else if(board[0][0] === board[1][1] && board[1][1] === board[2][2]){
        return true
    }
    //de lo contrario si los elementos en diagonal desde el tercer elemento de la primera fila son iguales retorne true
    else if(board[0][2] === board[1][1] && board[1][1] === board[2][0]){
        return true
    }
    //Por ultimo si ninguna de estas condiciones se ejecuta retorne false, porque no hay triqui
    else{
        return false
    }
}

console.log(triqui([
    ["X", "O", "-"],
    ["O", "O", "X"],
    ["-", "O", "X"]
  ])) // true
  
console.log(triqui([
    ["X", "X", "-"],
    ["O", "O", "X"],
    ["-", "O", "X"]
  ])) // false