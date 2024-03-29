import React, { Component } from 'react'
// import axios from 'axios'
// import alvin from '../assets/alvin.jpg'
// import StyledThumbImg from '../components/StyledThumbImg'
import Cast from './Cast'

class ShowDetails extends Component {
    state = {
        showInfo: null,
        castList: null
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
            // .catch(error => {
            //     console.log('Request failed', error)
            // }


        // fetch('http://api.tvmaze.com/surlShowhows/')
        //     .then(response => response.json())
        //     .then(result => {console.log("showsres", result)})
        //     .catch(e => console.log(e));

        // fetch(baseShowUrl)
        //     .then(response => response.json())
            // .then(data => {
            //     // Here's a list of repos!
            //     console.log("Response Data->", data);
            // });
            // .then(data => this.setState({ showInfo: data }))
            // .catch(error => {
            //     console.log('Request failed', error)
            // }

        // axios.get(baseShowUrl)
        //     .then(res => {
        //         this.setState({
        //             showInfo: res.data,
                
        //         });
        //         console.log("Full res", res)
        //         console.log("Response Data->", res.data);
        //     });
     
    }
    render() {
        const { showInfo, castList } = this.state
        console.log("showInfo RENDER", showInfo)
        // console.log("showInfo.rating.average", this.state.rating.average)
        // const imageShow = showInfo.image ? <StyledThumbImg src={showInfo.image.medium} alt="" /> : <StyledThumbImg src={alvin} alt="alvin" />
        const rating = showInfo ? <p>{showInfo.rating.average}</p> : 3333

        const showDetails = showInfo ? (
            <div className="intro card">
                <img src={showInfo.image.medium} alt=""/>
                {/* {imageShow} */}
                <div className="show present">
                    <h4>{showInfo.name}</h4>
                    {/* <p>{showInfo.rating.average}</p> */}
                    <p>{rating} || NOT</p>
                    <p>{showInfo.summary}</p>
                    
                </div>
                <h3>Cast</h3>
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