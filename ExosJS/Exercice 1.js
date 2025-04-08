function generateToken(user) {
    const jsonString = JSON.stringify(user);
    const token = btoa(jsonString);
    return token;
}

function verifyToken(token) {
    const jsonString = atob(token);
    const user = JSON.parse(jsonString);
    return user;
}

const utilisateur = {
    username: "alice",
    email: "alice@example.com"
};

const token = generateToken(utilisateur);
console.log("Token :", token);

const utilisateurDecode = verifyToken(token);
console.log("Utilisateur vérifié :", utilisateurDecode);