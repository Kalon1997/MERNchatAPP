import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logoutAction} from '../actions/User'
const Navbar = ( {isAuth} ) => {
    const history = useHistory()
    const dispatch = useDispatch()
    return (
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a href="/" class="navbar-brand">Navbar</a>
<div>
    {
        isAuth ? <button onClick={(e) => {dispatch(logoutAction())}} >Logout</button> : <div><button onClick={(e) => {history.push('/')}}>Login</button> <button onClick={(e) => {history.push('/register')}}>Register</button> </div>
    }
</div>
  </div>
</nav>
    )
}

export default Navbar;