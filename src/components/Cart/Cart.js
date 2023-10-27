import React from 'react';
import './Cart.css';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Backdrop = ({modalHandler}) => {
    return (
        <div className='backdrop' onClick={modalHandler}></div>
    );
}

const Modal = ({modalHandler}) => {
    const items = useSelector(state => state.items);
    const totalPrice = useSelector(state => state.totalPrice)   

    return (
        <div className='cart' >
            <div className='item'>
                {items && items.map(item => (
                    <CartItem key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <div className='total'>
                <p>전체 금액</p>
                <p>총 {totalPrice}원</p>
            </div>
            <div className='btns' onClick={(e) => e.stopPropagation()}>
                <button onClick={modalHandler}>취소</button>
                <button>결제</button>
            </div>
        </div>
    );
}

const Cart = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(
                <Backdrop modalHandler={props.modalHandler}/>, document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Modal modalHandler={props.modalHandler}/>, document.getElementById('modal-root')
            )}
        </div>
    );
};

export default Cart;