import React from 'React'
import styled from 'styled-components'

// import items from '../api'
import SEO from '../components/SEO'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

const StyledContainer = styled(Container)`
  align-content: center;
`

function App ({ children }) {
//     const [itemsInCart, setItemsInCart] = useState([]);

//   const handleAddToCartClick = id => {
//     setItemsInCart(itemsInCart => {
//       const itemInCart = itemsInCart.find(item => item.id === id)

//       // if item is already in cart, update the quantity
//       if (itemInCart) {
//         return itemsInCart.map(item => {
//           if (item.id !== id) return item;
//           return { ...itemInCart, quantity: item.quantity + 1 }
//         })
//       }

//       // otherwise, add new item to cart
//       const item = items.find(item => item.id === id)
//       return [...itemsInCart, { ...item, quantity: 1 }]
//     })
//   }

//   const totalCost = itemsInCart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   )

  return (
      <>
        <NavBar />
        <SEO title="±Ndesign"/>
        <StyledContainer>
          {children}
        </StyledContainer>
        <Footer />
      </>
  )
}

export default App
