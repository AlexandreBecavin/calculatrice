import readlineSync from 'readline-sync';

console.log("------- Meilleure calculatrice scientifique du monde -------");

function isNumeric(value) {
    return /^[0-9]+$/.test(value);
}

function calcCmd() {
    var cmd = readlineSync.question("Quelle opération voulez-vous faire ? (add, sub, mul, div, mod) ");

    var nb1 = readlineSync.question("Premier nombre ");
    var nb2 = readlineSync.question("Deuxième nombre ");

    // Vérifie si nb1 et nb2 contiennent uniquement des chiffres
    if (!isNumeric(nb1) || !isNumeric(nb2)) {
        console.log("Veuillez entrer des nombres valides.");
        return;
    }

    nb1 = parseInt(nb1);
    nb2 = parseInt(nb2);

    var result = 0;

    if (cmd == "add") {
        result = nb1 + nb2;
    } else if (cmd == "sub") {
        result = nb1 - nb2;
    } else if (cmd == "mul") {
        result = nb1 * nb2;
    } else if (cmd == "mod") {
        if (nb2 !== 0) {
            result = nb1 % nb2;
        } else {
            console.log("Modulo par zéro impossible.");
            return;
        }
    } else if (cmd == "div") {
        if (nb2 !== 0) {
            result = nb1 / nb2;
        } else {
            console.log("Division par zéro impossible.");
            return;
        }
    } else {
        console.log("Commande non reconnue");
        return;
    }

    console.log("Le résultat est : " + result);
}

calcCmd();
