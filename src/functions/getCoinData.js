import axios from "axios";

export const getCoinData = (id, currency,setError) => {
  const coin = axios
  .get(`https://api.coingecko.com/api/v3/coins/${id}?vs_currencies=${currency}`)
    
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return coin;
};
