import './Navbar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to='/'>
        <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className="" />
            <div className="navbar-search-icon">
                <Link to='/cart'> 
                <img src={assets.basket_icon} alt="" className="" />
                </Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
                
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar