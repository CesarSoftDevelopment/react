import React from 'react';

import {Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';

import './Home.css';

const Home = () => {
    // 3 - loading of datas
    const url = 'http://localhost:3000/products';

    const {data: items, loading, error} = useFetch(url);

    return (
        <div>
            <h1>Products</h1>
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map(item => (
                    <li key={item.id}>
                        <p>PRODUCT NAME: {item.name}</p>
                        <p>PRECO: R$ {item.price}</p>
                        dinamic route<br/>
                        <Link to={`/products/${item.id}`}>Details</Link>
                        <hr></hr>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;