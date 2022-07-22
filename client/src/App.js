import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { loadUserAction } from './actions/User';
import Navbar from './components/Navbar';
function App() {

  const {isAuth} = useSelector((state) => (state.myweb))

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUserAction());
  },[dispatch])
  return (
    <BrowserRouter className="App">
      <Navbar isAuth={isAuth}/>
       <Switch>
        <Route exact path='/'>
        {
          isAuth ? <Dashboard /> : <Login />
        }
        </Route>


        <Route exact path='/register'>
            <Register />
        </Route>

       </Switch>

    </BrowserRouter>
  );
}

export default App;
