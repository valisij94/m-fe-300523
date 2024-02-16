import React from "react"

export default function ProductCard( {product} ) {
  return (
    <div className="productCard">
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p><b>{product.price}</b></p>
      <button>Add to Cart</button>
    </div>
  )
}