import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Del() {
  const { id } = useParams();
  const [result, setResult] = useState(null);

  const deleteUser = async () => {
    try {
      const res = await axios.delete(`https://itmp.sulla.hu/users/${id}`);
      setResult(res.data);
    } catch (err) {
      setResult(false);
    }
  };

  return null;
}

export default Del;
