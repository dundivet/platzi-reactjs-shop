import React from 'react';

import '../styles/global.scss';

import Layout from '../views/Layout';
import Login from '../views/Login';


const App = () => {
    return ( 
        <Layout >
            <Login />
        </Layout>
     );
}
 
export default App;
