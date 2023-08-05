import { Component } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './pages/Product';
import Sell from './pages/Sell';
import SellLandingPage from './pages/SellLandingPage';
import Buy from './pages/Buy';
import Admin from './admin/Admin';
import Agent from './pages/Agent';

class App extends Component {
  render() {
    return (

      <>
      <Router>
        <Switch>
          <Route path='/sell' exact>
            <Sell />
          </Route>
          <Route path='/sell-landing'>
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
          <Route path='/agent' exact>
            <Agent />
          </Route>
          
          <Route path='/' exact>
            <Home />
          </Route>
        
        </Switch>
        </Router>
      </>



    );
  }
}

export default App;
