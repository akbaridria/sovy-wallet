import SwapItem from "./SwapItem"

const SovSwap =({dataSwap})=> {
    
    return (
        <>
        <center><h3>Swap Transaction in Sovryn Dapps</h3></center>
        <div className="tableSwap">
        <table style={{width:800}}>
            <thead>
                <tr>
                    <td style={{fontSize:16, fontWeight:"bold"}}>tx hash</td>
                    <td style={{fontSize:16, fontWeight:"bold"}}>Date</td>
                    <td style={{fontSize:16, fontWeight:"bold"}}>From Token</td>
                    <td style={{fontSize:16, fontWeight:"bold"}}>To Token</td>
                    <td style={{fontSize:16, fontWeight:"bold"}}>Swap Value</td>
                </tr>
            </thead>
            <tbody>
                {
                    dataSwap.map((val) => {
                        return (
                            <tr>
                                <td>{val.tx_hash.substring(0,17) + "..."}</td>
                                <td>{val.date}</td>
                                <td>{val.from_token}</td>
                                <td>{val.to_token}</td>
                                <td>{"$" + Number(val.total_value_usd.toFixed(2)).toLocaleString()}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        </>
    )
}

export default SovSwap