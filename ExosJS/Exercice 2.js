const utilisateurs = [
    { id: 1, nom: "Alice", email: "alice@gmail.com" },
    { id: 2, nom: "Bob", email: "bob@bougue.com" },
    { id: 3, nom: "Charlie", email: "charlie@free.com" },
    { id: 4, nom: "David", email: "david@gmail.com" },
    { id: 5, nom: "Emma", email: "emma@protonmail.com" },
    { id: 6, nom: "Frank", email: "frank@yahoo.com" },
    { id: 7, nom: "Grace", email: "grace@hotmail.com" },
    { id: 8, nom: "Hugo", email: "hugo@laposte.net" },
    { id: 9, nom: "Isabelle", email: "isabelle@gmail.com" },
];

function filtrerTableau(tableau, critere) {
    return tableau.filter(item => {
        for (let cle in critere) {
            if (typeof critere[cle] === "string") {
                // Recherche dans les chaînes (inclusif)
                if (!item[cle]?.includes(critere[cle])) return false;
            } else {
                // Égalité stricte pour les autres types
                if (item[cle] !== critere[cle]) return false;
            }
        }
        return true;
    });
}

console.log("Filtrer par adresse gmail :");
console.log(filtrerTableau(utilisateurs, { email: "gmail" }));

console.log("Filtrer par nom contenant 'li' :");
console.log(filtrerTableau(utilisateurs, { nom: "li" }));