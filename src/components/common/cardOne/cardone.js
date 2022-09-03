import React, { useState } from 'react'
import classes from './cardOne.module.css'
import CardGap from '../../../assets/common/cardGap.svg'
import Image1 from '../../../assets/common/image1.svg'
import ModalCtn from '../modal/modal';


function Cardone({ Heading, subline }) {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className={classes.majorContainer} onClick={() => (!showModal)&&setShowModal(true)}>
            <ModalCtn showModal={showModal} setShowModal={setShowModal} header={Heading}>
                {Heading == "ediagnosis" ? <>
                    <div className={classes.edignose}>
                        <textarea className={classes.textArea} row="50" placeholder="Enter your symptoms" />
                        <button className={classes.submitbtn}>Submit</button>
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
