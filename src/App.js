import { Component } from 'react';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Product from './pages/Product';
import Sell from './pages/Sell';
import SellLandingPage from './pages/SellLandingPage';
import Buy from './pages/Buy';
import Admin from './admin/Admin';
import AdminApp from './admin/AdminApp';
import BookingSale from './admin/pages/BookingSale';

class App extends Component {
  render() {
    return (

      <>
        <Switch>
          <Route path='/sell' exact>
            <Sell />
          </Route>
          <Route path='/sell-landing' exact>
            <SellLandingPage/>
          </Route>
          <Route path='/buy' exact>
            <Home />
          </Route>
          <Route path='/buy-list' exact>
            <Buy />
          </Route>
         
          <Route path='/property/:id' exact>
            <Product />
          </Route>
          <Route path='/admin' exact>
            <Admin />
          </Route>
          
          <Route path='/' exact>
            <Home />
          </Route>
        
        </Switch>
      </>



    );
  }
}

export default App;
