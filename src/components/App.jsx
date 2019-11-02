import React from 'react'
import styled from 'styled-components'

import SEO from '../components/SEO'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const StyledContainer = styled(Container)`
  align-content: center;
  font-family: 'ＭＳ Ｐゴシック', 'MS PGothic', 'メイリオ', 'Meiryo', sans-serif;
`

function App ({children}) {
  return (
    <>
        <NavBar />
        <SEO title="±Ndesign"/>
        <StyledContainer>
          {children}
        </StyledContainer>
        <Footer />
      </>
  )
}

export default App
