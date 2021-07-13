import { WiredCard } from "wired-elements-react";
import "../App.css"
const Balance = () => {
    return (
        <div className="Balance">
           <wired-card elevation="1">
            <p style={{margin:0, padding:0}}>Total Balance</p>
            <p style={{fontSize:24, margin:0, padding:0, fontWeight:"bold"}}>$ 100,000.00</p>
            </wired-card>
        </div>
    )
}

export default Balance 