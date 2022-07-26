import React, {useEffect} from 'react';
import { useFetch } from '../hooks/useFetch';

import { useParams, Link, Route } from 'react-router-dom';

import NotFound from './NotFound';

const Product = () => {
    //dinamic route
    const { id } = useParams();

    // loading individual data
    const url = 'http://localhost:3000/products/' + id;

    const {data: product, loading, error} = useFetch(url);

    console.log(product);

    return (
        <>
        <p>Id do produto: {id}</p>
        {/* erro = true */}
        {error && <p>An error has occurred</p> }
        {loading && <p>Loading</p>}
        {product && (
            <div>
                <p>Product name: {product.name}</p>
                <p>R${product.price}</p>
                {/* nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                
                
            </div>
        )}
        </>
    )
}

export default Product;