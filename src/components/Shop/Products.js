import React from 'react';
import './Products.css'
import { useDispatch, useState } from 'react';
import { cartActions } from '../../store';

const Products = (props) => {
    const { title, price, quantity, id } = props;
    const addItemHandler = () => {
        
    }

    return (
        <form className='item-box' onSubmit={addItemHandler}>
            <div>
                <p>{title}</p>
                <p>{price}원</p>
            </div>
            <div>
                <p>수량
                    <input
                        type='number'
                        min='1'
                        max='50'
                        placeholder='1'
                    />
                </p>
                <p><button>추가하기</button></p>
            </div>
        </form>
    );
};

export default Products;