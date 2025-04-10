const BASE_URL = 'http://localhost:3000/auth';

export async function login(email, password) {
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Échec de la connexion');
    return res.json();
}

export async function register(username, email, password) {
    const res = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });
    if (!res.ok) throw new Error('Échec de l’inscription');
    return res.json();
}
