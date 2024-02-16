import React, { useEffect } from "react";
import ProductsList from "../components/products/ProductsList.jsx";
import { useDispatch } from "react-redux";
import { productsLoadFailed, productsLoaded, startFetching } from "../redux/slices/productsSlice.js";
import useFetch from "../hooks/useFetch.jsx";

export default function ProductsPage() {

  const dispatch = useDispatch();

  // useEffect( () => {
  //   dispatch(startFetching());
  //   fetch('https://dummyjson.com/products')
  //     .then( resp => {
  //       if (!resp.ok) {
  //         throw new Error('Something went wrong ' + resp.status)
  //       }
  //       return resp.json();
  //     })
  //     .then( data => {
  //       dispatch(productsLoaded(data.products));
  //     })
  //     .catch(err => {
  //       dispatch(productsLoadFailed(err.message))
  //     });
  // }, []);

  const { isLoading, data, error } = useFetch('https://dummyjson.com/products');

  useEffect( () => {
    if (isLoading) dispatch(startFetching());
    if (error) dispatch(productsLoadFailed(error));
    if (data) dispatch(productsLoaded(data.products));
  }, [isLoading, data, error]);

  return (
    <ProductsList />
  );
}