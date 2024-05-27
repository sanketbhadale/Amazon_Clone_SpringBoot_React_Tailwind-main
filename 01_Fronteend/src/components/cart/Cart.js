import { Link } from "react-router-dom";

const Cart = ()=>{

     const path = ['/cart']

     return(
          <div>
               <Link to={'/cart'}>
                    <div>
                    Cart
                    </div>
               </Link>
          </div>
     )
}

export default Cart;