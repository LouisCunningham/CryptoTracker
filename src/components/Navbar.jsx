import React, {useContext} from 'react'
import { CoinContext } from '../context/CoinContext'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event) => {
      switch (event.target.value){
        case "usd": {
          setCurrency({name: "usd", symbol: "$"});
          break;
        }
        case "eur": {
          setCurrency({name: "eur", symbol: "€"});
          break;
        }
        case "inr": {
          setCurrency({name: "inr", symbol: "₹"});
          break;
        }
        default : {
          setCurrency({name: "usd", symbol: "$"});
          break;
        }
      }
    }

  return (
    <>
      <header className="mb-2 shadow">
  <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
    
    <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label className="absolute right-4 top-5 cursor-pointer sm:hidden" for="navbar-open">
      <span className="sr-only">Toggle menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-labelledby="header-navigation" className="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-start">
      
      <h2 className="sr-only" id="header-navigation">Header navigation</h2>
      <ul className="flex flex-col items-center sm:flex-row">
        <Link to={'/'}><li className="font-bold sm:mr-12">Home</li></Link>
        <Link><li className=" sm:mr-12">Features</li></Link>
        <Link><li className=" sm:mr-12">Pricing</li></Link>
        <Link><li className=" sm:mr-12">Blog</li></Link>
      </ul>
      <ul className="mt-4 flex sm:mt-0 nav-right align-middle">
     <select onChange={currencyHandler} className=' px-1 py-2 rounded border-2 border-white bg-transparent text-white cursor-pointer'>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="inr">INR</option>
     </select>
      </ul>
    </nav>
  </div>
</header>
    </>
  )
}

export default Navbar
