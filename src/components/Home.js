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
                //      data.forEach(i => { console.log("SHOW", i.show) }
                //     )
                // })
            //     .then(data => { 
            //         console.log("s", data)
            //        return shows.map(i => i.show) 
            // } 
            //        )
    
                .then(data => {
                    console.log("result fetch", data)
                    this.setState({
                        latestReleased: data.map(x => x.show).slice(0, 18),
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

        const episodesList = latestReleased.length ? (
            latestReleased.map(episode => {
                return (
                    <div className="movie card" key={episode.id}>
                        <div className="tile-content">
                            <Link to={'/' + episode.id}>
                            <span className="card-title">{episode.name}</span>
                            {/* <img src={episode.show.image.medium}></img> */}
                                {/* <p>{episode.name}</p> */}
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No shows to show</div>
            )

        return (
            <div className="container home">
                {/* <h4 className="center">Home</h4> */}
                {episodesList}
            </div>
        )
    }
}


export default Home;