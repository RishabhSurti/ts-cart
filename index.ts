import Checkout from "./checkout";
import { pricingRules } from "./rules";


const main = () => {
  const co = new Checkout(pricingRules);

  //* teatcase 1
  co.scan('atv')
  co.scan('atv')
  co.scan('atv')
  co.scan('vga')

  //* teatcase 2
  // co.scan('atv')
  // co.scan('ipd')
  // co.scan('ipd')
  // co.scan('atv')
  // co.scan('ipd')
  // co.scan('ipd')
  // co.scan('ipd')

  co.total()
}

main()