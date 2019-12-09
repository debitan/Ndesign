import styled from 'styled-components'

const StyledHr = styled('hr')`
    display: none;
    border: none;
    height: 1px;
    background-color: black;
    color: black;

    @media (min-width: 900px) {
        display: block;
    }
`

export default StyledHr
