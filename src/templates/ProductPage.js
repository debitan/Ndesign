import React from 'react'
import styled from 'styled-components'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import App from '../components/App'
import MyContext from '../components/MyContext'


import productImage from '../images/product1.jpg'


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
    margin: 40px;
`

const ProductPage = ({ pageContext }) => {
    return (
    <App>
        <MyContext.Consumer>
            {context => (
                <StyledWrapper>
                    <LeftSide>
                        <img src={productImage} style={{ width: "500px"}} alt={pageContext.title} />
                    </LeftSide>
                    <RightSide>
                    <TitleText>{pageContext.title}</TitleText>
                    <TaxText>消費税込　<PriceText>¥{pageContext.price}</PriceText></TaxText>
                    <p>
                        <Label>花材: </Label>{pageContext.flower}
                        <br />
                        <Label>タイプ: </Label>{pageContext.type}
                    </p>
                    <p>
                        <Label>アイテム説明: </Label>
                        <br />
                        {pageContext.description}
                    </p>
                    <SelectionWrapper>
                        <Form.Group as={Row} controlId="size">
                            <FormLabel column>
                                サイズ
                            </FormLabel>
                            <Col sm={5}>
                                <Form.Control as="select">
                                    {pageContext.sizes.map(size => {
                                        return (<option value={size}>{size}</option>)
                                    })}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="colour">
                            <FormLabel column>
                                カラー
                            </FormLabel>
                            <Col sm={5}>
                                <Form.Control as="select">
                                    {pageContext.colours.map(colour => {
                                        return (<option value={colour}>{colour}</option>)
                                    })}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <FormLabel column>数量</FormLabel>
                            <Col sm={3}>
                                <Form.Control type="number" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <FormLabel column>
                                ご要望
                                <br />
                                （任意）
                            </FormLabel>
                            <Col sm={8}>
                                <Form.Control as="textarea" rows="3" />
                            </Col>
                        </Form.Group>
                        <ButtonWrapper>
                            <BuyButton onClick={() => {context.handleAddToBasketClick(pageContext.slug)}}>
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
