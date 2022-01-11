import styled from 'styled-components/macro'

export type AvatarProps = {
  src: string,
  userName: string,
}

const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 36px 1fr;
  height: 36px;
  min-width: 140px;
  padding: 0px;
`
const Img = styled.img`
  border-radius: 50%;
  height: 36px;
  object-fit: cover;
  object-position: center center;
  width: 36px;
`
const UserName = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  line-height: 24px;
  margin: 0px 0px 0px 8px;
`

export const Avatar = ({ src, userName }: AvatarProps) => {
  return (
    <Container>
      <Img src={src} />
      <UserName>{userName}</UserName>
    </Container>
  )
}
