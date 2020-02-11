import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// don't forget to import the Link component
import {Link} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
        </ul>

        {/*
           renders to:
        <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/messages">Messages</a> </li>
            <li> <a href="/about">About</a> </li>
        </ul>

        */}
    </div>

  );
};

export default App;
