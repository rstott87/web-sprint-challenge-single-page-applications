import React from "react";
import { Route, Link } from 'react-router-dom';
import Form from './Form'

const App = () => {
  return (
    <>
      <nav> 
      <h1>Lambda Eats</h1>
        <Link to="/">
          <div className="home">Home</div>
        </Link>
        <Link to="/pizza">
          <div className="order-pizza">Order Pizza</div>
        </Link>
        <Route path ="/pizza">
          <Form></Form>
        </Route>
      </nav>

      <Route exact path="/">
      </Route>
    </>
  );
};
export default App;
