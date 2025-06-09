import "./index.css"
import Button from './Button'

function App(){
  return (
    <div>
      <div>
        <Button primary>Buy now!</Button>
      </div>
      <div>
        <Button>Click Here!</Button>
      </div>
      <div>
        <Button>Add to Cart</Button>
      </div>
      <div>
        <Button>Cancel Order</Button>
      </div>
      <div>
        <Button>Check Coupons</Button>
      </div>
    </div>
  )
}

export default App;
