import React from "react"
import { useDispatch } from "react-redux"
import { addProductToCart, dropProductFromCart } from "../../redux/slices/cartSlice";

export default function ProductCard( {product} ) {

  const dispatch = useDispatch();

  return (
    <div className="productCard">
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p><b>{product.price}</b></p>
      <button onClick={() => {
        dispatch(addProductToCart(product));
      }}>Add to Cart</button>

      <button onClick={() => {
        dispatch(dropProductFromCart( { id: product.id, price: product.price} ))
      }}>Drop From Cart</button>
    </div>
  )
}