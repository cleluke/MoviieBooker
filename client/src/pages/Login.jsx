import { useState } from 'react';
import { login } from '../api/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            localStorage.setItem('token', data.token);
            alert('Connexion réussie');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-20 space-y-4">
            <h2 className="text-2xl font-bold">Connexion</h2>
            <input type="email" placeholder="Email" className="input" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" className="input" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" className="btn">Se connecter</button>
        </form>
    );
}
