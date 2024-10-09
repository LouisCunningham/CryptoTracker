import React, { useContext, useState,useEffect } from "react";
import '../pages/Home/home.css';
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const CTA = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event)=>{
      setInput(event.target.value);
      if(event.target.value === ""){
        setDisplayCoin(allCoin);
      }
  }

  const searchHandler = async (event)=>{
    event.preventDefault();
  const coins =  await allCoin.filter((item)=>{
return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }

  useEffect(()=>{
    setDisplayCoin(allCoin);
  },[allCoin])

  return (
    <>
      <section className="bg-blue-40 text-blue-800">
        
          
           
            <div className="home text-white">
              <div className="hero">
                <h1 >
                  Largest <br /> Crypto Marketplace
                </h1>
                <p className=" w-3/4 leading-relaxed">
                  Welcome to the worlds largest cryptocurrency marketplace. Sign
                  up to explore more about crypto.
                </p>
                <div className="mx-auto mt-5 w-screen max-w-screen-sm py-10 leading-6">
                  <form onSubmit={searchHandler} className="relative mx-auto flex w-full max-w-2xl items-center justify-center rounded-md border shadow-lg">
                    <svg
                      className="absolute left-2 block h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" className=""></circle>
                      <line
                        x1="21"
                        y1="21"
                        x2="16.65"
                        y2="16.65"
                        className=""
                      ></line>
                    </svg>
                    <input
                      onChange={inputHandler}
                      list="coinlist"
                      value={input}
                      type="name"
                      name="search"
                      className="h-14 w-full rounded-md text-gray-500 py-4 pr-40 pl-12 outline-none focus:ring-2"
                      placeholder="Search Crypto..."
                      required
                    />


                    <datalist id="coinlist">
                      {allCoin.map((item,index)=>(<option key={index} value={item.name}></option>))}
                    </datalist>


                    <button
                      type="submit"
                      className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>

            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   <div className="crypto-table">
    <div className="table-layout text-white">
      <p>#</p>
      <p>Coins</p>
      <p>Price</p>
      <p style={{textAlign:"center"}}>24H Change</p>
      <p className="market-cap">Market Cap</p>
    </div>
    {
      displayCoin.slice(0,10).map((item,index)=>(
        <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
          <p className="text-gray-400">{item.market_cap_rank}</p>
          <div>
            <img src={item.image} alt="coin logo" />
            <p className="leading-normal text-white text-pretty">{item.name + "-" + item.symbol}</p>
          </div>
          <p className="leading-normal text-white text-pretty">{currency.symbol} {item.current_price.toLocaleString()}</p>
          
            <p className={item.price_change_percentage_24h>0?"text-green-500":"text-red-500"}>
            {Math.floor(item.price_change_percentage_24h*100)/100}</p>
          <p className="leading-normal text-white text-pretty market-cap">{currency.symbol} {item.market_cap.toLocaleString()}</p>
        </Link>
      ))
    }
   </div>
    
</div>



          
          

          
        
      </section>
    </>
  );
};

export default CTA;
