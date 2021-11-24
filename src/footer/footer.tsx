import styled, { css } from 'styled-components/macro'
import icon from './icon-cronometro-fotter.svg'
import seta from '../ui/icons/icon-expandir-cor.svg'

const FooterStyled = styled.div`${({ theme }) => css`
  align-items: center;
  background-image: ${theme.colors.gradient};
  bottom: 0;
  display: flex;
  grid-area: footer;
  height: 70px;
  padding-left: 290px;
  position: absolute;
  width: 100%;
`}`
const Circle = styled.div`${({ theme }) => css`
  background-color: ${theme.colors.darkPurple};
  border-radius: 50%;
  display: flex;
  height: 49px;
  justify-content: center;
  margin-right: 15px;
  width: 49px;
`}`
const Cronometro = styled.img`
  width: 29px;
`
const DivSelect = styled.div`${({ theme }) => css`
  align-items: center;
  background: #fff;
  border-radius: 12px;
  color: ${theme.colors.gray};
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 12px 15px;
  width: 224px;
`}`
const ButtonSelect = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 15px;
  padding: 0;
  width: 15px;

  & img{
    height: 100%;
    width: 100%;
  }
`
const SelectText = styled.p`${({ theme }) => css`
  color: ${theme.colors.purple};
  font-size: 12px;
  line-height: 18px;
`}`
const DivOptions = styled.div`${({ theme }) => css`
  align-items: center;
  background: #fff;
  border-radius: 12px;
  bottom: 14px;
  color: ${theme.colors.gray};
  display: flex;
  margin-left: 354px;
  padding: 4px 0px;
  position: absolute;
  width: 224px;
`}`
const UlOptions = styled.ul`${({ theme }) => css`
  border: none;
  color: ${theme.colors.gray};
  font-size: 12px;
  line-height: 18px;
  list-style: none;
  margin: 0px;
  padding: 4px 12px;
  width: 100%;

  & :hover{
    background: #fff7fe;
  }
`}`
const LiOptions = styled.li`${({ theme }) => css`
  color: ${theme.colors.gray};
  cursor: pointer;
  margin: 8px 0px;
  padding: 4px 4px;
  width: 100%;
`}`

export function Footer () {
  return (
    <>
      <FooterStyled>
        <Circle>
          <Cronometro src={icon} alt='Cronômetro' />
        </Circle>
        <DivSelect>
          <SelectText>Matéria</SelectText>
          <ButtonSelect data-js='select-button'>
            <img src={seta} alt='botão expandir opções' />
          </ButtonSelect>
        </DivSelect>
      </FooterStyled>
      <DivOptions>
        <UlOptions>
          <LiOptions>Matéria</LiOptions>
          <LiOptions>Matéria</LiOptions>
          <LiOptions>Matéria</LiOptions>
          <LiOptions>Matéria</LiOptions>
          <LiOptions>Matéria</LiOptions>
          <LiOptions>Matéria</LiOptions>
          <LiOptions>Matéria</LiOptions>
          <LiOptions>Matéria</LiOptions>
        </UlOptions>
      </DivOptions>
    </>
  )
}
