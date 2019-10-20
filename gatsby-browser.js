import React from 'react'
import { MyProvider } from './src/components/MyContext'
export const wrapRootElement = ({ element }) => (
  <MyProvider>{element}</MyProvider>
)
