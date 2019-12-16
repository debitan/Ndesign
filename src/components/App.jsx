import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import SEO from '../components/SEO'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const StyledContainer = styled(Container)`
  align-content: center;
  font-family: 'Noto Sans JP', sans-serif;
`

const MobileNoOverflowWrapper = styled('body')`
  overflow-x: hidden;
`

function App ({children}) {
  return (
    <>
      <Helmet>
        <html lang="jp" defer={false} />
      </Helmet>
      <SEO title="±Ndesign"/>
      <MobileNoOverflowWrapper>
        <NavBar />
        <StyledContainer>
          {children}
        </StyledContainer>
        <Footer />
      </MobileNoOverflowWrapper>
    </>
  )
}

export default App
