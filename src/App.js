import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Login } from './pages/Login';
import { Terminals } from './pages/Terminals';
import { Buyers } from './pages/Buyers';
import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert';
import { Footer } from './components/Footer';
import { AlertState } from './context/alert/AlertState'
import { LocalstorageState } from './context/localstorage/LocalstorageState';



function App() {

  const DefaultRoutes = () => {
    return (
      <div>
        <Navbar />
        <AlertState>
          <Alert />
          <Switch>
            <div className="container pt-4">
              <div className="content">
                <PrivateRoute path={'/Terminals'}>
                  <Terminals />
                </PrivateRoute>
                <PrivateRoute path={'/Buyers'}>
                  <Buyers />
                </PrivateRoute>
              </div>
            </div>
          </Switch>
        </AlertState>
        <Footer />
      </div>
    );
  };

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
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Login} />
          <Route component={DefaultRoutes} />
        </Switch>
      </BrowserRouter>
    </LocalstorageState>
  );
}



export default App;
