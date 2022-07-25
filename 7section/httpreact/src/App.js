
import './App.css';

// save datas in some place(useState) useEffect to let the link automatically

import {useState, useEffect} from 'react';

// 4 - import custom hook
import { useFetch } from './hooks/useFetch';

// base url
const url = "http://localhost:3000/products";

function App() {
  // save datas(array empty to start) 
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url);
 

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - bring products
  /* old example
  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fecthData();
  }, []);
*/
 
  // 2 - add products
  const handleSubmit = async (e) => {
    e.preventDefault()

    // create javascript object
    const product = {
      name,
      price
    };

    /* old way to dinamyc loading
    // setting request(res is request with object)
    const res = await fetch(url, {
      method: "POST",
      headers: {
        // say what is the content type, because exists others types
        "Content-Type": "application/json"
      },
      // request body => "transforming javascript object(produc) in JSON"
      body: JSON.stringify(product)
    });
  
     // 3 - dynamic loading

     const addedProduct = await res.json()

      setProducts((prevProducts) => [...prevProducts, addedProduct])
      */

      // 5 - refactoring post
      httpConfig(product, "POST");

      // reset variable => cleaning inputs
      setName("");

      // reset variable  => cleaning inputs
      setPrice("");
      

  };

 

  return (
    <div className="App">
      <h1>API: Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
         <ul>
         {items && items.map((product) => (
           <li key={product.id}>{product.name} - R$: {product.price}
           <button className='btn'>Remove</button></li>
         ))}
       </ul>
       
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>  
          <label>
            Name:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Price:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* 7 - post state load */}
          {loading && <input className='submit_type' type="submit" value="Aguarde" /> }
          {!loading && <input className='submit_type' type="submit" value="create" /> }
        </form>
      </div>
    </div>
  );
}

export default App;
