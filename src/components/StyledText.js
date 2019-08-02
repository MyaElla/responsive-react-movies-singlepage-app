import styled from 'styled-components'
import { styles } from '../styles/Common'

const StyledText = styled.p`
  background-color: transparent;
  font-size: ${props => (props.small ? '12px' : '15px')};
  color: ${styles.colorText};
  ${props => props.highlight && `color: ${styles.colorHighlight}`};
  ${props => props.error && `color: ${styles.colorError};`};
  ${props => props.center && 'text-align: center;'}
  ${props => props.bold && 'font-weight: 700;'}
  ${props => props.subtle && 'opacity: 0.6;'}

`
export default StyledText
