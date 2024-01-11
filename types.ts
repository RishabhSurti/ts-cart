export type Rules = {
  applyDiscount: (cart: any) => void
}[]

export type Product = {
  sku: string,
  name: string,
  price: number
}

export type Cart = {
  sku: string,
  name: string,
  price: number,
  quantity: number,
  priceAfterDiscount: number,
  discountApplied: boolean,
  priceBeforeDiscount: number
}[]