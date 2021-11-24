import styled from 'styled-components/macro'
import { Nav } from './nav'
import { Footer } from './footer'

export function App () {
  return (
    <Container>
      <Nav />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-areas: 'nav nav' 'sidenav content' 'footer footer';
  grid-template-columns: 290px 1fr;
  grid-template-rows: 83px 1fr 70px;
`
