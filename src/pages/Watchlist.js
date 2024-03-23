import React, { useEffect, useState,useContext } from "react";
import Button from "../components/Common/Button";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";
import { CurrencyContext } from "../components/CurrencyApi";
import { Link } from "react-router-dom";


function Watchlist() {
  const currency = useContext(CurrencyContext).currency
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  console.log("Watchlist",watchlist);
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    if (watchlist) {
      getData();
    }
  },[] );  
 



  // useEffect(() => {window.onbeforeunload = function() {
  //   // Clear specific item
  //   localStorage.removeItem('watchlist');
  
  //   // Or clear all local storage
  //   localStorage.clear();
  // }},[window.onbeforeunload])

  const getData = async () => {
    
    const allCoins = await get100Coins(currency);
    if (allCoins) {
      setCoins(allCoins?.filter((coin) => watchlist?.includes(coin.id)));
      console.log("done");
    }

   
  };

  return (
   
    <div>
      <Header istrue={true} />
      {watchlist ? (
        <TabsComponent coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Link to="/dashboard">
              <Button text="Dashboard" />
            </Link>
          </div>
        </div>
      )}
      
    </div>
   
       
  );
}

export default Watchlist;
