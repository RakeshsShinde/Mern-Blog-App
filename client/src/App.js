
import './App.css';
import Navbar from '../src/component/Navbar/Navbar';

import Single from './pages/Single/Single';
import Home from './pages/home/Home';
import Write from './pages/write/write';
import Setting from './pages/setting/setting';
import {
  BrowserRouter as Router,
  // Link,
  Switch,
  Route
} from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { useContext } from 'react';
import { Context } from './context/Context';


function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/write'>
            {user ? <Write /> : <Login />}
          </Route>
          <Route path='/login'>
            {user ? <Home /> : <Login />}
          </Route>
          <Route path='/setting'>
            {user ? <Setting /> : <Login />}
          </Route>
          <Route path='/post'>
            <Single />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>
        </Switch>






      </div>
    </Router>
  );
}

export default App;
