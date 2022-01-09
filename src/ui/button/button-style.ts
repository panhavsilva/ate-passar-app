import styled from 'styled-components/macro'

export type ButtonProps = {
  size: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge',
  shadow: 'on' | 'off',
}

const borderRadius = {
  extraSmall: '50%',
  small: '100px',
  medium: '100px',
  large: '100px',
  extraLarge: '100px',
}
const fontSize = {
  extraSmall: '12px',
  small: '16px',
  medium: '18px',
  large: '18px',
  extraLarge: '18px',
}
const height = {
  extraSmall: '18px',
  small: '42px',
  medium: '42px',
  large: '42px',
  extraLarge: '42px',
}
const padding = {
  extraSmall: '3px',
  small: '13px',
  medium: '13px',
  large: '13px',
  extraLarge: '13px',
}
const width = {
  extraSmall: '18px',
  small: '75px',
  medium: '134px',
  large: '220px',
  extraLarge: '300px',
}
const boxShadow = {
  off: 'none',
  on: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const ButtonDefault = styled.button<ButtonProps>`
  border: 0;
  border-radius: 100px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 18px;
  padding: 13px;
  text-align: center;

  border-radius: ${(props) => borderRadius[props.size]};
  box-shadow: ${(props) => boxShadow[props.shadow]};
  font-size: ${(props) => fontSize[props.size]};
  height: ${(props) => height[props.size]};
  min-width: ${(props) => width[props.size]};
  padding: ${(props) => padding[props.size]};

  &:hover {
    opacity: 0.8;
    transition: opacity .5s ease;
  }
`

export const ButtonPrimary = styled(ButtonDefault)`
  background-image: ${(props) => props.theme.colors.gradient};
`

export const ButtonRed = styled(ButtonDefault)<ButtonProps>`
  background-color: ${(props) => props.theme.colors.red};
`

export const ButtonSecondary = styled(ButtonDefault)<ButtonProps>`
  background-image: ${(props) => props.theme.colors.gradientSecondary};
`

export const BackgroundButtonTertiary = styled(ButtonDefault)`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
`
export const TextButtonTertiary = styled.div<ButtonProps>`
  background-image: ${(props) => props.theme.colors.gradientSecondary};
  border-radius: ${(props) => borderRadius[props.size]};
  height: 100%;
  margin: 0px;
  padding: 0px;
  width: 100%;

  color:transparent;
  -webkit-background-clip: text;
  background-clip: text;
`
