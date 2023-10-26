import React from 'react';
import './Mainheader.css';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Mainheader = () => {
    const [openCart, setOpenCart] = useState(false);

    const modalHandler = () => {
        setOpenCart(!openCart);
    }

    return (
        <>
            {openCart && <Cart modalHandler={modalHandler} />}
            <header>
                <h1>DeliveryApp</h1>
                <button className='cart-btn' onClick={modalHandler}>
                    <span>장바구니</span>
                    <span>수량</span>
                </button>
            </header>
        </>
    );
};

export default Mainheader;