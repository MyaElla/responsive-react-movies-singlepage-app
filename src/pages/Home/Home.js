import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import MoviesWrapper from '../../components/MoviesWrapper/MoviesWrapper'
import StyledWrapper from '../../components/StyledWrapper/StyledWrapper'
import MovieThumbnail from '../../components/MovieThumbnail/MovieThumbnail'
import StyledH1 from '../../components/StyledH1'
import StyledH2 from '../../components/StyledH2'
import ThumbTitle from '../../components/ThumbTitle'

import StyledThumbImg from '../../components/StyledThumbImg'
import alvin from '../../assets/alvin.jpg'



class Home extends Component {
    state = {
        latestReleased: []
    }


    fetchSchedule = (show) => {
        this.setState({ ...this.state, isFetching: true })

        fetch('http://api.tvmaze.com/schedule?country=US')
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
                    latestReleased: data.map(x => x.show).slice(0,18),
                    isFetching: false
                })
            })

            .catch(e => console.log(e));
    }
    componentDidMount() {
        this.fetchSchedule()
    }

render() {
    const { latestReleased } = this.state
    console.log("latestReleased 13", latestReleased[13])

    

    const episodesList = latestReleased.length ? (
        latestReleased.map(episode => {
            const rating = (episode.rating === null) ? (<div>x</div>) : (<p>{episode.rating.average}</p>)
            console.log("rating", rating.props)
            return (
                <MovieThumbnail key={episode.id}>
                        <Link to={'/' + episode.id}>
                        <StyledThumbImg src={episode.image.medium} />

                            <ThumbTitle>{episode.name}</ThumbTitle>
                            {/* <img src={episode.image.medium} /> */}
                        {rating}
                        </Link>
                
                </MovieThumbnail>

            )
        })
    ) : (
            <div className="center">No shows to show</div>
        )

    return (
        <StyledWrapper>
            <Header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <StyledH1>TV Bland</StyledH1>
                <p>This is my Header description</p>
            </Header>
            <div className='section'>
                <StyledH2>Last Added Shows</StyledH2>
                <MoviesWrapper className='movie-list'>
                    {episodesList}
                </MoviesWrapper>
            </div>
            
        </StyledWrapper>
    )
    }
}


export default Home;