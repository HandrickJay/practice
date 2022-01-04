

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  const [usd, setUsd] = useState(1);
  const [buy, setBuys] = useState(1);
  const onChange = (event) => {
    setUsd(event.target.value);
    setBuys(1);
  }
  const handleInput = (event) => {
    setBuys(event.target.value)
  }
  return (
    <div>
     <h1>The Coins!({coins.length})</h1>
     {loading ? <strong>Loading...</strong> : null}
     <select onChange={onChange}>
       {coins.map((coin) => <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</option>)}
     </select>
     <input placeholder="buy" value={buy} onChange={handleInput}>
      
     </input>
     <button type="submit">Transfer</button>
     <hr />
     
     <p>Total : {buy / usd} </p>
    </div>
  );
}

export default App;
