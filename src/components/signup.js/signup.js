import React, { useState } from 'react'
import classes from './signup.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

import { API_URI } from '../../apiEndPoint';

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state';

function Signup() {
    const initialState = null;
    const [email, setEmail] = useState(initialState)
    const [adhaar, setAdhaar] = useState(initialState)
    const [name, setName] = useState(initialState)
    const [pass, setPassword] = useState(initialState)
    const [confirmPass, setConfirmPass] = useState(initialState)
    const [verification, setVerification] = useState(false)

    const dispatch = useDispatch();

    const { setUser } = bindActionCreators(actionCreators, dispatch);


    const handleSubmit = (e) => {
        e.preventDefault();
        var data = {};

        if(pass === confirmPass){
            data = {
                email:email,
                aadharno:adhaar,
                name:name,
                password:pass,
                cpassword:pass,
                gender:"Male",
                dob:"01-01-2001"
            }
            axios.post(`${API_URI}/user/signup`, data)
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
        }else{
            alert("passwords doesn't match")
        }
        console.log(data)
    }

    return (
        <div className={classes.majorContainer}>
            <div className={classes.contact}>
                <center>
                    {
                        verification?
                            <form className={classes.contactform} onSubmit={(e)=>{handleSubmit(e)}}>
                                <h4>Welcome! to Sehyog</h4>
                                <p>Verification Code</p>
                                <input type="text" placeholder="Verification Code"/>
                                <br />
                                <button className={classes.submit}>Signup</button>
                            </form>
                        :
                            <form className={classes.contactform} onSubmit={(e)=>{e.preventDefault();setVerification(true)}}>
                                <h4>Welcome! to Sehyog</h4>
                                <p>Adhaar Number</p>
                                <input type="text" placeholder="Adhaar" onChange={(e)=>{setAdhaar(e.target.value)}}/>
                                <p>Email</p>
                                <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                                <p>name</p>
                                <input type="text" placeholder="Email" onChange={(e)=>{setName(e.target.value)}}/>
                                <p>Password</p>
                                <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                <p>Confirm Password</p>
                                <input type="password" placeholder="Confirm Password" onChange={(e)=>{setConfirmPass(e.target.value)}}/>
                                <br />
                                <button className={classes.submit}>Next</button>
                            </form>
                    }
                    <Link to="/login">Already have an account? login</Link>
                </center>
            </div>
        </div>
    )
}

export default Signup
