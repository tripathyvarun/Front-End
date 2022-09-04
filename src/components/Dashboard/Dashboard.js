import React, { useEffect, useState } from 'react'
import classes from './Dashboard.module.css'

import { Link } from 'react-router-dom'

import Cardone from '../common/cardOne/cardone'
import HospitalList from '../common/hospitalList/hospitalList'
import DoctorList from '../common/doctorList/doctorList'

import { useSelector } from 'react-redux'

function Dashboard() {

    const [user, setUser] = useState(null)

    const state = useSelector(s => s);

    useEffect(() => {
        setUser(state.user);
    }, [state])



    return (
        <div className={classes.majorContainer}>
            <div className={classes.leftCol}>
                <div className={classes.cardHolder}>
                    <Cardone Heading={"ediagnosis"} subline={"Get your diagonosis virtually done."} />
                    <Link to={"/medhistory"}><Cardone Heading={"Med History"} subline={"View your medical history."} /></Link>
                </div>
                <div className={classes.HospitalHolder}>
                    <HospitalList />
                </div>
            </div>
            <div className={classes.rightCol}>
                <div className={classes.adhaarHolder}>
                    <div className={classes.adhaar}>
                        {
                            user &&
                            <h4>{user.name}</h4>
                        }
                        {
                            user &&
                            <h4>{user.dob}</h4>
                        }
                        {
                            user &&
                            <h4>{user.gender}</h4>
                        }
                        {
                            user &&
                            <h4>{user.aadharno}</h4>
                        }
                    </div>
                </div>
                <div className={classes.doctorHolder}>
                    <DoctorList />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
