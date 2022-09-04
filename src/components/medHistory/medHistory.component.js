import React, {useEffect,useState} from 'react'
import classes from './medHistory.module.css'
import axios from 'axios';
import { API_URI } from '../../apiEndPoint';

import { useSelector } from 'react-redux'

function MedHistoryComponent() {

    const [user, setUser] = useState(null)
    const [report, setReport] = useState(null)
    const state = useSelector(s => s);
    useEffect(() => {
        console.log(state.user.aadharno)
        setUser(state.user);
    }, [state])

    useEffect(() => {
        if(user){
            axios.get(`${API_URI}/medHistory/${user.aadharno}`)
                .then(r=>setReport(r.data.reverse()))
        }
    }, [user])

    return (
        <div className={classes.majorContainer}>
            {
                report &&
                report.map((r,i)=>
                    <div className={classes.report} key={i}>
                        <h5>{r.date}</h5>
                        <h3>Name: {r.name}</h3>
                        <h3>Precribed by: {r.prescribedBy}</h3>
                        <p>Report</p>
                        <p>{r.prescriptions}</p>
                    </div>
                    )
            }
        </div>
    )
}

export default MedHistoryComponent
