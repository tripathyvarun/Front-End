import React, { useEffect, useState } from 'react'
import classes from './Header.module.css'

import { MdLogout } from 'react-icons/md'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../state';
import { bindActionCreators } from 'redux'

function Header() {


    const [user, setUser] = useState(null)

    const state = useSelector(s=>s);
    const dispatch = useDispatch();

    useEffect(()=>{
        setUser(state.user);
    },[state])

    const { logoutUser } = bindActionCreators(actionCreators, dispatch);


    return (
        <div className={classes.majorContainer}>
           <div className={classes.btnHolder}>
                <div className={classes.button}>
                    <p>MEDICAL REPORT</p>
                </div>
           </div>
           <div className={classes.profileDetails}>
               <div className={classes.profImg}>
               </div>
               <div className={classes.nameContainer}>
                    <p>{user && user.name}</p>
               </div>
               <div className={classes.iconContainer}>
                    <MdLogout onClick={()=>(logoutUser())}/>
               </div>
           </div>
        </div>
    )
}

export default Header
