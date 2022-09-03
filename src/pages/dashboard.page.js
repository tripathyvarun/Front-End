import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Helmet from  'react-helmet'


function DashboardPage() {
    return (
        <div>
            <Helmet>
                <title>Sehyog | Dashboard</title>
            </Helmet>

            <Dashboard />
        </div>
    )
}

export default DashboardPage