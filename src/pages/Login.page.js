import React from 'react'
import Login from '../components/login/login'
import { Helmet } from 'react-helmet'

function LoginPage() {
    return (
        <div>
            <Helmet>
                <title>Sehyog | Login</title>
            </Helmet>

            <Login />
        </div>
    )
}

export default LoginPage
