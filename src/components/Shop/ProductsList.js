import React from 'react';
import Products from './Products';
import './ProductsList.css'

const ProductsList = () => {
    const products = [
        {
            id: 'p1',
            title: '피자',
            price: 20000,
            quantity: 1
        },
        {
            id: 'p2',
            title: '김치찌개',
            price: 9000,
            quantity: 1
        },
        {
            id: 'p1',
            title: '자장면',
            price: 6500,
            quantity: 1
        }
    ]
    return (
        <div className='productsList'>
            <ul>
                {products.map((product) => (
                    <li><Products items={product} /></li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;