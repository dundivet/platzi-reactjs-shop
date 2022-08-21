import React from 'react';
import CartArticle from '../components/CartArticle';

import '../styles/myOrder.scss';

const MyOrder = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>

                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>

                    <CartArticle />
                    <CartArticle />
                    <CartArticle />

                </div>
            </div>
        </div>
    );
}

export default MyOrder;