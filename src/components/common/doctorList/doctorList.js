import React, {useEffect,useState} from 'react'
import classes from './doctorList.module.css'
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { API_URI } from '../../../apiEndPoint';
import ModalCtn from '../modal/modal';

import { BsFillCalendarCheckFill } from 'react-icons/bs'

import { useSelector } from 'react-redux'

function DoctorList() {

    const state = useSelector(s => s);
    const [user, setUser] = useState(null)
    const [doctors, setDoctors] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [patientName, setPatientName] = useState("")
    const [sourceuid, setSourceuid] = useState("")
    const [slots, setSlots] = useState("")
    const [slotsList, setSlotsList] = useState("")
    const [Sdate, setSdate] = useState("")
    useEffect(() => {
        setUser(state.user);
        setPatientName(state.user.name);
    }, [state])
    useEffect(() => {
        axios.get(`${API_URI}/doctor/`)
            .then(res=>setDoctors(res.data))
    }, [])

    const initialBooking = (d)=>{
        setShowModal(true)
        setSourceuid(d._id)
        setSlotsList(d.slots)
    }

    const handlebook = (e)=>{
        e.preventDefault()
        const data = {
            patientName,
            sourceuid,
            patientid:user._id,
            slots,
            duration:Sdate
        }
        console.log(data)
        axios.post(`${API_URI}/booking/add`, data)
            .then(res=>alert(res.data.status))
            .catch(err=>console.log(err))
        setShowModal(false)
        setSdate("")
        setSourceuid("")
    }


    return (
        <div className={classes.majorContainer}>
            <ModalCtn showModal={showModal} setShowModal={setShowModal} header={"Doctor's Appointment"}>
                <div className={classes.durationInput}>
                    <form onSubmit={(e)=>handlebook(e)}>
                        <label>Slot</label>
                        <select onChange={e=>setSlots(e.target.value)}>
                            <option>choose</option>
                            {
                                slotsList &&
                                slotsList.map(s=>
                                    <option>{s}</option>
                                    )
                            }
                        </select>
                        <label>Appointment Date</label>
                        <input placeholder="dd/mm/yyyy" value={Sdate} onChange={(e)=>{setSdate(e.target.value)}}/>
                        <input type="submit" value="book" className={classes.button}/>
                    </form>
                </div> 
            </ModalCtn>
            <div className={classes.header}>
                <h1>Doctors</h1>
                <input type="text" placeholder="Search" />
            </div>
            <div className={classes.List}>
                {
                    doctors &&
                    doctors.map((d,i)=>
                        <div className={classes.majorCardContainer} key={i} onClick={()=>initialBooking(d)}> 
                            <div className={classes.ProfilePicCtn}>
                                <div className={classes.image}></div>
                            </div>
                            <div className={classes.content}>
                                <h3>{d.name}</h3>
                                <p>{d.specialization}</p>
                                <p>
                                <StarRatings
                                    rating={3.5}
                                    starDimension="15px"
                                    starSpacing="3px"
                                    starRatedColor="orange"
                                />  <b>3.5</b>
                                </p>

                            </div>
                            <div className={classes.Appointment}>
                                <BsFillCalendarCheckFill />
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default DoctorList
