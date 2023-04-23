import { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Feedback from './pages/Feedback';
import { Route, Switch } from 'react-router-dom';
import Product from './pages/Product';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/feedback' exact>
            <Feedback />
          </Route>
          <Route path='/cart' exact>
            <Cart />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/product/:id' exact>
            <Product />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
