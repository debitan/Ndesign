import React from 'react'
import styled from 'styled-components'

import Svg from './Svg'

const Divider = styled('div')`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`

const JPText = styled('h6')`
    color: grey;
    padding-top: 10px;
    min-width: fit-content;
    align-self: center;
`

const ColumnDivider = ({svg, alt, JPTitle}) => {
    return (
        <Divider>
            <Svg src={svg} alt={alt} />
            <JPText>
                {JPTitle}
            </JPText>
        </Divider>
    )
}

export default ColumnDivider
