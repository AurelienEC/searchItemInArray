let personnage1 = {
    name : "Laurent",
    moves: 3,
}

let personnage2 = {
    name : "Aurélien",
    moves : 2,
}

const persos = [personnage1, personnage2];

let laurent = persos.find(elt => elt.name === 'Laurent');
console.log("déplacements laurent", laurent.moves);
