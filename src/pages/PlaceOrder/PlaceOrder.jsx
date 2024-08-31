import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" className="" placeholder='First Name'/>
            <input type="text" className="" placeholder='Last Name'/>
          </div>
          <input type='email' placeholder='Email Address'/>
          <input type="text" className="" placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" className="" placeholder='City'/>
            <input type="text" className="" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" className="" placeholder='Zip code'/>
            <input type="text" className="" placeholder='Country'/>
          </div>
          <input type='text' placeholder='Phone'/>
          </div> 
          <div className="place-order-right">
          <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="">
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            
          </div>
          <button  className="">PROCEED TO PAYMENT</button>
        </div>


          </div>
    </form>
  )
}

export default PlaceOrder