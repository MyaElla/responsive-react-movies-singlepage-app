import React, { Component } from 'react'
// import axios from 'axios'
import Cast from './Cast'

class ShowDetails extends Component {
    state = {
        showInfo: null,
        // cast: null
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
                combinedData[1] = values[1];

                console.log("apiRequest2", apiRequest2)
                console.log("combinedData", combinedData)
                return combinedData
            })
            .then(combinedData => this.setState({ showInfo: combinedData }))


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
        const { showInfo } = this.state
        console.log("state show2", showInfo)

        const showDetails = showInfo ? (
            <div className="intro card">
                {/* <h4 className="center">test</h4> */}
                {/* <img src={showInfo.image.medium} /> */}
                <div className="show present">
                    {/* <p>Rating {this.state.show.rating}</p> */}
                    <h4>{showInfo.name}</h4>
                    {/* <p>{showInfo.rating.average}</p> */}
                    <p>{showInfo.summary}</p>
                    {/* <p>{this.state.show.rating}</p> */}
                </div>
                <h3>Cast</h3>
                <Cast />
                

            </div>
        ) : (
                <div className="center">Loading post...</div>
            );
        return (
            <div className="container tile">
                {/* <h4>blah</h4> */}
                {showDetails}
            </div>
        )
    }
}

export default ShowDetails