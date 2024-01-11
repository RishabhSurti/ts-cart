import { Cart } from "./types";


export const pricingRules = [
  {
    applyDiscount: (
      cart: Cart
    ) => {
      const product = cart.filter((product) => product.sku === 'atv')[0]
      if (!product) return
      if (product.quantity >= 3) {
        const discountedQuantity = Math.floor(product.quantity / 3) * 2
        const remainingQuantity = product.quantity % 3
        const totalQuantity = discountedQuantity + remainingQuantity
        product.priceAfterDiscount = totalQuantity * product.price
        product.discountApplied = true
      } else {
        product.priceAfterDiscount = product.quantity * product.price
        product.discountApplied = false
      }
      product.priceBeforeDiscount = product.quantity * product.price
      return
    }
  },
  {
    applyDiscount: (
      cart: Cart
    ) => {
      const product = cart.filter((product) => product.sku === 'ipd')[0]
      if (!product) return
      if (product.quantity >= 4) {
        product.priceAfterDiscount = product.quantity * 499.99
        product.discountApplied = true
      } else {
        product.priceAfterDiscount = product.quantity * product.price
        product.discountApplied = false
      }
      product.priceBeforeDiscount = product.quantity * product.price
      return
    }
  }
]