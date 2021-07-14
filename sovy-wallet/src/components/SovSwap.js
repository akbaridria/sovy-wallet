import SwapItem from "./SwapItem"

const SovSwap =()=> {
    return (
        <>
        <p>Swap Transaction in Sovryn Dapps</p>
        <div className="tableSwap">
        <table>
            <thead>
                <tr>
                    <td>tx hash</td>
                    <td>Date</td>
                    <td>Address</td>
                    <td>From Token</td>
                    <td>To Token</td>
                    <td>Swap Value</td>
                </tr>
            </thead>
        </table>
        </div>
        </>
    )
}

export default SovSwap