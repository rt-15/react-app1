import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OrderForm from "../order-form/OrderForm";
import Listgroup from "../listgroup/Listgroup";
import {Link, Route, Switch} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/list">List</Link> </li>
            <li> <Link to="/order">Order</Link> </li>
        </ul>

        <div>
            <Switch>
                <Route path="/list" component={Listgroup}/>
                <Route path="/order" component={OrderForm}/>
            </Switch>
        </div>
    </div>

  );
};

export default App;
