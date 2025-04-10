const BASE_URL = 'http://localhost:3000/reservations';

export async function createReservation(dto) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(dto),
    });
    if (!res.ok) throw new Error('Échec de la réservation');
    return res.json();
}
