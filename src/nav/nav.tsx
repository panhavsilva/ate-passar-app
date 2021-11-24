import logo from './logo-nav.svg'
import { NavStyled, Logo, DivUser, Avatar, UserName } from './nav-styled'

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
