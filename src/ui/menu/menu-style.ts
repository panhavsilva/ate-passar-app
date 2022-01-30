import styled from 'styled-components/macro'

export const Container = styled.div`
  align-items: center;
  background-image: ${(props) => props.theme.colors.gradient};
  border-radius: 0px 100px 100px 0px;
  display: flex;
  height: 58px;
  justify-content: center;
  padding: 0px;
  width: 277px;
`
export const Img = styled.img`
  height: 27px;
  margin: 0px;
  padding: 0px;
  width: 20px;
`
export const Title = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  margin: 0px 0px 0px 20px;
  max-width: 140px;
`
export const Link = styled.a`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: grid;
  grid-template-columns: 20px 1fr;
  height: 58px;
  padding: 0px 0px 0px 40px;
  text-decoration: none;
  width: 277px;

  :hover {
    border-radius: 0px 100px 100px 0px;
    height: 54px;
    width: 273px;

    transition: width 0.3s linear;
    transition: height 0.3s linear;
  }
`
export const LinkActive = styled.a`
  align-items: center;
  background-image: ${(props) => props.theme.colors.gradient};
  border-radius: 0px 100px 100px 0px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 20px 1fr;
  height: 58px;
  padding: 0px 0px 0px 40px;
  text-decoration: none;
  width: 277px;
`
export const TitleActive = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  margin: 0px 0px 0px 20px;
  max-width: 140px;
`