import React, { useEffect } from "react";
import ProductsList from "../components/products/ProductsList.jsx";
import { useDispatch } from "react-redux";
import { productsLoadFailed, productsLoaded, startFetching } from "../redux/slices/productsSlice.js";

export default function ProductsPage() {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(startFetching());
    fetch('https://dummyjson.com/products')
      .then( resp => {
        if (!resp.ok) {
          throw new Error('Something went wrong ' + resp.status)
        }
        return resp.json();
      })
      .then( data => {
        dispatch(productsLoaded(data.products));
      })
      .catch(err => {
        dispatch(productsLoadFailed(err.message))
      });
  }, []);

  return (
    <ProductsList />
  );
}