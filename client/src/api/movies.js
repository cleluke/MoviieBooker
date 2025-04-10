const BASE_URL = 'http://localhost:3000/movies';

export async function getMovies() {
    const res = await fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    });
    if (!res.ok) throw new Error('Erreur récupération films');
    return res.json();
}
