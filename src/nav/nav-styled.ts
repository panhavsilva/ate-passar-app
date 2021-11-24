import styled, { css } from 'styled-components/macro'

export const NavStyled = styled.nav`${({ theme }) => css`
  align-items: center;
  background: ${theme.colors.white};
  border-bottom: 2px solid ${theme.colors.lightGray};
  display: grid;
  grid-area: nav;
  height: 83px;
  grid-template-columns: 290px 1fr;
  width: 100%;
`}`

export const Logo = styled.img`
  margin-left: 46px;
  width: 126px;
`

export const DivUser = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-right: 93px;
`

export const Avatar = styled.img`
  border-radius: 50%;
  height: 36px;
  margin-right: 11px;
  width: 36px;
`

export const UserName = styled.p`${({ theme }) => css`
  color: ${theme.colors.gray};
  font-size: 1.2rem;
  line-height: 24px;
`}`
