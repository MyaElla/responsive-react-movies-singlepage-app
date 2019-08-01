import React from "react";
import StyledScore from '../components/StyledScore'

const RatingStars = ({ rating }) => {
    const score = (rating.average === null) ?
        <StyledScore italic subtle>No rating yet</StyledScore>
        :
        <StyledScore>{rating.average}</StyledScore>

    return (
        <div>{score}</div>
    )
}

export default RatingStars