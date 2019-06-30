import React, { Component } from 'react'
import axios from 'axios'

class ShowDetails extends Component {
    state = {
        show: null,
        cast: null
    }
    componentDidMount() {
        let id = this.props.match.params.show_id;
        axios.get('http://api.tvmaze.com/shows/' + id)
            .then(res => {
                this.setState({
                    showInfo: res.data,
                    // cast: 
                });
                console.log("Show res", res)
                console.log("showInfo", res.data);
            });
        // fetch('http://api.tvmaze.com/shows/')
        //     .then(response => response.json())
        //     .then(result => {console.log("showsres", result)})
        //     .catch(e => console.log(e));
    }
    render() {
        const { showInfo } = this.state
        // console.log("props show", this.props)
        console.log("state show2", showInfo)
        // console.log("show crew", show.crew)

        const showDetails = showInfo ? (
            <div className="intro card">
                {/* <h4 className="center">test</h4> */}
                <img src={showInfo.image.medium} />
                <div className="show present">
                    {/* <p>Rating {this.state.show.rating}</p> */}
                    <h4>{showInfo.name}</h4>
                    <p>{showInfo.rating.average}</p>
                    <p>{showInfo.summary}</p>
                    {/* <p>{this.state.show.rating}</p> */}
                </div>
                

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