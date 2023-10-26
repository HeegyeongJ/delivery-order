import React from 'react';
import './Products.css'

const Products = ({items}) => {
    return (
        <div className='item-box'>
            <div>
                <p>{items.title}</p>
                <p>{items.price}원</p>
            </div>
            <div>
                <p>수량 <input type='number' min='1' max='50' placeholder='1' /></p>
                <p><button>추가하기</button></p>
            </div>
        </div>
    );
};

export default Products;