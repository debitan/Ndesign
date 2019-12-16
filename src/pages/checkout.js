import React, { useState } from 'react'
import styled from 'styled-components'
import { Elements } from 'react-stripe-elements'

import App from '../components/App'
import CheckoutForm from '../components/CheckoutForm'
import MyContext from '../components/MyContext'
import CustomerInformation from '../components/CustomerInformation'
// import DeliveryInformation from '../components/DeliveryInformation'
import Confirmation from '../components/Cart/Confirmation'
import StyledHr from '../components/shared/StyledHr'
import MobileHr from '../components/shared/MobileHr'

import CartProduct from '../components/CartProduct'

const StyledWrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    grid-auto-rows: minmax(100px, auto);
    margin: 40px 0 40px 0;


    @media (min-width: 992px) {
        grid-template-columns: 2fr 1fr;
    }
`

const LeftSide = styled('div')`
    grid-column: 1;
    border: 1px solid #979797;
    padding: 15px;
`

const RightSide = styled('div')`
    grid-column: 1;
    border: 1px solid #979797;
    grid-row: 1;
    padding: 15px;
    top: 95px;

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
                            <h3>Shopping Cart</h3>
                            <StyledHr />
                            <MobileHr />
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
                                <h3>Delivery</h3>
                                <StyledHr />
                                <MobileHr />
                                <CustomerInformation
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
                            {/* reinstate this section if customer information is required. For now, Stripe only need shipping information, it will get the customer information from the card details */}
                            {/* <LeftSide>
                                <h3>Delivery</h3>
                                <hr/>
                                <DeliveryInformation />
                            </LeftSide> */}
                            <LeftSide>
                                <h3>Payment</h3>
                                <StyledHr />
                                <MobileHr />
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
                            <h3>合計</h3>
                            <StyledHr />
                            <MobileHr />
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
                        </RightSide>
                    </StyledWrapper>
                    )}
                </App>
    )}
        </MyContext.Consumer>
    )
}

export default Checkout
