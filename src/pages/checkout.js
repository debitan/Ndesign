import React, { useState } from 'react'
import styled from 'styled-components'
import { Elements } from 'react-stripe-elements'

import App from '../components/App'
import CheckoutForm from '../components/CheckoutForm'
import MyContext from '../components/MyContext'
import CustomerInformationForm from '../components/CustomerInformationForm'
import Confirmation from '../components/Cart/Confirmation'
import StyledHr from '../components/shared/StyledHr'
import MobileHr from '../components/shared/MobileHr'
import CheckoutDivider from '../components/shared/CheckoutDivider'
import CartProduct from '../components/CartProduct'

import shoppingCart from '../images/shoppingCart.svg'
import shoppingCartIcon from '../images/shoppingCartIcon.svg'
import delivery from '../images/delivery.svg'
import deliveryIcon from '../images/deliveryIcon.svg'
import payment from '../images/payment.svg'
import paymentIcon from '../images/paymentIcon.svg'

const StyledWrapper = styled('div')`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-gap: 15px;
    grid-auto-rows: minmax(100px, auto);
    margin: 40px 0 40px 0;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);

    @media (min-width: 480px) {
        margin-left: 0;
        margin-right: 0;
    }

    @media (min-width: 992px) {
        grid-template-columns: 2fr 1fr;
    }
`

const LeftSide = styled('div')`
    grid-column: 1;
    border: 1px solid #979797;
    padding: 15px;

    div :first-child {
        padding-top: 15px;
    }
`

const RightSide = styled('div')`
    grid-column: 1;
    border: 1px solid #979797;
    grid-row: 1;
    padding: 15px;
    top: 95px;
    height: fit-content;

    @media (min-width: 992px) {
        grid-column: 2;
        position: sticky;
    }
`

const CostContainer = styled('div')`
    display: flex;
    justify-content: space-between;
`

const TotalCostContainer = styled(CostContainer)`
    justify-content: flex-end;
`

const Gokei = styled('div')`
    padding-top: 15px;
`

function Checkout() {
    const [kanjiName, setKanjiName] = useState('')
    const [furiganaName, setFuriganaName] = useState('')
    const [email, setEmail] = useState('')
    const [postcode, setPostcode] = useState('')
    const [prefecture, setPrefecture] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [phone, setPhone] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [last4, setLast4] = useState('')
    const [orderId, setOrderId] = useState('')

    return (
        <MyContext.Consumer>
            {context => (
                <App>
                    {confirmed ? (<Confirmation
                        orderId={orderId || 'abc12345678'}
                        last4={last4 || '1234'}
                        kanjiName={kanjiName}
                        postcode={postcode}
                        addressLine1={addressLine1}
                        addressLine2={addressLine2}
                        phone={phone}
                        totalCost={context.totalCost}
                     />) : (
                    <StyledWrapper>
                        <LeftSide>
                            <CheckoutDivider
                                icon={shoppingCartIcon}
                                title={shoppingCart}
                                alt='Shopping Cart'
                                JPTitle='ショッピングカート'
                                background={true}
                            />
                            {context.itemsInBasket ? context.itemsInBasket.map(item => {
                                return (
                                    <CartProduct
                                        key={item.title}
                                        title={item.title}
                                        slug={item.slug}
                                        price={item.price}
                                        flower={item.flower}
                                        type={item.type}
                                        size={item.size}
                                        quantity={item.quantity}
                                        image={item.image}
                                    />)
                            }) : null}
                        </LeftSide>
                        <Elements>
                            <>
                            <LeftSide>
                                <CheckoutDivider
                                    icon={deliveryIcon}
                                    title={delivery}
                                    alt='Delivery'
                                    JPTitle='送付先'
                                    background={true}
                                />
                                <CustomerInformationForm
                                    setKanjiName={setKanjiName}
                                    setFuriganaName={setFuriganaName}
                                    setEmail={setEmail}
                                    setPostcode={setPostcode}
                                    setPrefecture={setPrefecture}
                                    setAddressLine1={setAddressLine1}
                                    setAddressLine2={setAddressLine2}
                                    setPhone={setPhone}
                                />
                            </LeftSide>
                            <LeftSide>
                                <CheckoutDivider
                                    icon={paymentIcon}
                                    title={payment}
                                    alt='Payment'
                                    JPTitle='結済方法'
                                    background={true}
                                />
                                        <CheckoutForm
                                            totalCost={context.totalCost + 1000}
                                            kanjiName={kanjiName}
                                            furiganaName={furiganaName}
                                            email={email}
                                            postcode={postcode}
                                            prefecture={prefecture}
                                            addressLine1={addressLine1}
                                            addressLine2={addressLine2}
                                            phone={phone}
                                            setConfirmed={setConfirmed}
                                            setLast4={setLast4}
                                            setOrderId={setOrderId}
                                        />
                            </LeftSide>
                            </>
                        </Elements>
                        <RightSide>
                            <CheckoutDivider
                                singleTitle='合計'
                                background={true}
                            />
                            <Gokei>
                                <CostContainer>
                                    <h5>商品合計</h5>
                                    <h5>¥{Number(context.totalCost).toLocaleString('jp')}</h5>
                                </CostContainer>
                                <CostContainer>
                                    <span>送料　全国一律</span>
                                    <span>¥1,000</span>
                                </CostContainer>
                                <StyledHr/>
                                <MobileHr />
                                <TotalCostContainer>
                                    <h3>¥{Number(context.totalCost + 1000).toLocaleString('jp')}</h3>
                                </TotalCostContainer>
                                <button onClick={() => context.setItemsInBasket([])}>Empty cart</button>
                                <button onClick={() => setConfirmed(true)}>Force confirmation</button>
                            </Gokei>
                        </RightSide>
                    </StyledWrapper>
                    )}
                </App>
    )}
        </MyContext.Consumer>
    )
}

export default Checkout
