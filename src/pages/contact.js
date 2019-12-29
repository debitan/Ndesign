import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import App from '../components/App'
import ColumnDivider from '../components/shared/ColumnDivider'
import AccordionCard from '../components/shared/AccordionCard'
import serializers from '../serializers'

const Accordion = styled('div')`
    padding-bottom: 30px;
`

const ContactPage = () => {
    const [expanded, setExpanded] = useState(['0'])

    const data = useStaticQuery(graphql`
        query ContactPageQuery {
            allSanityFaqs {
                edges {
                  node {
                    question
                    _rawAnswer
                  }
                }
              }
              sanityContactPage {
                _rawInformation
              }
        }
    `)

    const firstFaq = data.allSanityFaqs.edges[0]
    const otherFaqs = data.allSanityFaqs.edges.slice(1)

    return (
        <App>
            <ColumnDivider
                title='FAQs'
                JPTitle='よくあるご質問'
            />
            <Accordion>
                <AccordionCard
                        headerText={firstFaq.node.question}
                        bodyText={<BlockContent blocks={firstFaq.node._rawAnswer} serializers={serializers} />}
                        defaultOpen={true}
                />
                {otherFaqs.map(faq =>
                    <AccordionCard
                        headerText={faq.node.question}
                        bodyText={<BlockContent blocks={faq.node._rawAnswer} serializers={serializers} />}
                    />
                )}
            </Accordion>
            <ColumnDivider
                title='Contact'
                JPTitle='お問い合わせ'
            />
           <BlockContent blocks={data.sanityContactPage._rawInformation} serializers={serializers} />
           <br />
        </App>
    )
}

export default ContactPage
