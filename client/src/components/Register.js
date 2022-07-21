import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {registerAction} from '../actions/User'
const Register = ( ) => {
const dispatch = useDispatch()
const errMsg = useSelector((state) => (state.myweb.rerror))
    var eRef = useRef();
    var uRef = useRef();
    var pRef = useRef();
    const registerHandler = (e) => {
        e.preventDefault()
        dispatch(registerAction(uRef.current.value, eRef.current.value, pRef.current.value))
    }
    return (
    <div>
        <div class="mb-3 container mt-5">
            <label for="email" class="form-label">Email</label>
            <input ref={eRef} type="text" class="form-control" id="email" placeholder="email" />

            <label for="username" class="form-label">Username</label>
            <input ref={uRef} type="text" class="form-control" id="username" placeholder="username" />

            <label for="password" class="form-label">Password</label>
            <input ref={pRef} type="password" class="form-control" id="password" placeholder="password" />
            
            <button onClick={registerHandler} className='btn btn-primary mt-4'>Register</button>
        </div>
        { errMsg ? <p className="text-danger">{errMsg}</p> : null }
    </div>
    )
}

export default Register;