function getPetExerciseInfo(type, age){
    let info;
    switch(type){
        case "perro":
            switch(true){
                case age >= 0 && age < 1:
                    info = "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
                    break;
                case age >=1 && age <= 7:
                    info = "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
                    break;
                case age > 7:
                    info = "Los perros viejos necesitan caminatas más cortas";
                    break;
                default:
                    info = "Edad inválida";
            }
            break;
        case "gato":
            switch(true){
                case age >= 0 && age < 1:
                    info = "Los gatitos necesitan frecuentes sesiones de juego";
                    break;
                case age >=1 && age <= 7:
                    info =  "Los gatos a esta edad necesitan jugar diariamente";
                    break;
                case age > 7:
                    info = "Los gatos viejos necesitan sesiones de juego más cortas";
                    break;
                default:
                    info = "Edad inválida";
            }
            break;
        case "ave":
            switch(true){
                case age >= 0 && age < 1:
                    info = "Las aves jóvenes necesitan mucho espacio para volar";
                    break;
                case age >=1 && age <= 7:
                    info = "Las aves necesitan jugar diariamente y un lugar para volar";
                    break;
                case age > 7:
                    info = "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
                    break;
                default:
                    info = "Edad inválida";
            }
            break;
        default:
            info = "Tipo de mascota inválida";
    }
    return info;
}

console.log(getPetExerciseInfo("perro", 3));
console.log(getPetExerciseInfo("gato", 8));
console.log(getPetExerciseInfo("mamut", 25));