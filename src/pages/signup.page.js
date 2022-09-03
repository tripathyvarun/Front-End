import React from 'react'
import Signup from '../components/signup.js/signup'
import { Helmet } from 'react-helmet'

function SignupPage() {
    return (
        <div>
            <Helmet>
                <title>Sehyog | Login</title>
            </Helmet>

            <Signup />
        </div>
    )
}

export default SignupPage
