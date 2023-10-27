import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux/es/exports';
import { cartActions } from '../../store';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    
    const addItemHandler = () => {
        dispatch(cartActions.addInCart(item))
    }
    const removeItemHandler = () => {
        dispatch(cartActions.removeInCart(item))
    }
    return (
        <ItemDiv>
            <div>
                <p>상품: {item.title}</p>
                <p>담은 개수: {item.quantity}</p>
                <p>총 금액: {item.totalPrice}</p>
            </div>
            <div>
                <Button onClick={removeItemHandler}>-</Button>
                <Button onClick={addItemHandler}>+</Button>
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