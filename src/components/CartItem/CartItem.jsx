/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { RiDeleteBin6Fill } from 'react-icons/ri';


import './CartItem.css';
import formatCurrency from '../../utils/format.Currency';
import AppContext from '../../context/AppContent';


function CartItem( { data } ) {

    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price } = data;

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id );
        setCartItems(updatedItems);
    }; 

    return( 
        <section className="cart-item"> 
            <img src={ thumbnail } alt="Image do produto" className="cart-item-image" />

            <div className="cart-item-content" >
                <h3 className="cart-item-title"> { title } </h3>
                <h3 className="cart-item-price">{formatCurrency(price, 'BRL' )}</h3>

                <button type="button" className="button__remove-item" onClick={ handleRemoveItem } >
                    <RiDeleteBin6Fill />
                </button>

            </div>
        </section>
     );
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;
