import React, { useState } from 'react'
import styled from 'styled-components'

import dropdown from'../../images/dropdown.svg'


const CardHeader = styled('div')`
    display: flex;
    justify-content: space-between;
    background-color: #dde8e2;
    border: 1px solid #979797;
    height: fit-content;
    align-items: center;
    padding: 10px;
    cursor: pointer;
`

const Dropdown = styled('img')`
    transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'};
    transition: transform .3s ease-out;
`

const CollapsableDiv = styled('div')`
    padding: 20px;
    transition: ${props => props.isOpen ? 'opacity 0.5s linear' : 'none'};
    position: ${props => props.isOpen ? 'static' : 'absolute'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    transform: ${props => props.isOpen ? 'none' : 'translate(-100%, -100%)'}
`

const AccordionCard = ({headerText, bodyText, bodyText2, defaultOpen = false}) => {
    const [isOpen, setIsOpen ] = useState(defaultOpen)

    return (
        <div>
            <CardHeader onClick={() => setIsOpen(!isOpen)}>
                <span>{headerText}</span>
                <Dropdown src={dropdown} alt='dropdown' isOpen={isOpen} />
            </CardHeader>
            <CollapsableDiv isOpen={isOpen} >
                <p>{bodyText}</p>
                {bodyText2 && <p>{bodyText2}</p>}
            </CollapsableDiv>
        </div>
    )
}

export default AccordionCard
