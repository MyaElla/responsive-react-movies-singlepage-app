import React, {Component} from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import Tile from './Tile'

// const Home = () => {
//     return (
//         <div>
//             {}
//         </div>
//     )
// }

class Home extends Component {
    state = {
        shows: []
    }
    componentDidMount() {
        axios.get('http://api.tvmaze.com/schedule')
            .then(res => {
                console.log(res);
                this.setState({
                    shows: res.data.slice(0, 10)
                });
            })
    }

    render() {
        const { shows } = this.state
        const showsList = shows.length ? (
            shows.map(show => {
                return (
                    <div className="movie card" key={show.id}>
                        <div className="tile-content">
                          <Link to={'/' + show.id}>
                            {/* <span className="card-title">{show.name}</span> */}
                            <p>{show.name}</p>
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
                {showsList}
            </div>
        )
    }
}


export default Home;