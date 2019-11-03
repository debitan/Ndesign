import React from 'react'
import { MyProvider, StripeWrapper } from './src/components/MyContext'
export const wrapRootElement = ({ element }) => (
  <MyProvider>
    <StripeWrapper>
      {element}
    </StripeWrapper>
  </MyProvider>
)
