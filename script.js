let personnage1 = {
    name : "Laurent",
    moves: 3,
}

let personnage2 = {
    name : "Aurélien",
    moves : 2,
}
let personnage3 = {
    name : "ennemy",
    moves : 5,
}
const persos = [personnage1, personnage2, personnage3];

let laurent = persos.find(elt => elt.name === 'Laurent');
console.log("déplacements laurent", laurent.moves);
