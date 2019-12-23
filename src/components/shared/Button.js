import styled from 'styled-components'

const Button = styled('a')`
    width: fit-content;
    border: 3px solid black;
    border-radius: 100em;
    color: white;
    background-color: black;
    text-decoration: none;
    padding: 0 10px;
    margin-bottom: 10px;

    :hover {
        text-decoration: none;
        color: white;
    }

    @media (min-width: 768px) {
        width: 50%;
    }
    @media (min-width: 1000px) {
        width: 30%;
    }
`

export default Button
