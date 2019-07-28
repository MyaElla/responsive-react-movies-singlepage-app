import React, { Component } from 'react'
import thumb from '../assets/thumb.png'
import StyledThumbImg from '../components/StyledThumbImg'
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
    getImage = (image) => {
        if (this.state.showInfo.image) {
            return  image = this.state.showInfo.image.medium
        } else {
            return thumb
        }

    }

    render() {
        const { showInfo, castList } = this.state
        console.log("showInfo RENDER", showInfo)
        // const thumbImg = showInfo ? showInfo.image[0] : thumb

        const showDetails = showInfo ? (
            <div className="intro card">
                {/* <img src={showInfo.image.medium} alt=""/> */}
                    <StyledThumbImg src={this.getImage()} />
                    {/* <StyledThumbImg src={thumbImg} /> */}
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
            ) 
        return (
            <div className="container tile">
                {showDetails}
            </div>
        )
    }
}

export default ShowDetails