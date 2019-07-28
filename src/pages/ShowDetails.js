import React, { Component } from 'react'
// import axios from 'axios'
// import thumb from '../assets/thumb.png'
// import StyledThumbImg from '../components/StyledThumbImg'
import Cast from './Cast'
import ShowMore from './ShowMore'
import RatingStars from './RatingStars'


class ShowDetails extends Component {
    state = {
        showInfo: null,
        castList: null,
    }



    componentDidMount() {

        let id = this.props.match.params.show_id;
        let baseShowUrl = 'http://api.tvmaze.com/shows/' + id


        let apiRequest1 = fetch(baseShowUrl).then(response => response.json());
        let apiRequest2 = fetch(`${baseShowUrl}/cast`).then(response => response.json());
        let combinedData = []





        Promise.all([apiRequest1, apiRequest2])
            .then(function (values) {
                combinedData[0] = values[0];
                combinedData[1] = values[1].slice(0, 5);

                console.log("apiRequest2", apiRequest2)
                console.log("combinedData", combinedData)
                return combinedData
            })
            .then(combinedData => this.setState({ 
                showInfo: combinedData[0],
                castList: combinedData[1]
             }))
  
    }
    getImage = () => {

    }

    render() {
        const { showInfo, castList } = this.state
        console.log("showInfo RENDER", showInfo)
        // const imageShow = showInfo.image ? <StyledThumbImg src={showInfo.image.medium} alt="" /> : <StyledThumbImg src={alvin} alt="alvin" />
        // const thumbImg = showInfo.image ? showInfo.image.medium : thumb

        const showDetails = showInfo ? (
            // console.log("showInfo IMAGE", showInfo.image)
            <div className="intro card">
                <img src={showInfo.image.medium} alt=""/>
                {/* {imageShow} */}
                <div className="show present">
                    <h4>{showInfo.name}</h4>
                    <RatingStars rating={showInfo.rating} />
                    <p>{showInfo.summary}</p>
                    
                </div>
                <ShowMore details={showInfo} />
                <Cast listCast={castList} />
                

            </div>
        ) : (
                <div className="center">Loading post...</div>
            );
        return (
            <div className="container tile">
                {showDetails}
            </div>
        )
    }
}

export default ShowDetails