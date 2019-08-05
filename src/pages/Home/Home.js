import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import MoviesWrapper from '../../components/MoviesWrapper/MoviesWrapper'
import StyledWrapper from '../../components/StyledWrapper/StyledWrapper'
import MovieThumbnail from '../../components/MovieThumbnail/MovieThumbnail'
import StyledH1 from '../../components/StyledH1'
import StyledH2 from '../../components/StyledH2'
import ThumbTitle from '../../components/ThumbTitle'
import RatingStars from '../RatingStars'

import StyledThumbImg from '../../components/StyledThumbImg'
import thumb from '../../assets/thumb.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latestReleased: [],
      isFetching: false,
    }
  }

  componentDidMount() {
    this.fetchSchedule()
  }

  fetchSchedule() {
    fetch('http://api.tvmaze.com/schedule?country=GB')
      .then(response => response.json())

      .then(data => {
        console.log('result fetch', data)
        this.setState({
          latestReleased: data.map(x => x.show).slice(0, 18),
          isFetching: true,
        })
      })

      .catch(e => console.log(e))
  }

  // isFetching() {
  //   this.state.isFetching
  // }
  render() {
    const { latestReleased, isFetching } = this.state
    console.log('latestReleased 13', latestReleased[13])

    const episodesList = latestReleased.length ? (
      latestReleased.map(episode => {
        const thumbImg = episode.image ? episode.image.medium : thumb
        return (
          <MovieThumbnail key={episode.id}>
            <Link to={`/${episode.id}`}>
              <StyledThumbImg src={thumbImg} />

              <ThumbTitle>{episode.name}</ThumbTitle>
              <RatingStars rating={episode.rating} />
            </Link>
          </MovieThumbnail>
        )
      })
    ) : (
      <h1>{isFetching ? 'Fetching data...' : 'No shows to show'}</h1>
    )

    return (
      <StyledWrapper>
        <Header className="App-header">
          <StyledH1>TV Bland</StyledH1>
          <p>This is my Header description</p>
        </Header>
        <div className="section">
          <StyledH2>Last Added Shows</StyledH2>
          <MoviesWrapper className="movie-list">{episodesList}</MoviesWrapper>
        </div>
      </StyledWrapper>
    )
  }
}

export default Home
