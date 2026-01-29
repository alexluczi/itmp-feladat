import { useState } from 'react';
import axios from 'axios';

function Mod() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const createUser = async () => {
    try {
      const res = await axios.post('https://itmp.sulla.hu/users', { name, email });
      setResult(res.data);
    } catch (err) {
      setResult(false);
    }
  };

  return null;
}

export default Mod;
