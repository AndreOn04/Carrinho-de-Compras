/* eslint-disable indent */
import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductsCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContent';

function Products() {

     const { products, setProducts, loading, setLoading } = useContext(AppContext);   
    
    useEffect(() => {
        
        fetchProducts('iphone').then((response) => {

            setProducts(response);
            setLoading(false);
        });

    }, []);

    console.log(products);

    return (

        (loading ? <Loading /> : <section className="products container">
        {
            products.map((product) => <ProductsCard key={product.id} data={ product } />)
        }

    </section>)

    );
}

export default Products;
