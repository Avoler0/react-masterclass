import { useQuery } from "react-query";
import { fetchPriceCoin , fetchCoinHistory } from "../api";


interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface CoinProps{
  coinId: string;
}
interface IpriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
function Price({ coinId }: CoinProps ) {
  // const { isLoading, data } = useQuery<priceData[]>(["price", coinId], () =>
  //   fetchCoinHistory2(coinId)
  // );
  const {isLoading:todayLoading, data:todayPriceData} = useQuery<IpriceData>(["tickers",coinId], () => fetchPriceCoin(coinId),
  {
    refetchInterval: 500000,
  });
  
  console.log(todayPriceData);
  
  return (
    <>
  <div>기준일 날짜 : {todayPriceData?.last_updated.slice(0,10)}  </div>
  <div>가격 : {todayPriceData?.quotes.USD.price.toFixed(3)}</div>
  <div>전날대비 {todayPriceData!.quotes.USD.percent_change_24h.toFixed(1).toString().replace("-", "")}% 하락</div>
  </>
  )
}

export default Price;