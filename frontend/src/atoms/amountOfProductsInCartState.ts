import {atom} from 'recoil'
// import { getCartFromLocalStorage } from '../services/localStorageService'

// const localStorageEffect = key => ({setSelf, onSet}) => {
  
//   const cart = getCartFromLocalStorage()
//   let inCart:number = 0 

//   if (cart) {
//       cart.map((product) => {
//         inCart + product.inCart
//         console.log(inCart)
//       })

//   }

// }

export const amountOfProductsInCartState = atom({
    key: 'amout of products',
    default: 0
})