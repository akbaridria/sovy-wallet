import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import axios from "axios"
import React from 'react';
function App() {

  const [dataToken, setDataToken] = React.useState([])

  async function getData(val){
    const url = "https://api.covalenthq.com/v1/30/address/" + val + "/balances_v2/?key=ckey_4e7ba38c8e50410a92ed0989d8f"
    console.log(url)
    await axios.get(url).then((Response) => {
      setDataToken(Response.data.data.items)
      console.log(Response.data.data.items)
    })
  }
  return (
    <main>
      <Header sendData={getData} />
      <Tabs dataTokens={dataToken} />
    </main>
  );
}

export default App;
