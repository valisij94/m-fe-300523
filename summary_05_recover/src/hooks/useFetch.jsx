
import React, { useEffect, useState } from "react";

export default function useFetch( url ) {

  const [state, setState] = useState({
    isLoading: false,
    data: null,
    error: ''
  });

  useEffect( () => {
    setState( old => ({
      ...old,
      error: '',
      isLoading: true
    }))
    fetch(url)
      .then( resp => {
        if (!resp.ok) {
          throw new Error('Something went wrong ' + resp.status)
        }
        return resp.json();
      })
      .then( data => {
        setState({
          isLoading: false,
          error: '',
          data: data
        });
      })
      .catch(err => {
        setState({
          isLoading: false,
          error: err.message,
          data: null
        });
      });
  }, []);

  return state;
}