import React from 'react'
import MedHistoryComponent from '../components/medHistory/medHistory.component'
import { Helmet } from 'react-helmet'

function MedHistoryPage() {
    return (
        <div>
            <Helmet>
                <title>Sehyog | medHistory</title>
            </Helmet>
            <MedHistoryComponent />
        </div>
    )
}

export default MedHistoryPage
