import styled, { css } from 'styled-components'

const MovieThumbnail = styled.div`
  /* background: transparent; */
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 2px solid #ff0066;
  padding: 0.2em;
  align-items: center;
  /* align-content: flex-end; */
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: #001a00;

    &:hover {
    color: brown;
    font-weight: bolder;
    /* animation:  */
   } 
  


`


export default MovieThumbnail