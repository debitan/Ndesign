import styled from 'styled-components'

const StyledContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0 20px 0;

    @media (min-width: 900px) {
    align-items: center;
    flex-direction: row;
    margin-bottom: 0;
    }
`

export default StyledContainer
