
import React,{useState,createContext} from "react";




export const CurrencyContext = createContext(null);

export const CurrencyProvider =(props) =>{
    const [currency,setCurrency] = useState(()=>{
      
        const curr = (localStorage?.getItem('currency'));
        if(curr)
        return curr
      else return "USD"
  
      });
     
      const settingCurrency = (value) =>{ 
    setCurrency(
        ()=>{
         localStorage?.clear();
         window.localStorage.setItem('currency',(value));
         return (value);
        }
     )
    }


    return(

           <CurrencyContext.Provider value={{currency,settingCurrency}}>
            {props.children}
           </CurrencyContext.Provider>

         );
        };


