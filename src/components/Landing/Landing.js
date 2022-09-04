import React from 'react'
import style from './Landing.module.css'
import mockup from '../../assets/mockup.png'
import logo from '../../assets/logo.png'
import bottom from '../../assets/landing/bottom.png'
import features from '../../assets/landing/features.png'

import { Link } from 'react-router-dom'
function Landing() {
    return (
        <div className={style.landing}>
            <div className={style.container}>

                <div className={style.navbar}>
                    <ul className={style.navlinks}>
                        <li>Pharmacy</li>
                        <li>Home</li>
                        <img src={logo} className={style.logo} alt="logo" />
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1>
                        Precision medicine made simplier for you
                    </h1>
                    <Link to="/signup">Get Started</Link>
                </div>

            </div>
            <div className={style.centerbg}>

                <center>

                    <div>
                        <img src={features} className={style.features} alt="bottom"></img>
                    </div>
                </center>
                <div>
                    <img src={bottom} className={style.bottom} alt="bottom"></img>
                </div>
                <div>
                    <p className={style.footer}>
                        Made with <p style={{ color: 'red' }}>❤</p> by ANTIBUG️
                    </p>
                </div>
            </div>
            {/* <div className={style.contact}>
                <center>
                    <form className={style.contactform}>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button className={style.submit}>Submit</button>
                    </form>
                </center>
            </div> */}
        </div>
    )
}

export default Landing