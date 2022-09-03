import React from 'react'
import style from './Landing.module.css'
import mockup from '../../assets/mockup.png'
import logo from '../../assets/logo.png'
function Landing() {
    return (
        <div className={style.landing}>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.home}>

                        <div className={style.leftup}>
                            <h1>Linking your medical reports to your aadhar card</h1>
                            <button className={style.app}>DOWNLOAD APP</button>
                        </div>
                        <h1>Your virtual Medical assistant</h1>
                    </div>
                    <div className={style.about}>
                        <p className={style.aboutpara}><span className={style.sehyog}>Sehyog </span>aims to digitalize your health history.
                            It’s a step to control the politics of private hospitals. It aims to dissolve
                            the conspiracy of overpriced medicines, decline the exploitation of patients done
                            by unwanted tests. We ease the patient’s healthcare by providing them features like ediagonosis and suggesting them possible
                            disease, recommending them hospitals and doctors. All these in their comfort at home.  </p>
                    </div>
                </div>
                <div className={style.mid}>
                    <div className={style.navbar}>
                        <ul className={style.navlinks}>
                            <li>Pharmacy</li>
                            <li>Home</li>
                            <img src={logo} className={style.logo} alt="logo" />
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <img src={mockup} alt="mocup" className={style.mockup} />
                    <center>
                        <button className={style.getstarted}>Get Started</button>
                    </center>
                </div>
                <div className={style.right}>
                    <div className={style.features}>
                        <h1 className={style.lefttext}>Stop running around for consultancy</h1>
                        <h1 className={style.righttext}>AI based symptoms evaluation</h1>
                        <h1 className={style.lefttext}>Stop getting tricked by private hospitals</h1>
                        <h1 className={style.righttext}>Book your hospital beds on the go</h1>
                        <h1 className={style.lefttext}>Serving you medicines at their right price</h1>
                    </div>
                    <div className={style.pharmacy}>
                        <h1>The Pharmacy you need!</h1>
                        <p className={style.pharmacypara}>
                            Why run around pharmacies looking for the best price
                            when we have it all here! Peep into our Pharmacy
                            and get your medicines at their right price
                        </p>
                    </div>
                </div>

            </div>
            <div className={style.contact}>
                <center>
                    <form className={style.contactform}>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button className={style.submit}>Submit</button>
                    </form>
                </center>
            </div>
        </div>
    )
}

export default Landing