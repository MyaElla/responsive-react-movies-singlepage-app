import React, { Component } from 'react'
import axios from 'axios'

class ShowDetails extends Component {
    state = {
        show: null
    }
    componentDidMount() {
        let id = this.props.match.params.show_id;
        axios.get('http://api.tvmaze.com/shows/' + id)
            .then(res => {
                this.setState({
                    show: res.data
                });
                console.log("Show res", res);
            });
        // fetch('http://api.tvmaze.com/shows/')
        //     .then(response => response.json())
        //     .then(result => {console.log("showsres", result)})
        //     .catch(e => console.log(e));
    }
    render() {
        const { show } = this.state
        console.log("props show", this.props)
        console.log("state show", show)
        const showDetails = show ? (
            <div className="intro card">
                {/* <h4 className="center">test</h4> */}
                <img src={this.state.show.image.medium} />
                <div className="show present">
                    {/* <p>Rating {this.state.show.rating}</p> */}
                    <h4>{this.state.show.name}</h4>
                    <p>{this.state.show.summary}</p>
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