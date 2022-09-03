import React, { useState } from 'react'
import classes from './login.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

import { API_URI } from '../../apiEndPoint';

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state';

function Login() {

    const [adhaar, setAdhaar] = useState(null)
    const [password, setPassword] = useState(null)

    const dispatch = useDispatch();

    const { setUser } = bindActionCreators(actionCreators, dispatch);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(adhaar && password){
            const data = {
                aadharno:adhaar,
                password
            }
            axios.post(`${API_URI}/user/signin`, data)
                .then((res)=>{
                    axios.get(`${API_URI}/user/${res.data.uid}`)
                        .then(r=>{
                            setUser(r.data)
                        })
                        .catch(err=>alert('something went wrong'))
                })
                .catch(err=>{
                    alert('something went wrong')
                })
        }
        // console.log(data)
    }



    return (
        <div className={classes.majorContainer}>
            <div className={classes.contact}>
                <center>
                    <form className={classes.contactform} onSubmit={(e)=>{handleSubmit(e)}}>
                        <h2>Welcome!</h2>
                        <p>Adhaar Number</p>
                        <input type="adhaar" placeholder="Adhaar" onChange={(e)=>{setAdhaar(e.target.value)}}/>
                        <p>Password</p>
                        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <br />
                        <button className={classes.submit} type="submit">Login</button>
                    </form>
                    <Link to="/signup">Don't have an account? signup</Link>
                </center>
            </div>
        </div>
    )
}

export default Login
