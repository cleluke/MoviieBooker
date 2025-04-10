import { useState } from 'react';
import { createReservation } from '../api/reservations';

export default function Reservation() {
    const [movieTitle, setMovieTitle] = useState('');
    const [startTime, setStartTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createReservation({ movieTitle, startTime });
            alert('Réservation faite 🎟️');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12 space-y-4">
            <h2 className="text-2xl font-bold">Réserver un film</h2>
            <input type="text" placeholder="Titre du film" className="input" value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
            <input type="datetime-local" className="input" value={startTime} onChange={e => setStartTime(e.target.value)} />
            <button type="submit" className="btn">Réserver</button>
        </form>
    );
}
