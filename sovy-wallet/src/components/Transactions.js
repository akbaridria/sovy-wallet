import Transaction from "./Transaction"
import "../App.css"
const Transactions = ({dataTransac}) => {
    return (
        <div className="Portofolio">
           <wired-card elevation="1">
            <p>Your Transactions ({dataTransac.length})</p>
            <div className="Tokens">
                {
                    dataTransac.map((val) => {
                        return <Transaction dataTrans={val} />
                    })
                }
            </div>
            </wired-card>
        </div>
    )
}

export default Transactions 