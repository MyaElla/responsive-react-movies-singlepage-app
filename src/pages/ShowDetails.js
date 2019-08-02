import React, { Component } from 'react'
import PropTypes from 'prop-types'
import thumb from '../assets/thumb.jpg'
import StyledThumbImg from '../components/StyledThumbImg'
import Cast from './Cast'
import ShowMore from './ShowMore'
import RatingStars from './RatingStars'

class ShowDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: null,
      castList: null,
    }
  }

  componentDidMount() {
    const { match } = this.props
    const id = match.params.show_id
    const baseShowUrl = `http://api.tvmaze.com/shows/${id}`

    const apiRequest1 = fetch(baseShowUrl).then(response => response.json())
    const apiRequest2 = fetch(`${baseShowUrl}/cast`).then(response =>
      response.json()
    )
    const combinedData = []

    Promise.all([apiRequest1, apiRequest2])
      .then(function(values) {
        combinedData[0] = values[0]
        combinedData[1] = values[1].slice(0, 5)
        return combinedData
      })
      // eslint-disable-next-line no-shadow
      .then(combinedData =>
        this.setState({
          showInfo: combinedData[0],
          castList: combinedData[1],
        })
      )
  }

  render() {
    const { showInfo, castList } = this.state
    console.log('showInfo RENDER', showInfo)

    const showDetails = showInfo ? (
      <div className="intro card">
        {showInfo.image ? (
          <StyledThumbImg src={showInfo.image.medium} />
        ) : (
          <StyledThumbImg src={thumb} />
        )}
        <div className="show present">
          <h4>{showInfo.name}</h4>
          <RatingStars rating={showInfo.rating} />
          <p>{showInfo.summary}</p>
        </div>
        <ShowMore details={showInfo} />
        <Cast listCast={castList} />
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    return <div className="container tile">{showDetails}</div>
  }
}

ShowDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      show_id: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default ShowDetails
