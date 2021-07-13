import { WiredCard } from "wired-elements-react";
import "../App.css"
import Tokens from "./Tokens";
import Transactions from "./Transactions";
import Balance from "./Balance";


const Portofolio = ({dataTok}) => {
    return (
        <div className="portofolio">
            <div className="assets">
                <Tokens dataT={dataTok} />
                <Transactions />
            </div>
        </div>
    )
}

export default Portofolio 