import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login';
import { Terminals } from './pages/Terminals';
import { Buyers } from './pages/Buyers';
import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState'
import { LocalstorageState } from './context/localstorage/LocalstorageState';

function App() {
  return (
    <LocalstorageState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Login} />
              <Route path={'/Terminals'} component={Terminals} />
              <Route path={'/Buyers'} component={Buyers} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </LocalstorageState>
  );
}

export default App;
