import React, { Component } from 'react'
// import axios from 'axios'
import alvin from '../assets/alvin.jpg'

export default class Cast extends Component {
    render() {
        let rowCast
        // let image = this.props.listCast.person.image ? <img src={this.props.listCast.person.image.medium} alt="" /> : <span className="circle">yyy</span>

        console.log("listCast--", this.props.listCast)
        if (this.props.listCast) {
            rowCast = this.props.listCast.map(castItem => {
                console.log("castItem>>>", castItem)
                const image = castItem.person.image ? <img src={castItem.person.image.medium} alt="" /> : <img src={alvin} alt="alvin"/>
                return <li key={castItem.id}>
                    {image}
                    {castItem.person.name}
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

