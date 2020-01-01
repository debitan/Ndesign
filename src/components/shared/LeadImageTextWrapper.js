import styled from 'styled-components'

const LeadImageTextWrapper = styled('div')`
    margin-top: 30px;

    @media (min-width: 900px) {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0%, -50%);
        background: rgba(255, 255, 255, 0.7);
        padding: 10px;
        width: fit-content;
    }
`

export default LeadImageTextWrapper
