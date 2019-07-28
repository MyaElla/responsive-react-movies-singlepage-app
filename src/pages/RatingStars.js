import React from "react";

const RatingStars = ({ rating }) => {
    const score = (rating.average === null) ? 'No rating yet, waiting for more votes' : rating.average

    return (
        <p>{score}</p>
    )
}

export default RatingStars