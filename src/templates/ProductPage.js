import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import App from '../components/App'
import MyContext from '../components/MyContext'
import PriceText from '../components/PriceText'

import serializers from '../serializers'

const StyledWrapper = styled('div')`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-gap: 15px;
    grid-auto-rows: minmax(100px, auto);
    padding: 20px 0 20px 0;

    @media (min-width: 992px) {
        grid-template-columns: 1fr 2fr;
        padding: 40px 0 40px 0;
    }
`

const LeftSide = styled('div')`
    grid-column: 1;
    padding: 15px;
    grid-row: 1;
`

const RightSide = styled('div')`
    grid-column: 1;
    grid-row: 2;
    padding: 15px;

    @media (min-width: 992px) {
        grid-column: 2;
        grid-row: 1;
    }
`

const TitleText = styled('h4')`
    font-weight: 500;
`

const TaxText = styled('p')`
    font-size: 18px;
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const BuyButton = styled('button')`
    width: 300px;
    height: 50px;
    background-color: black;
    color: white;
    border-radius: 37.5px;
    font-size: 18px;
    animation: ${fadeIn} 1s linear;
`

const SelectionWrapper = styled(Form)`
    margin: 40px 40px 40px 40px;
    display: flex;
    flex-flow: column;
`

const AdviceTextWrapper = styled('div')`
    grid-column: 1;
    display: none;

    @media (min-width: 992px) {
        display: block;
    }
`

const MobileAdviceTextWrapper = styled(AdviceTextWrapper)`
    display: block;

    @media (min-width: 992px) {
        display: none;
    }
`

const AdviceText = styled('p')`
    font-weight: 500;
`

const ImageWrapper = styled('div')`
    width: 100%;
    display: block;

    @media (min-width: 992px) {
        width: 500px;
        margin-bottom: 40px;
    }
`

const ProductPage = ({ pageContext }) => {
    const [ variant, setVariant ] = useState(pageContext.variants[0])
    const [ size, setSize ] = useState(pageContext.variants[0].size)
    const [ colour, setColour ] = useState(pageContext.colours[0])
    const [ quantity, setQuantity ] = useState(1)
    // const [ message, setMessage ] = useState('')
    const [ isAdded, setIsAdded ] = useState(false)
    const [ animate, setAnimate ] = useState(0)

    useEffect(() => {
        setVariant(...pageContext.variants.filter(variant => variant.size === size))
    }, [size])

    return (
    <App>
        <MyContext.Consumer>
            {context => (
                <StyledWrapper>
                    <LeftSide>
                        <ImageWrapper>
                            <Carousel>
                                {pageContext.images.map(image =>
                                    <Carousel.Item>
                                        <Img fluid={image.asset.fluid} alt={pageContext.title} />
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </ImageWrapper>
                        <AdviceTextWrapper>
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
                        </AdviceTextWrapper>
                    </LeftSide>
                    <RightSide>
                        <TitleText>{pageContext.title}</TitleText>
                        <TaxText>
                            消費税込　
                            <PriceText price={variant.price} />
                        </TaxText>
                        <p>
                            <Label>花材: </Label>{pageContext.flower}
                            <br />
                            <Label>タイプ: </Label>{pageContext.type.jpCategory}
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
                            {/* <Form.Group as={Row}>
                                <FormLabel column>
                                    ご要望
                                    <br />
                                    （任意）
                                </FormLabel>
                                <Col sm={8}>
                                    <Form.Control as="textarea" rows="3" onChange={e => setMessage(e.target.value)}/>
                                </Col>
                            </Form.Group> */}
                            <ButtonWrapper>
                                <BuyButton
                                    key={animate}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        context.handleAddToBasketClick(...Object.values(pageContext.slug), size, colour, Number(quantity), Number(variant.price), pageContext.images[0].asset.fluid, pageContext.title, pageContext.flower, pageContext.type.jpCategory, variant.sku)
                                        setIsAdded(true)
                                        setAnimate(animate + 1)
                                    }}>
                                        {isAdded ? 'カートに入れました' : 'カートに入れる'}
                                </BuyButton>
                            </ButtonWrapper>
                        </SelectionWrapper>
                        <p>
                            <Label>アイテム説明: </Label>
                            <br />
                            <BlockContent blocks={pageContext._rawBody} serializers={serializers} />
                        </p>
                    </RightSide>
                    <MobileAdviceTextWrapper>
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
                        </MobileAdviceTextWrapper>
                </StyledWrapper>)}
        </MyContext.Consumer>
    </App>
    )
}

export default ProductPage
