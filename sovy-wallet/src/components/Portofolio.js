import { WiredCard } from "wired-elements-react";
import "../App.css"
import Tokens from "./Tokens";
import Transactions from "./Transactions";
import Balance from "./Balance";


const Portofolio = ({dataTok, dataTransact}) => {
    return (
        <div className="portofolio">
            <div className="assets">
                <Tokens dataT={dataTok} />
                <Transactions dataTransac={dataTransact} />
            </div>
        </div>
    )
}

export default Portofolio 