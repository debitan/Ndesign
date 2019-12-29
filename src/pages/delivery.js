import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import App from '../components/App'
import serializers from '../serializers'

const TextContainer = styled('div')`
    margin: 30px 0;

    p {
        padding-bottom: 10px;
    }
`


const DeliveryPage = () => {
    const data = useStaticQuery(graphql`
        query DeliveryPageQuery {
            sanityInformationPage {
            _rawInformation
            }
        }
    `)

    return (
        <App>
            <TextContainer>
                <BlockContent blocks={data.sanityInformationPage._rawInformation} serializers={serializers} />
            </TextContainer>
        </App>
    )
}

export default DeliveryPage
