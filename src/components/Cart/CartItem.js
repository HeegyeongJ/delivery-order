import React from 'react';
import styled from 'styled-components';

const CartItem = ({item}) => {
    return (
        <ItemDiv>
            <p>상품: {item.title}</p>
            <p>담은 개수: {item.quantity}</p>
            <p>총 금액: {item.totalPrice}</p>
        </ItemDiv>
    );
};

export default CartItem;


const ItemDiv = styled.div`
    border: 1px solid #000;
    padding: 10px 15px;
    margin: 10px 0;
`