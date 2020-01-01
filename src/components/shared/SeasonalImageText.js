import styled from 'styled-components'

const SeasonalImageTextWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.7);
    padding: 10px;
    height: 100%;
    min-width: 33%;
    width: fit-content;
    overflow: hidden;
`

const SeasonalImageText = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    font-size: 16px;
    font-weight: 500;
    align-self: baseline;
    padding-top: 10px;

    @media (min-width: 900px) {
        align-self: auto;
        padding-top: 0;
    }
`

export { SeasonalImageTextWrapper, SeasonalImageText }
