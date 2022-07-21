import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../actions/User'

const Login = ( ) => {
    const errorMsg = useSelector((state) => (state.myweb.error))
    const dispatch = useDispatch();
    var eRef = useRef();
    var pRef = useRef();
    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(loginAction(eRef.current.value, pRef.current.value))
    }
    return (
    <div>
        <div class="mb-3 container mt-5">
            <label for="email" class="form-label">Email</label>
            <input ref={eRef} type="text" class="form-control" id="email" placeholder="email" />
            
            <label for="password" class="form-label">Password</label>
            <input ref={pRef} type="password" class="form-control" id="password" placeholder="password" />

            <button onClick={loginHandler} className='btn btn-primary mt-4'>Login</button>
        </div>
        { errorMsg ? <p className="text-danger">{errorMsg}</p> : null }
    </div>
    )
}

export default Login;