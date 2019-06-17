import React, {Component} from "react";
// import axios from 'axios'
import { Link } from 'react-router-dom'


class Home extends Component {
    state = {
        latestReleased: []
    }
   
    fetchSchedule = (show) => {
        this.setState({ ...this.state, isFetching: true })

            fetch('http://api.tvmaze.com/schedule/')
                .then(response => response.json())
                // .then(data => {
                //     console.log("result", data.forEach(i => i.show)
                //     )
                // })
                .then(result => {
                    console.log("result", result)
                    this.setState({
                        latestReleased: result.slice(0, 18),
                        isFetching: false
                })})
                
                .catch(e => console.log(e));
    }
    
    componentDidMount() {
        this.fetchSchedule()
    }

    render() {
        const { latestReleased } = this.state
        console.log("latestReleased", latestReleased)
        const showList = latestReleased.length ? (latestReleased.map(x => x.show)) : null
        console.log("showList", showList)
        const episodesList = latestReleased.length ? (
            latestReleased.map(episode => {
                return (
                    <div className="movie card" key={episode.id}>
                        <div className="tile-content">
                            <Link to={'/' + episode.id}>
                            {/* <span className="card-title">{show.name}</span> */}
                            {/* <img src={show}></img> */}
                                <p>{episode.name}</p>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No shows to show</div>
            )

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {episodesList}
            </div>
        )
    }
}


export default Home;