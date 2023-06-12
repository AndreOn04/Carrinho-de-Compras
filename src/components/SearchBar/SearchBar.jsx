/* eslint-disable indent */
import React, { useState, useContext } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContent';

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');

    const { setProducts, setLoading } = useContext(AppContext);

    const handleSearch = async ( event ) => {
        event.preventDefault();
        setLoading(true);
        const products = await fetchProducts(searchValue);
        
        setProducts(products);
        setLoading(false);
        setSearchValue('');
    };

    return( 
        <form className="search-bar" onSubmit={ handleSearch }>
            {name}
            <input type="search" 
            value={ searchValue }
            placeholder="Buscar Produtos" 
            className="search__input" 
            onChange={ ({target}) => setSearchValue(target.value) } 
            required 
            />
            
            <button type="submit" className="search__button">
                <BiSearchAlt2 />
            </button>
        </form>
     );
}

export default SearchBar;
