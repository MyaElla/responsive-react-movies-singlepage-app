/* eslint-disable react/prop-types */
import React from 'react'
import StyledCastImgCircle from '../components/StyledCastImgCircle'
import StyledList from '../components/StyledList'
import StyledListItem from '../components/StyledListItem'
import StyledText from '../components/StyledText'

import alvin from '../assets/alvin.jpg'

const Cast = ({ listCast }) => {
  let rowCast
  console.log('listCast', listCast)

  if (listCast) {
    rowCast = listCast.map(castItem => {
      const image = castItem.person.image ? (
        <StyledCastImgCircle src={castItem.person.image.medium} alt="" />
      ) : (
        <StyledCastImgCircle src={alvin} alt="alvin" />
      )
      return (
        <StyledListItem key={castItem.id}>
          <span>{image}</span>
          {castItem.person.name}
          <StyledText subtle>{castItem.character.name}</StyledText>
        </StyledListItem>
      )
    })
  }

  return (
    <div>
      <h3>Starring</h3>
      <StyledList>{rowCast}</StyledList>
    </div>
  )
}

export default Cast
