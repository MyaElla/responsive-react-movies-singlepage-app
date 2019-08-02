import styled from 'styled-components'

const MoviesWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  background: #ffffff;
  padding: 2em;

  @media all and (min-width: 700px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media all and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-gap: 1em;
  background: #ffffff;
  padding: 2em;
`
export default MoviesWrapper
