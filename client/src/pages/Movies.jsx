import { useEffect, useState } from 'react';
import { getMovies } from '../api/movies';

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(setMovies).catch(console.error);
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map(movie => (
                <div key={movie.id} className="bg-white shadow rounded p-4">
                    <h3 className="text-xl font-bold">{movie.title}</h3>
                    <p>{movie.overview?.slice(0, 100)}...</p>
                </div>
            ))}
        </div>
    );
}
