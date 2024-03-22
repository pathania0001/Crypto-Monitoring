export const settingCoinObjectinUSD = (data, setCoin) => {
  setCoin({
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: data.image.large,
      desc: data.description.en,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      total_volume: data.market_data.total_volume.usd,
      current_price: data.market_data.current_price.usd,
      market_cap: data.market_data.market_cap.usd,
    });
  };
export const settingCoinObjectinINR = (data, setCoin) => {
  setCoin({
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: data.image.large,
      desc: data.description.en,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      total_volume: data.market_data.total_volume.inr,
      current_price: data.market_data.current_price.inr,
      market_cap: data.market_data.market_cap.inr,
    });
  };
  