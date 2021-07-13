import Transaction from "./Transaction"
import "../App.css"
const Transactions = () => {
    return (
        <div className="Portofolio">
           <wired-card elevation="1">
            <p>Your Transactions</p>
            <div className="Tokens">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            </div>
            </wired-card>
        </div>
    )
}

export default Transactions 