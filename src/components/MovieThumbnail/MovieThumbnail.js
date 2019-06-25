import styled, { css } from 'styled-components'

const MovieThumbnail = styled.div`
  /* background: transparent; */
  display: flex;
  border-radius: 3px;
  border: 2px solid #ff0066;
  padding: 0.2em;
  align-items: center;
  /* align-content: flex-end; */
  justify-content: center;

   &:hover {
    color: brown;
    font-weight: bolder;
   }
  


`


export default MovieThumbnail