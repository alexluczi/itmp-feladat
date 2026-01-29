import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const updateUser = async () => {
    try {
      const res = await axios.put(`https://itmp.sulla.hu/users/${id}`, { name, email });
      setResult(res.data);
    } catch (err) {
      setResult(false);
    }
  };

  return null;
}

export default Update;
