import styled from 'styled-components'

const MoviesWrapper = styled.div`
  // display: grid;
  // grid-gap: 1em;
  // background: #ffffff;
  // padding: 2em;

  // @media all and (min-width: 700px) {
  //   grid-template-columns: repeat(6, 1fr);
  // }

  // @media all and (max-width: 700px) {
  //   grid-template-columns: repeat(2, 1fr);
  // }
  // grid-gap: 1em;
  // background: #ffffff;
  // padding: 2em;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 1em;
  // align-items: flex-start;
  justify-content: space-around;

  // @media screen and (max-width: 700px) {
  //   .x {
  //     flex: 50%;
  //     max-width: 50%;
  //   }
  // }
  // https: ; //www.w3schools.com/howto/howto_css_image_grid_responsive.asp
`
export default MoviesWrapper
