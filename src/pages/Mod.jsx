import { useState } from 'react';
import axios from 'axios';

function Mod({ onCreate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post('https://itmp.sulla.hu/users', { name, email });
      setName('');
      setEmail('');
      if (onCreate) onCreate();
    } catch {
      setError('Hiba történt a létrehozáskor.');
    }
    setLoading(false);
  };

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
      <button type="submit" className="btn btn-success" disabled={loading}>Létrehozás</button>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </form>
  );
}
export default Mod;
