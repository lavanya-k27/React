import Button from '../components/Button'
import { GoBell, GoStar,GoCheck,GoX, GoTriangleRight } from "react-icons/go";

function ButtonPage(){

  const handleClick = () => {
    console.log("Button clicked!");
  }

  const handleMouseOver = () => {
    console.log("Button hovered!");
  }
  return (
    <div>
      <div>

        <Button primary
         className="mb-5"
         onClick={handleClick}>
          <GoBell />
          Buy now!</Button>
      </div>
      <div>
        <Button secondary onMouseOver={handleMouseOver}>
          <GoStar />
          Click Here!</Button>
      </div>
      <div>
        <Button success>
          <GoCheck />
          Add to Cart</Button>
      </div>
      <div>
        <Button danger>
          <GoX />
          Cancel Order</Button>
      </div>
      <div>
        <Button warning>
          <GoTriangleRight />
          Check Coupons</Button>
      </div>
    </div>
  )
}

export default ButtonPage;
