import styled from 'styled-components/macro'

export type MenuItemProps = {
  children: string,
  src: string,
  alt: string,
  href: string,
  active: true | false,
}

const Container = styled.div`
  align-items: center;
  background-image: ${(props) => props.theme.colors.gradient};
  border-radius: 0px 100px 100px 0px;
  display: flex;
  height: 58px;
  justify-content: center;
  padding: 0px;
  width: 277px;
`
const Img = styled.img`
  height: 27px;
  margin: 0px;
  padding: 0px;
  width: 20px;
`
const Title = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  margin: 0px 0px 0px 20px;
  max-width: 140px;
`
const Link = styled.a`
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
const LinkActive = styled.a`
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
const TitleActive = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  margin: 0px 0px 0px 20px;
  max-width: 140px;
`

export const MenuItem = ({ children, src, alt, href, active }: MenuItemProps) => {
  if (active === false) {
    return (
      <Container>
        <Link href={href}>
          <Img src={src} alt={alt} />
          <Title>{children}</Title>
        </Link>
      </Container>
    )
  }
  return (
    <Container>
      <LinkActive href={href}>
        <Img src={src} alt={alt} />
        <TitleActive>{children}</TitleActive>
      </LinkActive>
    </Container>
  )
}
