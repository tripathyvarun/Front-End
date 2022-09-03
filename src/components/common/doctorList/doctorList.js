import React from 'react'
import classes from './doctorList.module.css'
import StarRatings from 'react-star-ratings';

import { BsFillCalendarCheckFill } from 'react-icons/bs'

function doctorList() {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.header}>
                <h1>Doctors</h1>
                <input type="text" placeholder="Search" />
            </div>
            <div className={classes.List}>
                <div className={classes.majorCardContainer}>
                    <div className={classes.ProfilePicCtn}>
                        <div className={classes.image}></div>
                    </div>
                    <div className={classes.content}>
                        <h3>Sanskar Gupta</h3>
                        <p>Dermatologist</p>
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
                <div className={classes.majorCardContainer}>
                    <div className={classes.ProfilePicCtn}>
                        <div className={classes.image}></div>
                    </div>
                    <div className={classes.content}>
                        <h3>Sanskar Gupta</h3>
                        <p>Dermatologist</p>
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
                <div className={classes.majorCardContainer}>
                    <div className={classes.ProfilePicCtn}>
                        <div className={classes.image}></div>
                    </div>
                    <div className={classes.content}>
                        <h3>Sanskar Gupta</h3>
                        <p>Dermatologist</p>
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
            </div>
        </div>
    )
}

export default doctorList
