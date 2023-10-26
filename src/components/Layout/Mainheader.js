import React from 'react';
import './Mainheader.css';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Mainheader = () => {
    const [openCart, setOpenCart] = useState(false);

    const showCart = () => {
        setOpenCart(true);
    }
    const closeCart = () => {
        setOpenCart(false);
    }
    return (
        <>
            {openCart && <Cart close={closeCart} />}
            <header>
                <h1>DeliveryApp</h1>
                <button className='cart-btn' onClick={showCart}>
                    <span>장바구니</span>
                    <span>수량</span>
                </button>
            </header>
        </>
    );
};

export default Mainheader;