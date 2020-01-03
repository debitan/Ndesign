import React, { createContext, useState, useEffect } from 'react'
import createPersistedState from 'use-persisted-state';
import { StripeProvider } from 'react-stripe-elements'

const StripeWrapper = ({ children }) => {
  const [ stripe, setStripe ] = useState(null)

  useEffect(() => {
    (async () => {
      const obj = await window.Stripe('pk_test_hJ3fbHvbQZFxyrbtjNnBrU4k00A6Mx6jvD')
      setStripe(obj)
    })()
  }, [])

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

  const handleAddToBasketClick = (slug, size, colour, quantity, price, image, title, flower, type, sku) => {

    setItemsInBasket(itemsInBasket => {
      const itemInBasket = itemsInBasket.find(item => item.slug === slug && item.size === size)

      // if item is already in Basket, update the quantity
      if (itemInBasket) {
        return itemsInBasket.map(item => {
          if (item.slug !== slug && item.size !== size) return item;
          return { ...itemInBasket, quantity: item.quantity + quantity }
        })
      }

      // otherwise, add new item to Basket
      return [...itemsInBasket, { slug: slug, size: size, colour: colour, price: price, quantity: quantity, image: image, title: title, flower: flower, type: type, sku: sku }]
    })
  }

  const totalCost = itemsInBasket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const updateQuantity = (slug, size, quantity) => {
    const itemInBasket = itemsInBasket.find(item => item.slug === slug && item.size === size)
    setItemsInBasket(itemsInBasket.map(item => {
      if (item.slug !== slug && item.size !== size) return item;
      return { ...itemInBasket, quantity: quantity }
    }))
  }

  const deleteProduct = (slug, size) => {
    const itemInBasket = itemsInBasket.find(item => item.slug === slug && item.size === size)
    setItemsInBasket(itemsInBasket.filter(item => item !== itemInBasket))
  }

  const quantityOfItemsInBasket = () => {
    return itemsInBasket.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
  }

  return (
      <MyContext.Provider value={{ itemsInBasket, setItemsInBasket, handleAddToBasketClick, totalCost, updateQuantity, deleteProduct, quantityOfItemsInBasket }}>
          {children}
      </MyContext.Provider>
  )
}

export default MyContext

export { MyProvider, StripeWrapper }
