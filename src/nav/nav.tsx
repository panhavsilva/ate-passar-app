import styled, { css } from 'styled-components/macro'
import logo from './logo-nav.svg'

const NavStyled = styled.nav`${({ theme }) => css`
  align-items: center;
  background: ${theme.colors.white};
  border-bottom: 2px solid ${theme.colors.lightGray};
  display: grid;
  height: 83px;
  grid-template-columns: 290px 1fr;
  width: 100%;
`}`
const Logo = styled.img`
  margin-left: 46px;
`
const DivUser = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 166px;
`
const Avatar = styled.img`
  border-radius: 50%;
  height: 36px;
  margin-right: 11px;
  width: 36px;
`
const UserName = styled.p`${({ theme }) => css`
  color: ${theme.colors.gray};
  font-size: 1.2rem;
  line-height: 24px;
`}`

export function Nav () {
  return (
    <NavStyled>
      <Logo src={logo} alt='Até Passar Logo' />
      <DivUser>
        <Avatar
          src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80'
          alt='Avatar'
        />
        <UserName>Ramon Ridwan</UserName>
      </DivUser>
    </NavStyled>
  )
}
