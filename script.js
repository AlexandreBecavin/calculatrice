import readlineSync from 'readline-sync';

console.log("------- Meilleure calculatrice du monde -------");

function calcCmd() {
    var cmd = readlineSync.question("Quelle opération voulez-vous faire ? (add, sub, mul, div) ");

    var nb1 = parseInt(readlineSync.question("Premier nombre "));
    var nb2 = parseInt(readlineSync.question("Deuxième nombre "));

    if (isNaN(nb1) || isNaN(nb2)) {
        console.log("Veuillez entrer des nombres valides.");
        return;
    }

    var result = 0;

    if (cmd == "add") {
        result = nb1 + nb2;
    } else if (cmd == "sub") {
        result = nb1 - nb2;
    } else if (cmd == "mul") {
        result = nb1 * nb2;
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
