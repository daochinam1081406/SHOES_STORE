// ProductItem.jsx

import React, { useState } from "react";
import Modal from "./Modal";

const ProductItem = ({ item, onProductClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("handleClick is called");
    onProductClick(item);
    setShowModal(true);
  };
  console.log("showModal:", showModal);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="card">
        <img
          className="card-img"
          src={item.image}
          alt={item.name}
          onClick={handleClick}
        />
        <div className="card-body">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-text">{item.price}$</p>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>

      {/* Modal */}
      {showModal && <Modal content={item} onClose={closeModal} />}
    </div>
  );
};

export default ProductItem;
