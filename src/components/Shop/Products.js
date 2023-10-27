import React from 'react';
import './Products.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { cartActions } from '../../store';
import styled from 'styled-components';


const Products = (props) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const {id, title, price} = props;

    const quantityHandler = (e) => {
        setQuantity(parseInt(e.target.value))
    }
    
    const addItemToCart = () => {
        dispatch(cartActions.addToCart({
            id,
            price,
            quantity,
            title
        }))
        setQuantity(1)
    }

    return (
        <div className='item-box'>
            <div>
                <Title>{title}</Title>
                <Price>{price}원</Price>
            </div>
            <div>
                <label>수량 </label> 
                <input 
                    type='number' 
                    min={1}
                    max={50} 
                    value={quantity}
                    onChange={quantityHandler}/>
                <Addbtn onClick={addItemToCart}>추가하기</Addbtn>
            </div>
        </div>
    );
};

export default Products;


const Title = styled.p`
    margin: 10px 0;
    font-size: 18px;
`

const Price = styled.p`
    margin: 10px 0;
    font-weight: 500;
    font-size: 18px;
`

const Addbtn = styled.button`
    display: block;
    padding: 4px 10px;
    margin-top: 5px;
`