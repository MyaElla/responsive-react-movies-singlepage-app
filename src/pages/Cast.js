import React, { Component } from 'react'
// import axios from 'axios'
import StyledCastImgCircle from '../components/StyledCastImgCircle'
import alvin from '../assets/alvin.jpg'

export default class Cast extends Component {
    render() {
        let rowCast
        // let image = this.props.listCast.person.image ? <img src={this.props.listCast.person.image.medium} alt="" /> : <span className="circle">yyy</span>

        console.log("listCast--", this.props.listCast)
        if (this.props.listCast) {
            rowCast = this.props.listCast.map(castItem => {
                console.log("castItem>>>", castItem)
                const image = castItem.person.image ? <StyledCastImgCircle src={castItem.person.image.medium} alt="" className="cast-face" /> : <StyledCastImgCircle src={alvin} alt="alvin"/>
                return <li key={castItem.id}>
                    <span>{image}</span>{castItem.person.name}
                </li>
            });
        }
           
        

        return (
            <div>
                <ul>
                    {rowCast}
                </ul>
            </div>
        );
    }
 
}

