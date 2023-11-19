// ShoesStore.jsx

import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./ShoesData.json"; // Import trực tiếp file JSON

const ShoesStore = () => {
  const [modalContent, setModalContent] = useState(null);
  const [products, setProducts] = useState(data); // Sử dụng trực tiếp dữ liệu từ file JSON

  useEffect(() => {
    // Có thể xử lý các tác vụ khác nếu cần
  }, []); // Empty dependency array means it will only run once on component mount

  const handleProductClick = (product) => {
    setModalContent(product);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Shoe Shop</h1>
        {/* Truyền dữ liệu xuống ProductList và Modal thông qua props */}
        <ProductList
          productsData={products}
          onProductClick={handleProductClick}
        />
        {modalContent && <Modal content={modalContent} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default ShoesStore;
