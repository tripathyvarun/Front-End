import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.css'
import Image from "../../assets/dashboard/Image.svg"
import ImageS from "../../assets/dashboard/ImageSelected.svg"

import { Link } from 'react-router-dom'

function Navbar() {

    const [location, setLocation] = useState(null)

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [window.location.pathname])

    return (
        <div className={classes.majorContainer}>
            <Link to="/dashboard" onClick={()=>setLocation("/dashboard")}>
                <img src={(location === "/dashboard")?ImageS:Image} style={{backgroundColor:(location === "/dashboard")?"#735AD9":"transparent", borderRadius:1000}}/>
            </Link>
            <Link to="/hospitals" onClick={()=>setLocation("/hospitals")}>
                <img src={(location === "/hospitals")?ImageS:Image} style={{backgroundColor:(location === "/hospitals")?"#735AD9":"transparent", borderRadius:1000}}/>
            </Link>
            <Link to="/pharmacy" onClick={()=>setLocation("/pharmacy")}>
                <img src={(location === "/pharmacy")?ImageS:Image} style={{backgroundColor:(location === "/pharmacy")?"#735AD9":"transparent", borderRadius:1000}}/>
            </Link>
            <Link to="/medhistory" onClick={()=>setLocation("/medhistory")}>
                <img src={(location === "/medhistory")?ImageS:Image} style={{backgroundColor:(location === "/medhistory")?"#735AD9":"transparent", borderRadius:1000}}/>
            </Link>
        </div>
    )
}

export default Navbar
