import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/global.scss';

import Layout from '../containers/Layout';
import EmailSent from '../containers/EmailSent';
import RecoveryPassword from '../containers/RecoveryPassword';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../containers/Login';
import CreateAccount from '../containers/CreateAccount';
import MyAccount from '../containers/MyAccount';
import Cards from '../containers/Cards';
import MyOrder from '../containers/MyOrder';
import MyOrders from '../containers/MyOrders';
import ProductDetail from '../containers/ProductDetail';
import CheckoutOrder from '../containers/CheckoutOrder';

const App = () => {
    return ( 
        <BrowserRouter>
            <Layout >
                <Routes>
                    <Route exact path="/email-sent" element={<EmailSent />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/create-account" element={<CreateAccount />} />
                    <Route exact path="/my-account" element={<MyAccount />} />
                    <Route exact path="/cards" element={<Cards />} />
                    <Route exact path="/my-order" element={<MyOrder />} />
                    <Route exact path="/my-orders" element={<MyOrders />} />
                    <Route exact path="/product-detail" element={ <ProductDetail /> } />
                    <Route exact path="/checkout" element={ <CheckoutOrder /> } />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
     );
}
 
export default App;
