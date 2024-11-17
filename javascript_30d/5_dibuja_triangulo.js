function printTriangle(size, character){
    let triangle = '';
    let space = ' ';
    for(let i = 1; i <= size-1; i++){ 
        triangle += space.repeat(size-i) + character.repeat(i) + '\n';
    }
    triangle += character.repeat(size);
    console.log(triangle);
}

printTriangle(6,'$');