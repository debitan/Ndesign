import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import SEO from '../components/SEO'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
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
        <html lang="ja" defer={false} />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
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
