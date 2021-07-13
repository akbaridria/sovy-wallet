import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import axios from "axios"
import React from 'react';
import {WiredSpinner} from "wired-elements-react"
function App() {

  const [dataToken, setDataToken] = React.useState([])
  const [dataTransaction, setDataTransaction]  = React.useState([])
  const [loading, setLoading] = React.useState(false)
  async function getData(val){
    setLoading(true)
    const url = "https://api.covalenthq.com/v1/30/address/" + val + "/balances_v2/?key=ckey_4e7ba38c8e50410a92ed0989d8f"
    const url_transaction = "https://api.covalenthq.com/v1/30/address/"+val+"/transactions_v2/?key=ckey_4e7ba38c8e50410a92ed0989d8f&page-size=9999"
    console.log(url_transaction)
    await axios.get(url_transaction).then((Response) => {
      setDataTransaction(Response.data.data.items)
    }).catch((e) => {
      console.log(e)
      setDataToken([])
      setDataTransaction([])
    })
    await axios.get(url).then((Response) => {
      setDataToken(Response.data.data.items)
    }).catch((e) => {
      console.log(e)
      setDataToken([])
      setDataTransaction([])
    })
    setLoading(false)
  }
  return (
    <main>
      <Header sendData={getData} />
      {
        loading ? (<WiredSpinner id="sp" spinning></WiredSpinner>) : ""
      }
      {
        dataToken.length !== 0 && !loading ? (<Tabs dataTokens={dataToken} datatransactions={dataTransaction} />) : ""
      }
      
    </main>
  );
}

export default App;
