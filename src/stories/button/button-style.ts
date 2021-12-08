import styled from 'styled-components/macro'
import { theme } from '../../resources/theme'

export const ButtonDefault = styled.button`
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  padding: 13px;

  &.button--small {
    border-radius: 50%;
    font-size: 12px;
    height: 18px;
    padding: 3px;
    width: 18px;
  }
  &.button--medium {
    height: 42px;
    width: 134px;
  }
  &.button--large {
    height: 42px;
    width: 300px;
  }
`

export const ButtonPrimary = styled(ButtonDefault)`
  color: white;
  background-image: ${theme.colors.gradient};
`

export const ButtonRed = styled(ButtonDefault)`
  color: white;
  background-color: ${theme.colors.red};
`
