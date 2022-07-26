

import {useNavigate} from 'react-router-dom';

import React, { useState } from 'react';


const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        // to does not reloading the page when the user click in the button of the form.
        e.preventDefault();

        navigate("/search?q=" + query);
    };

  return  <form onSubmit={handleSubmit}>
   <input type="text" onChange={(e) => setQuery(e.target.value)}/>
   <input type="submit" value="SearchValue" />
  
  </form>
}

export default SearchForm;