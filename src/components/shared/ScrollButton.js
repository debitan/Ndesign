import styled from 'styled-components'

const ScrollButton = styled('button')`
    width: 50%;
    min-width: fit-content;
    border: 3px solid black;
    border-radius: 100em;
    color: white;
    background-color: black;
    text-decoration: none;
    padding: 10px;
    margin-bottom: 10px;

    :hover {
        text-decoration: none;
        color: white;
    }

    @media (min-width: 900px) {
        width: 80%;
    }
`

export default ScrollButton
