import styled from 'styled-components/macro'

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 36px 1fr;
  height: 36px;
  min-width: 140px;
  padding: 0px;
`
export const Img = styled.img`
  border-radius: 50%;
  height: 36px;
  object-fit: cover;
  object-position: center center;
  width: 36px;
`
export const UserName = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  line-height: 24px;
  margin: 0px 0px 0px 8px;
`
