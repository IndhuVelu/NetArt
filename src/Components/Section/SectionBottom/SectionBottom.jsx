import React, { Component } from 'react'
import '../SectionBottom/SectionBottom.css'
import tools from '../../../Assets/Images/3.png'
import Footer from '../../Footer/Footer'
class SectionBottom extends Component {
    render() {
        return (
            <div className="Section-bottom">
                <div className="bottom">
                <div className="heading">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
                <div><img  className="tools" src={tools} alt="awardPic"/></div>
                <div>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </div>
                <div className="seperator"></div>
                <div className="heading-footer">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>
                <div className="heading-footer-1">CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</div>
                </div>
                <Footer/>
                
            </div>
        )
    }
}

export default SectionBottom
