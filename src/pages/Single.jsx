import { useEffect, useState } from 'react';
import axios from 'axios';

function Single({ user }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    axios.get(`https://itmp.sulla.hu/users/${user.id}`)
      .then(res => setDetails(res.data))
      .catch(() => setError('Hiba történt a lekérdezéskor.'));
  }, [user]);

  if (!user) return null;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!details) return <div>Betöltés...</div>;

  return (
    <div>
      <div><b>Név:</b> {details.name}</div>
      <div><b>Email:</b> {details.email}</div>
      <div><b>ID:</b> {details.id}</div>
    </div>
  );
}
export default Single;
