import React from 'react'
import { Link } from "react-router-dom"


function Landing(props){

  return(
    <div>
      <h3>LANDING PAGE</h3>
      <Link to="/home"><h5>link to enter mall</h5></Link>
      <Link to="/cart"><h5>link to cart</h5></Link>
      {/* <Switch>
        <Route exact path="/">
          <StoreIndex />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/store/:id">
          <ProductsDisplayPage />
        </Route>
      </Switch> */}
      </div>
  )
}

export default Landing