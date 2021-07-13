import { WiredImage } from "wired-elements-react"
import Logo from "../assets/img/sovryn.png"
import "../App.css"

const Token = ({data}) => {
    return (
        <div className="Token">
        <wired-card elevation="3">
            <div className="InsideToken">
                <div className="ImageLogo" >
                <WiredImage src={Logo}></WiredImage>
                <div className="Tickers" style={{marginRight:5, marginLeft :5}} >
                <p style={{margin:0, padding:0, fontSize:12}}>{data.contract_name}</p>
                <p style={{margin:0, padding:0, fontSize:10}}>{data.contract_ticker_symbol}</p>
                </div>
                </div>
                
                
                <div className="Tickers" >
                <p style={{margin:0, padding:0, fontSize:14}}>{Number((data.balance/Math.pow(10,18)).toFixed(2)).toLocaleString()}</p>
                </div>
            </div>
        </wired-card>
        </div>
    )
}

export default Token