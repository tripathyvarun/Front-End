import React from 'react'
import classes from './HospitalBooking.module.css'
import HospitalList from '../common/hospitalList/hospitalList'

function HospitalBooking() {
    return (
        <div className={classes.majorContainer}>
            <HospitalList />
        </div>
    )
}

export default HospitalBooking
