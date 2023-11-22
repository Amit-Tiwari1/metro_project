import React from 'react'
import "../../../App.css"
import Footer from '../Footer/Footer'
import TitleHeader from '../Header/TitleHeader'
const Timing = () => {
    return (
        <>

            <TitleHeader title="Metro Timing" />
            <div className='container'>
                <div className='Fare-Cal mb-4'>
                    <div className='row align-items-center p-1 px-3'>
                        <div className='col-md-8 col-10 text-center'>
                            <h5>Metro Timing</h5>
                            <h6>Munshipuliya to Airport</h6>
                        </div>
                        <div className='col-md-2 col-2'>
                            <i className="bi bi-alarm-fill fs-2"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row justify-content-center align-items-center text-center'>
                    <div className='col-12'>
                        <table className="table table-striped">
                            <tbody>
                                <tr className="TimeHead">
                                    <td style={{ "borderTopLeftRadius": "145px", "color": "#fff" }}>Station</td>
                                    <td className='text-white'>First Metro</td>
                                    <td className='text-white'>Last Metro</td>
                                </tr>
                                <tr>
                                    <td>Munshi Pulia</td>
                                    <td>06:00 Am</td>
                                    <td>22:00 Pm</td>
                                </tr>
                                <tr>
                                    <td>Indira Nagar</td>
                                    <td>06:02 Am</td>
                                    <td>22:02 Pm</td>
                                </tr>
                                <tr>
                                    <td>Bhootnath Market</td>
                                    <td>06:05 Am</td>
                                    <td>22:05 Pm</td>
                                </tr>
                                <tr>
                                    <td>Lekhraj Market</td>
                                    <td>06:07 Am</td>
                                    <td>22:07 Pm</td>
                                </tr>
                                <tr>
                                    <td>Badshah Nagar</td>
                                    <td>06:10 Am</td>
                                    <td>22:10 Pm</td>
                                </tr>
                                <tr>
                                    <td>IT College</td>
                                    <td>06:13 Am</td>
                                    <td>22:13 Pm</td>
                                </tr>
                                <tr>
                                    <td>Lucknow University</td>
                                    <td>06:16 Am</td>
                                    <td>22:16 Pm</td>
                                </tr>
                                <tr>
                                    <td>KD Singh Babu Stadium</td>
                                    <td>06:18 Am</td>
                                    <td>22:18 Pm</td>
                                </tr>
                                <tr>
                                    <td>Hazratganj</td>
                                    <td>06:20 Am</td>
                                    <td>22:20 Pm</td>
                                </tr>
                                <tr>
                                    <td>Sachivalaya</td>
                                    <td>06:23 Am</td>
                                    <td>22:23 Pm</td>
                                </tr>
                                <tr>
                                    <td>Husainganj</td>
                                    <td>06:26 Am</td>
                                    <td>22:26 Pm</td>
                                </tr>
                                <tr>
                                    <td>Charbagh</td>
                                    <td>06:29 Am</td>
                                    <td>22:29 Pm</td>
                                </tr>
                                <tr>
                                    <td>Durgapuri</td>
                                    <td>06:31 Am</td>
                                    <td>22:31 Pm</td>
                                </tr>
                                <tr>
                                    <td>Mawaiya</td>
                                    <td>06:33 Am</td>
                                    <td>22:33 Pm</td>
                                </tr>
                                <tr>
                                    <td>Alambagh Bus Station</td>
                                    <td>06:35 Am</td>
                                    <td>22:35 Pm</td>
                                </tr>
                                <tr>
                                    <td>Alambagh</td>
                                    <td>06:37 Am</td>
                                    <td>22:37 Pm</td>
                                </tr>
                                <tr>
                                    <td>Singar Nagar</td>
                                    <td>06:40 Am</td>
                                    <td>22:40 Pm</td>
                                </tr>
                                <tr>
                                    <td>Krishna Nagar</td>
                                    <td>06:42 Am</td>
                                    <td>22:42 Pm</td>
                                </tr>
                                <tr>
                                    <td>Amausi</td>
                                    <td>06:46 Am</td>
                                    <td>22:46 Pm</td>
                                </tr>
                                <tr>
                                    <td>CCS Airport</td>
                                    <td>06:00 Am</td>
                                    <td>22:00 Pm</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <h5 className='Fare-Cal p-3 mb-3'>
                            Airport to Munshipuliya
                        </h5>
                        <table className="table table-striped" style={{ "marginBottom": "5rem" }}>
                            <tbody>
                                <tr className='TimeHead'>
                                    <td style={{ "borderTopLeftRadius": "145px", "color": "#fff" }}>Station</td>
                                    <td className='text-white'>First Metro</td>
                                    <td className='text-white'>Last Metro</td>
                                </tr>
                                <tr>
                                    <td>CCS Airport</td>
                                    <td>06:00 Am</td>
                                    <td>22:00 Pm</td>
                                </tr>
                                <tr>
                                    <td>Amausi</td>
                                    <td>06:02 Am</td>
                                    <td>22:02 Pm</td>
                                </tr>
                                <tr>
                                    <td>Transport Nagar</td>
                                    <td>06:04 Am</td>
                                    <td>22:04 Pm</td>
                                </tr>
                                <tr>
                                    <td>Krishna Nagar</td>
                                    <td>06:08 Am</td>
                                    <td>22:08 Pm</td>
                                </tr>
                                <tr>
                                    <td>Singar Nagar</td>
                                    <td>06:10 Am</td>
                                    <td>22:10 Pm</td>
                                </tr>
                                <tr>
                                    <td>Alambagh</td>
                                    <td>06:13 Am</td>
                                    <td>22:13 Pm</td>
                                </tr>
                                <tr>
                                    <td>Alambagh Bus Station</td>
                                    <td>06:15 Am</td>
                                    <td>22:15 Pm</td>
                                </tr>
                                <tr>
                                    <td>Mawaiya</td>
                                    <td>06:18 Am</td>
                                    <td>22:18 Pm</td>
                                </tr>
                                <tr>
                                    <td>Durgapuri</td>
                                    <td>06:19 Am</td>
                                    <td>22:19 Pm</td>
                                </tr>
                                <tr>
                                    <td>Charbagh</td>
                                    <td>06:21 Am</td>
                                    <td>22:21 Pm</td>
                                </tr>
                                <tr>
                                    <td>Husainganj</td>
                                    <td>06:24 Am</td>
                                    <td>22:24 Pm</td>
                                </tr>
                                <tr>
                                    <td>Sachivalaya</td>
                                    <td>06:27 Am</td>
                                    <td>22:27 Pm</td>
                                </tr>
                                <tr>
                                    <td>Hazratganj</td>
                                    <td>06:30 Am</td>
                                    <td>22:30 Pm</td>
                                </tr>
                                <tr>
                                    <td>KD Singh Babu Stadium</td>
                                    <td>06:32 Am</td>
                                    <td>22:32 Pm</td>
                                </tr>
                                <tr>
                                    <td>Lucknow University</td>
                                    <td>06:34 Am</td>
                                    <td>22:34 Pm</td>
                                </tr>
                                <tr>
                                    <td>IT College</td>
                                    <td>06:37 Am</td>
                                    <td>22:37 Pm</td>
                                </tr>
                                <tr>
                                    <td>Badshah Nagar</td>
                                    <td>06:40 Am</td>
                                    <td>22:40 Pm</td>
                                </tr>
                                <tr>
                                    <td>Lekhraj Market</td>
                                    <td>06:43 Am</td>
                                    <td>22:43 Pm</td>
                                </tr>
                                <tr>
                                    <td>Bhootnath Market</td>
                                    <td>06:45 Am</td>
                                    <td>22:45 Pm</td>
                                </tr>
                                <tr>
                                    <td>Indira Nagar</td>
                                    <td>06:48 Am</td>
                                    <td>22:48 Pm</td>
                                </tr>
                                <tr>
                                    <td>Munshi Pulia</td>
                                    <td>06:00 Am</td>
                                    <td>22:00 Pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Timing