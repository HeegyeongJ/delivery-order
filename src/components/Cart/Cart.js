import React from 'react';
import './Cart.css';
import ReactDOM from 'react-dom';

const Backdrop = () => {
    return (
        <div className='backdrop'></div>
    );
}

const Modal = (props) => {
    return (
        <div className='cart' >
            <div>아이템 박스</div>
            <div className='total'>
                <p>전체 금액</p>
                <p>가격</p>
            </div>
            <div className='btns'>
                <button onClick={props.close}>취소</button>
                <button>결제</button>
            </div>
        </div>
    );
}

const Cart = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(
                <Backdrop />, document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Modal />, document.getElementById('modal-root')
            )}
        </div>
    );
};

export default Cart;