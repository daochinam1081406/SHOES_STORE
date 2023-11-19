// Modal.jsx

import React from "react";

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{content.name}</h2>
        <p>{content.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default Modal;
