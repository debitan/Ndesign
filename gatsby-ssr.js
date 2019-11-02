const React = require('react')
const { MyProvider } = require('./src/components/MyContext')

export const wrapRootElement = ({ element }) => (
  <MyProvider>{element}</MyProvider>
)
