import { Component } from 'react';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import { Route, Switch } from 'react-router-dom';
import Product from './pages/Product';
import Sell from './pages/Sell';

class App extends Component {
  render() {
    return (

      <>
        <Switch>
          <Route path='/sell' exact>
            <Sell />
          </Route>
          <Route path='/buy' exact>
            <Home />
          </Route>
          <Route path='/feedback' exact>
            <Feedback />
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
