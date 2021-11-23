import React from 'react'
import './client_dash.css'
import Dash_Nav from '../Nav/Dash_Nav.jsx'

import Calender from 'react-calendar'

import barber from '../../assets/barber.jpg'
import barber2 from '../../assets/barber2.jpg'
import barber3 from '../../assets/barber3.jpg'
import barber4 from '../../assets/barber4.jpg'

const Client_Dash = () => {
    const arr = [
        {
            photo: barber,
            name: 'nathan bergess'
        },
        {
            photo: barber2,
            name: 'james smith'
        },
        {
            photo: barber3,
            name: 'damon baker'
        },
        {
            photo: barber4,
            name: 'charlie blade'
        }

    ]

    return (
        <>
              <header>
        <Dash_Nav />
      </header>
        <section id="client-dash" className="client_dash">
            <h2><strong>explore our barbers</strong></h2>
            <div className="dash">
                {arr.map(d => (
                <div className="barber-images">
                    <div className="individual-barber">
                    <img className="barbers" src={d.photo} alt="barber" />
                    <h5>{d.name}</h5>
                    </div>
                </div>
                ))}
            </div>
            <br />
                {/* <h2><strong>book an appointment</strong></h2> */}
            <div className="dash">
                <div className="form-group-booking">
                <input type="date" />
                <input type="time" />
                </div>
                <br />
                <div className="form-group-booking">
  
                <select name="'" id="">
                    <option value="">
                        Nathan Bergess
                    </option>
                    <option value="">
                        James Smith
                    </option>
                    <option value="">
                        Damon Baker
                    </option>
                    <option value="">
                        Charlie Blade
                    </option>
                </select>
                <input type="submit" style={{ border: 'none', backgroundColor: '#000', color: 'white' }} />
                </div>
                <br />
                
            </div>
        </section>
        <section id="appointments">
        <h2>upcoming appointments</h2>
            <div className="current-appointments">
                <Calender style={{ width: '50%' }} />
            </div>
        <footer>
            
        </footer>
        </section>
        </>
    )
}

export default Client_Dash
