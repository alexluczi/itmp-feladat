import { useEffect, useState } from 'react';
import axios from 'axios';
import Single from './Single';
import Update from './Update';
import Del from './Del';
import Mod from './Mod';

function List() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    axios.get('https://itmp.sulla.hu/users')
      .then(res => setUsers(res.data))
      .catch(() => setError(true));
  }, []);

  const openModal = (type, user = null) => setModal({ type, user });
  const closeModal = () => setModal(null);

  return (
    <div className="container mt-4">
      <h2>Felhasználók</h2>
      <button className="btn btn-success mb-3" onClick={() => openModal('new')}>Új felhasználó</button>
      <div className="row g-3">
        {users.map(user => (
          <div className="col-12" key={user.id}>
            <div className="card d-flex flex-row align-items-center justify-content-between p-3">
              <div>
                <div className="fw-bold">{user.name}</div>
                <div className="text-muted">{user.email}</div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary" title="Részletek" onClick={() => openModal('details', user)}>
                  <i className="bi bi-eye"></i>
                </button>
                <button className="btn btn-outline-primary" title="Szerkesztés" onClick={() => openModal('edit', user)}>
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button className="btn btn-outline-danger" title="Törlés" onClick={() => openModal('delete', user)}>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modal.type === 'details' && 'Felhasználó részletei'}
                  {modal.type === 'edit' && 'Felhasználó szerkesztése'}
                  {modal.type === 'delete' && 'Felhasználó törlése'}
                  {modal.type === 'new' && 'Új felhasználó'}
                </h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                {modal.type === 'details' && <Single user={modal.user} />}
                {modal.type === 'edit' && <Update user={modal.user} onUpdate={closeModal} />}
                {modal.type === 'delete' && <Del user={modal.user} onDelete={closeModal} />}
                {modal.type === 'new' && <Mod onCreate={closeModal} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default List;
