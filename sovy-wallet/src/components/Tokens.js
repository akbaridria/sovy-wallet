import { WiredCard } from "wired-elements-react";
import "../App.css"
import Token from "./Token";
const Tokens = ({dataT}) => {
    return (
        <div className="Portofolio">
           <wired-card elevation="1">
            <p>Your Tokens</p>
            <div className="Tokens">
                {
                    dataT.map((val) => {
                        return <Token data={val} />
                    })
                }
            </div>
            
            </wired-card>
        </div>
    )
}

export default Tokens 