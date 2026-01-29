import { useState, useEffect } from 'react';
import axios from 'axios';

function Update({ user, onUpdate }) {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setName(user ? user.name : '');
    setEmail(user ? user.email : '');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.put(`https://itmp.sulla.hu/users/${user.id}`, { name, email });
      if (onUpdate) onUpdate();
    } catch {
      setError('Hiba történt a frissítéskor.');
    }
    setLoading(false);
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Név</label>
        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>Mentés</button>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </form>
  );
}
export default Update;
