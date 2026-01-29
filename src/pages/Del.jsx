import { useState } from 'react';
import axios from 'axios';

function Del({ user, onDelete }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`https://itmp.sulla.hu/users/${user.id}`);
      if (onDelete) onDelete();
    } catch {
      setError('Hiba történt a törléskor.');
    }
    setLoading(false);
  };

  if (!user) return null;

  return (
    <div>
      <p>Biztosan törlöd ezt a felhasználót?</p>
      <div><b>{user.name}</b> ({user.email})</div>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      <button className="btn btn-danger mt-3" onClick={handleDelete} disabled={loading}>Törlés</button>
    </div>
  );
}
export default Del;
