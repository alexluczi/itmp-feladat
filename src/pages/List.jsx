import { useEffect, useState } from 'react';
import axios from 'axios';

function List() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://itmp.sulla.hu/users')
      .then(res => setUsers(res.data))
      .catch(() => setError(true));
  }, []);

  return null;
}
export default List;
