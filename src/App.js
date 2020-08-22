import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Login } from './pages/Login';
import { Terminals } from './pages/Terminals';
import { Buyers } from './pages/Buyers';
import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState'
import { LocalstorageState } from './context/localstorage/LocalstorageState';

function App() {
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem("auth") ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }

  return (
    <LocalstorageState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Login} />
              <PrivateRoute path={'/Terminals'}>
                <Terminals />
              </PrivateRoute>
              <PrivateRoute path={'/Buyers'}>
                <Buyers />
              </PrivateRoute>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </LocalstorageState>
  );
}



export default App;
