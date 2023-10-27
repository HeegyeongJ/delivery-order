import React from 'react';
import styled from 'styled-components';

const CartItem = ({item}) => {
    return (
        <ItemDiv>
            <div>
                <p>상품: {item.title}</p>
                <p>담은 개수: {item.quantity}</p>
                <p>총 금액: {item.totalPrice}</p>
            </div>
            <div>
                <Button>-</Button>
                <Button>+</Button>
            </div>
        </ItemDiv>
    );
};

export default CartItem;


const ItemDiv = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #000;
    padding: 10px 15px;
    margin: 10px 0;
`

const Button = styled.button`
    display:inline-block;
    width:30px;
    height:30px;
`