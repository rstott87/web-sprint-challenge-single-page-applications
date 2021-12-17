import React from "react";
import { Route, Link } from 'react-router-dom';
import Form from './Form'

const App = () => {
  return (
    <>
      <nav> 
      <h1>Lambda Eats</h1>
        <Link to="/">
          <div id="home">Home</div>
        </Link>
        <Link to="/pizza">
          <div id="order-pizza">Order Pizza</div>
        </Link>
      </nav>
      <Route path ="/pizza">
          <Form></Form>
        </Route>

      <Route exact path="/">
      </Route>
    </>
  );
};
export default App;
