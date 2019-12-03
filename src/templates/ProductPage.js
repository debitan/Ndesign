import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import App from '../components/App'
import MyContext from '../components/MyContext'

import serializers from '../serializers'

const StyledWrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 15px;
    grid-auto-rows: minmax(100px, auto);
    margin: 40px 0 40px 0;
`

const LeftSide = styled('div')`
    grid-column: 1;
    padding: 15px;
`

const RightSide = styled('div')`
    grid-column: 2;
    padding: 15px;
`

const TitleText = styled('h4')`
    font-weight: 500;
`

const TaxText = styled('p')`
    font-size: 18px;
    font-weight: 500;
`

const PriceText = styled('span')`
    font-size: 24px;
    font-weight: 500;
`

const Label = styled('span')`
    color: grey;
`

const FormLabel = styled(Form.Label)`
    color: grey;
`

const ButtonWrapper = styled('div')`
    display: flex;
    justify-content: center;
`

const BuyButton = styled('button')`
    width: 300px;
    height: 50px;
    background-color: black;
    color: white;
    border-radius: 37.5px;
    font-size: 18px;
`

const SelectionWrapper = styled(Form)`
    margin: 40px 40px 40px 40px;
`

const AdviceText = styled('p')`
    font-weight: 500;
`

const ImageWrapper = styled('div')`
    margin-bottom: 40px;
`

const ProductPage = ({ pageContext }) => {
    const [ variant, setVariant ] = useState(pageContext.variants[0])
    const [ size, setSize ] = useState(pageContext.variants[0].size)
    const [ colour, setColour ] = useState(pageContext.colours[0])
    const [ quantity, setQuantity ] = useState(1)
    const [ message, setMessage ] = useState('')

    useEffect(() => {
        setVariant(...pageContext.variants.filter(variant => variant.size === size))
    }, size)

    return (
    <App>
        <MyContext.Consumer>
            {context => (
                <StyledWrapper>
                    <LeftSide>
                        <ImageWrapper>
                            <Img fluid={pageContext.images[0].asset.fluid} style={{ width: "500px"}} alt={pageContext.title} />
                        </ImageWrapper>
                        <AdviceText>
                            * ご注意 *
                        </AdviceText>
                        <AdviceText>
                            • 季節と入荷により花材が変わりますので、写真と全く同じものにはなりません。予め、ご了承ください。オーダーメイドで心を込めてお作りして参りますので、世界に一つのギフトを楽しみください。
                        </AdviceText>
                        <AdviceText>
                            • ご注意を頂いてから全てに心を込めてご提案させていただいておりますので、オーダーには3日から1週間を時間をいただいております。お急ぎの場合は、事前にご相談くださいませ。
                        </AdviceText>
                        <AdviceText>
                            • お支払い方法は、カード決済のみとなります。
                        </AdviceText>
                    </LeftSide>
                    <RightSide>
                        <TitleText>{pageContext.title}</TitleText>
                        <TaxText>消費税込　<PriceText>¥{variant.price} </PriceText></TaxText>
                        <p>
                            <Label>花材: </Label>{pageContext.flower}
                            <br />
                            <Label>タイプ: </Label>{pageContext.type}
                        </p>
                        <p>
                            <Label>アイテム説明: </Label>
                            <br />
                            <BlockContent blocks={pageContext._rawBody} serializers={serializers} />
                        </p>
                        <SelectionWrapper>
                            <Form.Group as={Row} controlId="size">
                                <FormLabel column>
                                    サイズ
                                </FormLabel>
                                <Col sm={5}>
                                    <Form.Control as="select" onChange={e => setSize(e.target.value)}>
                                        {pageContext.variants.map(variant => {
                                            return (<option value={variant.size} key={variant.size}>{variant.size}</option>)
                                        })}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="colour">
                                <FormLabel column>
                                    カラー
                                </FormLabel>
                                <Col sm={5}>
                                    <Form.Control as="select" onChange={e => setColour(e.target.value)}>
                                        {pageContext.colours.map(colour => {
                                            return (<option value={colour} key={colour}>{colour}</option>)
                                        })}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <FormLabel column>数量</FormLabel>
                                <Col sm={3}>
                                    <Form.Control type="number" defaultValue={1} onChange={e => setQuantity(e.target.value)}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <FormLabel column>
                                    ご要望
                                    <br />
                                    （任意）
                                </FormLabel>
                                <Col sm={8}>
                                    <Form.Control as="textarea" rows="3" onChange={e => setMessage(e.target.value)}/>
                                </Col>
                            </Form.Group>
                            <ButtonWrapper>
                                <BuyButton onClick={() => {context.handleAddToBasketClick(pageContext.slug, size, colour, quantity, message)}}>
                                    カートに入れる
                                </BuyButton>
                            </ButtonWrapper>
                        </SelectionWrapper>
                    </RightSide>
                </StyledWrapper>)}
        </MyContext.Consumer>
    </App>
    )
}

export default ProductPage
