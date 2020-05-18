import React, { Component } from 'react'
import '../SectionLeft/SectionLeft.css'
import award from '../../../Assets/Images/1.png'
class SectionLeft extends Component {
    render() {
        return (
            <div className="section-left">
                 <img  className="award"  src={award} alt="award" />
                 <div  className="color-left"></div>
            </div>

        )
    }
}

export default SectionLeft
