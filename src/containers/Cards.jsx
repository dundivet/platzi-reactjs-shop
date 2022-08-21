import React from 'react';
import ProductCard from '../components/ProductCard';

import '../styles/cards.scss';

const Cards = () => {
    return (
        <section class="main-container">
            <div class="cards-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}

export default Cards;