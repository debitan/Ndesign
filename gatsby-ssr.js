const React = require('react')
const { MyProvider, StripeWrapper } = require('./src/components/MyContext')

export const wrapRootElement = ({ element }) => (
  <MyProvider>
    <StripeWrapper>
      {element}
    </StripeWrapper>
  </MyProvider>
)
