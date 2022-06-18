// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadForm from './UploadForm';

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="signUpMainBtn">Upload Song</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadForm />
        </Modal>
      )}
    </>
  );
}

export default UploadFormModal;
