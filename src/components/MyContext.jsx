import React, { createContext, useState, useEffect } from 'react'
import createPersistedState from 'use-persisted-state';
import Products from '../mockProducts.json'
import { StripeProvider } from 'react-stripe-elements'

const StripeWrapper = ({ children }) => {
  const [ stripe, setStripe ] = useState(null)

  useEffect(() => {
    // for SSR
    if (typeof window == 'undefined') return

    // for browser
    if (window.Stripe) {
      setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
    } else {
      const stripeScript = document.querySelector('#stripe-js')
      stripeScript.onload = () => {
        setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
      }
    }
  }, []) // <-- passing in an empty array since I only want to run this hook once

  return (
    <StripeProvider stripe={stripe}>
      {children}
    </StripeProvider>
  )
}



const usePersistedState = createPersistedState('itemsInBasket')

const MyContext = createContext()

function MyProvider ({children}) {
  const [itemsInBasket, setItemsInBasket] = usePersistedState([]);

  const handleAddToBasketClick = slug => {
    setItemsInBasket(itemsInBasket => {
      const itemInBasket = itemsInBasket.find(item => item.slug === slug)

      // if item is already in Basket, update the quantity
      if (itemInBasket) {
        return itemsInBasket.map(item => {
          if (item.slug !== slug) return item;
          return { ...itemInBasket, quantity: item.quantity + 1 }
        })
      }

      // otherwise, add new item to Basket
      const item = Products.find(item => item.slug === slug)
      return [...itemsInBasket, { ...item, quantity: 1 }]
    })
  }

  const totalCost = itemsInBasket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
      <MyContext.Provider value={{ itemsInBasket, setItemsInBasket, handleAddToBasketClick, totalCost }}>
          {children}
      </MyContext.Provider>
  )
}

export default MyContext

export { MyProvider, StripeWrapper }
