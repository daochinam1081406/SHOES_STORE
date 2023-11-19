// ProductList.jsx

import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productsData, onProductClick }) => {
  return (
    <div className="row">
      {productsData.map((product) => (
        <div className="col-4">
          <ProductItem
            key={product.id}
            item={product}
            onProductClick={onProductClick}
          />
        </div>
      ))}
    </div>
    //    <div className="row">
    //    {data.map((product) => (
    //      <div key={product.id} className="col-4">
    //        <ShoeItem product={product} />
    //      </div>
    //    ))}
    //  </div>
  );
};

export default ProductList;
