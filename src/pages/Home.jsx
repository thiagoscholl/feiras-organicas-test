import React, { useState } from "react";
import MapboxMap from "../components/map/MapboxMap";
import MapFilter from "../components/map/MapFilter";
import MarkerDetail from "../components/map/MarkerDetail";

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    console.log(product);
  };

  return (
    <div className='flex min-h-full w-full'>
      <div className='w-2/5'>
        {selectedProduct ? (
          <MarkerDetail product={selectedProduct} />
        ) : (
          <MapFilter />
        )}
      </div>
      <div className='w-3/5'>
        <MapboxMap
          product={selectedProduct}
          handleSelectProduct={handleSelectProduct}
        />
      </div>
    </div>
  );
}

export default Home;

