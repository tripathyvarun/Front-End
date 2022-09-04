import React, { useState } from 'react'
import classes from './cardOne.module.css'
import CardGap from '../../../assets/common/cardGap.svg'
import Image1 from '../../../assets/common/image1.svg'
import ModalCtn from '../modal/modal';
import axios from 'axios';


function Cardone({ Heading, subline }) {
    const symptoms = ['back_pain','constipation','abdominal_pain','diarrhoea','mild_fever','yellow_urine',
    'yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach',
    'swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
    'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs',
    'fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool',
    'irritation_in_anus','neck_pain','dizziness','cramps','bruising','obesity','swollen_legs',
    'swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
    'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips',
    'slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints',
    'movement_stiffness','spinning_movements','loss_of_balance','unsteadiness',
    'weakness_of_one_body_side','loss_of_smell','bladder_discomfort','foul_smell_of urine',
    'continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
    'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain',
    'abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum',
    'rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion',
    'receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen',
    'history_of_alcohol_consumption','fluid_overload','blood_in_sputum','prominent_veins_on_calf',
    'palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
    'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose',
    'yellow_crust_ooze']
    const [showModal, setShowModal] = useState(false)
    const [s1, setS1] = useState(null)
    const [s2, setS2] = useState(null)
    const [s3, setS3] = useState(null)
    const [desease, setDesease] = useState()
    const check = (e)=>{
        e.preventDefault()
        axios.get(`https://disease-model.herokuapp.com/symptoms=${s1}&${s2}&${s3}`)
            .then(res=>{
                console.log(res.data)
            })
    }

    return (
        <div className={classes.majorContainer} onClick={() => (!showModal)&&setShowModal(true)}>
            <ModalCtn showModal={showModal} setShowModal={setShowModal} header={Heading}>
                {Heading == "ediagnosis" ? <>
                    <div className={classes.edignose}>
                        <select onChange={(e)=>setS1(e.target.value)}>
                            {
                                symptoms &&
                                symptoms.map(s=>
                                    <option>{s}</option>
                                    )
                            }
                        </select>

                        <select onChange={(e)=>setS2(e.target.value)}>
                            {
                                symptoms &&
                                symptoms.map(s=>
                                    <option>{s}</option>
                                    )
                            }
                        </select>

                        <select onChange={(e)=>setS3(e.target.value)}>
                            {
                                symptoms &&
                                symptoms.map(s=>
                                    <option>{s}</option>
                                    )
                            }
                        </select>
                        <button className={classes.submitbtn} onClick={e=>{check(e)}}>Submit</button>
                        <textarea className={classes.textArea} placeholder="pridicted tests and deseases" />
                    </div>
                </> :
                    <><div className={classes.nameLogo}>
                        <img src={Image1} className={classes.image} />
                        <div className={classes.content}>
                            <h3>Apollo Hospital</h3>
                            <p>Apollo Hospitals is the leading multispecialty health care unit with best in class treatments for cancer, knee replacements, liver transplant, heart etc</p>
                            <p><b>look for availability</b></p>
                        </div>
                    </div>
                        <div className={classes.ratings}>
                            <div className={classes.contentRatings}>

                            </div>
                        </div>
                    </>
                }
            </ModalCtn>
            <img src={Image1} className={classes.image} />
            <div className={classes.content}>
                <h2>{Heading}</h2>
                <p>{subline}</p>

            </div>
            <img src={CardGap} className={classes.carddesign} />
        </div >
    )
}

export default Cardone
