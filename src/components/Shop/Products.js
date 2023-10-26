import React from 'react';
import './Products.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';


const Products = (props) => {
    const [quantity, setQuantity] = useState('1');
    const dispatch = useDispatch();


    const quantityHandler = (e) => {
        setQuantity(e.target.value)
    }
    
    const addQuantity = () => {
        dispatch({type:'addCart', quantity: quantity*1});
        setQuantity('1')
    }

    return (
        <div className='item-box'>
            <div>
                <p>{props.title}</p>
                <p>{props.price}원</p>
            </div>
            <div>
                <label>수량</label> 
                <input 
                    type='number' 
                    min='1' 
                    max='50' 
                    value={quantity}
                    onChange={quantityHandler}/>
                <button onClick={addQuantity}>추가하기</button>
            </div>
        </div>
    );
};

export default Products;