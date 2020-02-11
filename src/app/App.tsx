import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OrderForm from "../order-form/OrderForm";

const App: React.FC = () => {
    return (
        <div className="App">
            <OrderForm />
        </div>

    );
};

export default App;
