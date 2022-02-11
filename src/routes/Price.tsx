import { useQuery } from "react-query";
import { fetchCoinHistory2 } from "../api";

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
interface priceData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Price({ coinId }: CoinProps) {
  const { isLoading, data } = useQuery<priceData[]>(["price", coinId], () =>
    fetchCoinHistory2(coinId)
  );
  const yesterDay = data?.slice(0,1).map(data => data);
  const toDay = data?.slice(1,2).map(data => data);
  console.log("hi");
  

  
  
  return (
    <>
  <div>
    {data?.slice(0,1).map(price => price.time_close) }
  </div>
  <div>
    {data?.slice(0,1).map(price => price.close) }
  </div>
  <div>
    {data?.slice(1,2).map(price => price.time_close) }
  </div>
  <div>
    {data?.slice(1,2).map(price => price.close) }
  </div>
  <div>기준일 날짜 : 000 </div>
  <div>가격 : 000 전날대비 ? 하락</div>
  </>
  )
}

export default Price;