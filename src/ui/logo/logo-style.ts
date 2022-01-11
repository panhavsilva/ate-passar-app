import styled from 'styled-components/macro'
import logo from './logo.svg'

export type LogoProps = {
  size: 'small' | 'large',
  onClick?: () => void,
}

const width = {
  large: '229',
  small: '126px',
}
const heigth = {
  large: '90',
  small: '55px',
}

export const Logo = styled.img<LogoProps>`
  cursor: pointer;
  height: ${(props) => heigth[props.size]};
  width: ${(props) => width[props.size]};
`

Logo.defaultProps = {
  src: logo,
  alt: 'Logo Até Passar',
}
