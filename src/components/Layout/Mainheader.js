import React from 'react';
import './Mainheader.css';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Mainheader = () => {
    const totalQuantity = useSelector(state => state.totalQuantity)
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
                    <span>장바구니 </span>
                    <span className='cart-quantity'>{totalQuantity}</span>
                </button>
            </header>
        </>
    );
};

export default Mainheader;