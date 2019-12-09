import styled from 'styled-components'

const MobileHr = styled('hr')`
    display: block;
    border: none;
    margin-top: 0;
    width: 100%;
    height: 1px;
    background-color: black;
    color: black;

    @media (min-width: 900px) {
        display: none;
    }
`

export default MobileHr
