import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";


const Header = () => {

  const cartItems = useSelector(store => store.cart.items);

  // console.log(cartItems);
    return (
      <div className="flex justify-between px-5 h-20 items-center bg-black text-white flex-wrap w-full fixed top-0">
        <div className="text-4xl">
          <Link to = {"/"}><p className="font-body text-red-400">ToshEats</p></Link>
        </div>
        <div className="flex font-bold text-lg">
          <ul className="flex gap-3 flex-wrap">
          <li key={100}><Link to={"/"}>Home</Link></li>
          <li key={101}><Link to={"/about"}>About Us</Link></li>
          <li key={102}><Link to={"/contact"}>Contact</Link></li>
          <li key={103}><Link to={"/SignupForm"}>Sign Up</Link></li>
          <li key={104}><Link to={"/Login"}>Login</Link></li>
          <li key={105}><Link to={"/cart"}>Cart -{cartItems.length} items</Link></li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;