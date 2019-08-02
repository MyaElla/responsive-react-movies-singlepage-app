import styled from 'styled-components'
import StyledText from './StyledText'

const StyledScore = styled(StyledText)`
  font-size: 12px;
  color: #64038a;
  ${props => props.italic && 'font-style: italic;'}
  ${props => props.subtle && 'opacity: 0.6;'}
`
export default StyledScore
