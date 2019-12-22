const React = require('react')
const { MyProvider, StripeWrapper } = require('./src/components/MyContext')

export const wrapRootElement = ({ element }) => (
  <StripeWrapper>
    <MyProvider>
      {element}
    </MyProvider>
  </StripeWrapper>
)
