import React, { useEffect, useState } from 'react'
import classes from './hospitalList.module.css'
import CardGap from '../../../assets/common/cardGap.svg'
import Image1 from '../../../assets/common/image1.svg'
import ModalCtn from '../modal/modal';

import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { API_URI } from '../../../apiEndPoint';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux'

function Hospital({ details }) {


    const [showModal, setShowModal] = useState(false)

    const [beds, setBeds] = useState(details.bed)
    const [bookingStep, setBookingStep] = useState(1)
    const [beduid, setBeduid] = useState("")
    const [Sdate, setSdate] = useState("")
    const [Edate, setEdate] = useState("")
    const [patientName, setPatientName] = useState("")
    const [bedType, setBedType] = useState("")

    const [user, setUser] = useState(null)

    const state = useSelector(s => s);
    const navigate = useNavigate();

    useEffect(() => {
        setUser(state.user);
        setPatientName(state.user.name);
    }, [state])


    const handlebook = (e) => {
        e.preventDefault();
        const data = {
            beduid,
            patientid:user._id,
            sourceuid:details._id,
            duration:`${Sdate} to ${Edate}`,
            patientName,
            bedType
        }
        axios.post(`${API_URI}/booking/add`, data)
            .then(res=>alert(res.data.status))
            .catch(err=>console.log(err))
        setBookingStep(1)
        setShowModal(false)
        setEdate("")
        setSdate("")
        
    }

    const stepUp = (bid,btype,e)=>{
        e.preventDefault();
        setBookingStep(bookingStep+1)
        setBeduid(bid)
        setBedType(btype)
    }

    return (
        <div className={classes.majorCardContainer} onClick={() => (!showModal) && setShowModal(true)}>
            <ModalCtn showModal={showModal} setShowModal={setShowModal} header={"Beds Available"}>
                <div className={classes.showCards}>
                    {
                        bookingStep === 1?
                        beds &&
                        beds.map((b) =>
                            <div className={classes.bedCard} onClick={(e) => stepUp(b._id,b.type,e)}>
                                <p>{b.type}</p>
                                <h3>{b.number}</h3>
                            </div>
                        ):
                        <div className={classes.durationInput}>
                            <form onSubmit={(e)=>handlebook(e)}>
                                <label>Start Date</label>
                                <input placeholder="dd/mm/yyyy" value={Sdate} onChange={(e)=>{setSdate(e.target.value)}}/>
                                <label>End Date</label>
                                <input placeholder="dd/mm/yyyy" value={Edate} onChange={(e)=>{setEdate(e.target.value)}}/>
                                <input type="submit" value="book" className={classes.button}/>
                            </form>
                        </div>   
                        
                    }
                </div>
            </ModalCtn>
            <div className={classes.nameLogo}>
                <img src={Image1} className={classes.image} />
                <div className={classes.content}>
                    <h3>{details.name}</h3>
                    <p>{details.desc}</p>
                    <p><b>look for availability</b></p>
                </div>
            </div>
            <div className={classes.ratings}>
                <div className={classes.contentRatings}>
                    <StarRatings
                        rating={3.5}
                        starDimension="16px"
                        starSpacing="3px"
                        starRatedColor="orange"
                    />
                    <p>3.5</p>
                </div>
                <img src={CardGap} className={classes.carddesign} />
            </div>
        </div>
    )
}

function HospitalList() {

    const [hospitals, setHospitals] = useState(null)

    useEffect(() => {
        axios.get(`${API_URI}/hospital/`)
            .then(res => {
                setHospitals(res.data);
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    return (
        <div className={classes.majorContainer}>
            <div className={classes.header}>
                <h1>Hospitals</h1>
                <input type="text" placeholder="Search" />
            </div>
            <div className={classes.List}>
                {
                    hospitals &&
                    hospitals.map(h =>
                        <Hospital details={h} />
                    )
                }
            </div>
        </div>
    )
}

export default HospitalList
