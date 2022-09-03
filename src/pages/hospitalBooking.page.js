import React from 'react'
import { Helmet } from 'react-helmet'
import HospitalBooking from '../components/HospitalBooking/HospitalBooking'

function HospitalBookingPage() {
    return (
        <div>
            <Helmet>
                <title>Sehyog | hostel</title>
            </Helmet>

            <HospitalBooking />
        </div>
    )
}

export default HospitalBookingPage
