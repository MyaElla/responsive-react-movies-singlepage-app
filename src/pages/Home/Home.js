import React, { Component } from "react";
import Header from '../../components/Header/Header'
import MoviesWrapper from '../../components/MoviesWrapper/MoviesWrapper'
import StyledWrapper from '../../components/StyledWrapper/StyledWrapper'
import MovieThumbnail from '../../components/MovieThumbnail/MovieThumbnail'
import StyledH1 from '../../components/StyledH1'
import StyledH2 from '../../components/StyledH2'



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
                <StyledH2>This is my Header</StyledH2>
            </Header>
            <MoviesWrapper>
                <MovieThumbnail>Title 1</MovieThumbnail>
                <MovieThumbnail>Title 2</MovieThumbnail>
                <MovieThumbnail>Title 3</MovieThumbnail>
            </MoviesWrapper>
        </StyledWrapper>
    )
    }
}


export default Home;