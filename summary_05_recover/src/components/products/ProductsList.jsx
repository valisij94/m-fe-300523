
import ProductCard from './ProductCard.jsx';
import { useSelector } from 'react-redux';

export default function ProductsList() {

  const {productsList, isFetching, error} = useSelector( state => state.products );

  const cart = useSelector( state => state.cart );
  console.log(cart);

  return (
    <>
      {isFetching && <p>Please wait...</p>}
      {
        error ?
          <p>{error}</p> :
          <div className="productsList">
            {
              productsList.map(prod => <ProductCard key={prod.id} product={prod} />)
            }
          </div>
      }
    </>
  );
}