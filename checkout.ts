import products from './products.json'
import { Cart, Product, Rules } from './types';

const productMap = products.reduce((acc: { [key: string]: Product }, product) => {
  acc[product.sku] = product
  return acc
}, {})

const usdFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', });

class Checkout {

  cart: Cart;
  totalPrice: number
  pricingRules: { applyDiscount: (cart: any) => void }[]

  constructor(pricingRules: Rules) {
    this.cart = []
    this.totalPrice = 0
    this.pricingRules = pricingRules
  }

  scan(item: string) {
    //* assuming that the item selected is present in products
    const product = this.cart.filter((product) => product.sku === item)[0]
    if (product) {
      product.quantity += 1
    } else {
      this.cart.push({
        sku: productMap[item].sku,
        name: productMap[item].name,
        price: productMap[item].price,
        quantity: 1,
        priceBeforeDiscount: productMap[item].price * 1,
        priceAfterDiscount: productMap[item].price * 1,
        discountApplied: false,
      })
    }
    for (const rule of this.pricingRules) {
      rule.applyDiscount(this.cart)
    }
    this.calculateTotal()
  }

  calculateTotal() {
    let totalPrice = 0
    for (const product of this.cart) {
      totalPrice += product.priceAfterDiscount
    }
    this.totalPrice = totalPrice
  }

  total() {
    console.log('your cart values:')
    console.table([...this.cart]);
    console.log(`your total is ${usdFormatter.format(this.totalPrice)}`)
    return this.totalPrice
  }
}

export default Checkout