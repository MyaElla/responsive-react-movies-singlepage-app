import React, { Component } from "react";
import Header from '../../components/Header/Header'
import MoviesWrapper from '../../components/MoviesWrapper/MoviesWrapper'
import StyledWrapper from '../../components/StyledWrapper/StyledWrapper'
import MovieThumbnail from '../../components/MovieThumbnail/MovieThumbnail'
import StyledH1 from '../../components/StyledH1'
import StyledH2 from '../../components/StyledH2'
import StyledH3 from '../../components/StyledH3'
import StyledThumbImg from '../../components/StyledThumbImg'
import alvin from '../../assets/alvin.jpg'



class Home extends Component {
    state = {
        latestReleased: []
    }




render() {

    return (
        <StyledWrapper>
            <Header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <StyledH1>TV Bland</StyledH1>
                <p>This is my Header description</p>
            </Header>
            <StyledH2>Last Added Shows</StyledH2>
            <MoviesWrapper className='section'>
                
                <MovieThumbnail>
                    <StyledThumbImg src={alvin} />
                    Title 1
                </MovieThumbnail>
                <MovieThumbnail>
                    <StyledThumbImg src={alvin} />
                   Title 2
                </MovieThumbnail>
                <MovieThumbnail>
                    <StyledThumbImg src={alvin} />
                    Title 3
                </MovieThumbnail>
                <MovieThumbnail>
                    <StyledThumbImg src={alvin} />
                   Title 4
                </MovieThumbnail>
                <MovieThumbnail>
                    <StyledThumbImg src={alvin} />
                    Title 5
                </MovieThumbnail>
                <MovieThumbnail>
                    <StyledThumbImg src={alvin} />
                    Title 6
                </MovieThumbnail>
            </MoviesWrapper>
        </StyledWrapper>
    )
    }
}


export default Home;