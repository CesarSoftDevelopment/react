import React from 'react'
import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams;

    const {data: items, loading, error} = useFetch(url);


  return (
    <div>
        <h1>Available</h1>
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

export default Search