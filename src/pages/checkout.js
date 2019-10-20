import React from 'react'
import styled from 'styled-components'
import { Elements, StripeProvider } from 'react-stripe-elements'

import App from '../components/App'
import CheckoutForm from '../components/CheckoutForm'
import MyContext from '../components/MyContext'

const StyledWrapper = styled('div')`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 15px;
    grid-auto-rows: minmax(100px, auto);
    margin: 40px 0 40px 0;
`

const LeftSide = styled('div')`
    grid-column: 1;
    border: 1px solid #979797;
    padding: 15px;
`

const RightSide = styled('div')`
    grid-column: 2;
    /* grid-area: 1 / 2 / 1 / 2; */
    border: 1px solid #979797;
    grid-row: 1;
    position: sticky;
    padding: 15px;
    top: 95px;
    /* height: 100vh; */
`

function Checkout() {
    return (
        <MyContext.Consumer>
            {({ totalCost }) => (
                <App>
                    <StyledWrapper>
                        <LeftSide>
                            <h3>Shopping Cart</h3>
                            <StripeProvider apiKey="pk_test_hJ3fbHvbQZFxyrbtjNnBrU4k00A6Mx6jvD">
                                <Elements>
                                    <CheckoutForm />
                                </Elements>
                            </StripeProvider>
                        </LeftSide>
                        <LeftSide>
                            <h3>Customer Information</h3>
                            <StripeProvider apiKey="pk_test_hJ3fbHvbQZFxyrbtjNnBrU4k00A6Mx6jvD">
                                <Elements>
                                    <CheckoutForm />
                                </Elements>
                            </StripeProvider>
                        </LeftSide>
                        <LeftSide>
                            <h3>Delivery</h3>
                            <StripeProvider apiKey="pk_test_hJ3fbHvbQZFxyrbtjNnBrU4k00A6Mx6jvD">
                                <Elements>
                                    <CheckoutForm />
                                </Elements>
                            </StripeProvider>
                        </LeftSide>
                        <LeftSide>
                            <h3>Payment</h3>
                            <StripeProvider apiKey="pk_test_hJ3fbHvbQZFxyrbtjNnBrU4k00A6Mx6jvD">
                                <Elements>
                                    <CheckoutForm />
                                </Elements>
                            </StripeProvider>
                        </LeftSide>
                        <RightSide>
                            <h3>合計　¥{totalCost}</h3>
                        </RightSide>
                    </StyledWrapper>
                </App>
    )}
        </MyContext.Consumer>
    )
}

export default Checkout
