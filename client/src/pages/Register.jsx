import { useState } from 'react';
import { register } from '../api/auth';

export default function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(form.username, form.email, form.password);
            alert('Compte créé ! Connecte-toi 🔐');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 space-y-4">
            <h2 className="text-2xl font-bold">Inscription</h2>
            <input type="text" placeholder="Pseudo" className="input" value={form.username} onChange={e => setForm({...form, username: e.target.value})} />
            <input type="email" placeholder="Email" className="input" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            <input type="password" placeholder="Mot de passe" className="input" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            <button type="submit" className="btn">Créer un compte</button>
        </form>
    );
}
