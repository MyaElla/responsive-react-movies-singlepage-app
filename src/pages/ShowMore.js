import React from 'react'
import StyledList from '../components/StyledList'
import StyledListItem from '../components/StyledListItem'
import StyledText from '../components/StyledText'

const ShowMore = details => {
  console.log('showInfoMORE', details)

  const rowNetwork = details ? (
    <StyledListItem>
      On
      <StyledText subtle>{details.network.name}</StyledText>
    </StyledListItem>
  ) : (
    'N/A'
  )
  const schedule = details ? (
    <StyledListItem>
      Schedule
      <StyledText subtle>{details.schedule.days}</StyledText>
    </StyledListItem>
  ) : (
    'N/A'
  )
  const status = details ? (
    <StyledListItem>
      Status
      <StyledText subtle>{details.status}</StyledText>
    </StyledListItem>
  ) : (
    'N/A'
  )
  const genres = details ? (
    <StyledListItem>
      Genres
      <StyledText subtle>{details.genres}</StyledText>
    </StyledListItem>
  ) : (
    'N/A'
  )

  return (
    <div>
      <h3>Show Info</h3>
      <StyledList>
        {rowNetwork}
        {schedule}
        {status}
        {genres}
      </StyledList>
    </div>
  )
}

export default ShowMore
