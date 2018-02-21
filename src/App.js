import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favarites from './pages/Favarites';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                component={Home}
              />
              <Route
                path="/favarites"
                component={Favarites}
              />
              <Route
                component={NotFound}
              />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
