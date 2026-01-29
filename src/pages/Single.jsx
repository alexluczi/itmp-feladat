import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Single() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://itmp.sulla.hu/users/${id}`)
      .then(res => setUser(res.data))
      .catch(() => setError(true));
  }, [id]);
}
export default Single;
