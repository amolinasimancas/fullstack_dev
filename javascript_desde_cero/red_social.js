const usersDatabase = [
    {
        username: "luis",
        password: "123",
    },
    {
        username: "romina",
        password: "456",
    },
    {
        username: "alejandro",
        password: "789",
    },
    {
        username: "alfonsina",
        password: "012",
    },
]

const usersTimeLine = [
    {
        username: "Luis",
        timeline: "Adoro Unity y C#"
    },
    {
        username: "Romina",
        timeline: "HTML, CSS y JavaScript for the win!"
    },
    {
        username: "Alejandro",
        timeline: "Psssss Python!"
    },
    {
        username: "Alfonsina",
        timeline: "What's my database again?"
    },
];

const username = prompt("¿Cuál es tu usuario?");
const password = prompt("¿Cuál es tu contraseña?");

function usuarioExistente(username, password) {
    for(let i = 0; i < usersDatabase.length; i++){
        if(usersDatabase[i].username === username && usersDatabase[i].password === password){
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeLine);
    }
    else {
        alert("Uuups!, usuario o contraseña incorrectos")
    }
}

signIn(username, password);