import React, { createContext, useState, useEffect } from 'react'
import createPersistedState from 'use-persisted-state';
import { StripeProvider } from 'react-stripe-elements'

const StripeWrapper = ({ children }) => {
  const [ stripe, setStripe ] = useState(null)

  useEffect(() => {
    (async () => {
      const obj = await window.Stripe(process.env.STRIPE_PUBLIC_KEY)
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


  // TODO - need to update this function to be able to handle the new arguments of size, colour, quantity and message. However, this is reliant on working out how to have multiple variants of a product. The slug works fine for a single variant, but there is going to have to be a sku for each variety. Also need to think about the message. It probably isn't going to work to update the quantity if the item exists in the basket as now because the message would just be overwritten. So I need to create a new item in the basket for each click and store the message along with that object. I would then probably need a reducer function to show the total number of each type of item on the checkout page, or I want to think about how to display each item with its own message. One solution for all of this is actually to move the message box to the checkout page so there is just one message per order rather than one per added item(s), this would simplify the implementation greatly.
  const handleAddToBasketClick = (slug, size, colour, number, price, image) => {

    setItemsInBasket(itemsInBasket => {
      const itemInBasket = itemsInBasket.find(item => item.slug === slug && item.size === size)

      // if item is already in Basket, update the quantity
      if (itemInBasket) {
        return itemsInBasket.map(item => {
          if (item.slug !== slug && item.size !== size) return item;
          return { ...itemInBasket, quantity: item.quantity + number }
        })
      }

      // otherwise, add new item to Basket
      return [...itemsInBasket, { slug: slug, size: size, colour: colour, price: price, quantity: number, image: image }]
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
