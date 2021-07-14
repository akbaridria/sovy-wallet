import "../App.css"
import React from "react";
import { WiredButton, WiredCard, WiredDialog, WiredLink  } from "wired-elements-react";
import axios from "axios";
const Transaction = ({dataTrans}) => {

    const [openDialog, setOpenDialog] = React.useState(false)
    const [dataTT, setDataTT] = React.useState({})
    
    function closeDialog() {
        console.log("pencetr")
        console.log(openDialog)
        setOpenDialog(false)
    }

    function openDialoge(event, param) {
        const url_transaction = "https://api.covalenthq.com/v1/30/transaction_v2/"+param+"/?key=ckey_4e7ba38c8e50410a92ed0989d8f"
        axios.get(url_transaction).then((response) => {
            setDataTT(response.data.data.items[0])
            console.log(response.data.data.items[0])
        }).catch((e) => {
            console.log(e)
            setDataTT({})
        })
        setOpenDialog(true)
    }

    return (
        <div className="Token">
        <WiredCard elevation="3">
            <div className="InsideToken">
                <div className="Tickers" >
                <p style={{margin:0, padding:0}}>{dataTrans.tx_hash.substring(0,20) + "..."}</p>
                <p style={{margin:0, padding:0, fontSize:12}}>{dataTrans.block_signed_at}</p>
                </div>
                <div className="Tickers" >
                <WiredButton onClick={(e) => {
                    openDialoge(e,dataTrans.tx_hash )
                }} >More</WiredButton>
                </div>
            </div>
        </WiredCard>
        <WiredDialog {...(openDialog ? {open:true} :{open:undefined} )}>
        <div style={{minWidth:500, minHeight:300}}>
            {
                Object.keys(dataTT).length !== 0
                ?
                (
                    <>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div style={{width : 120}}>
                   block-sign-at
               </div>
               <div style={{width : 5}}>
                   :
               </div>
               <div >
                   {dataTT.block_signed_at}
               </div>
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div style={{width : 120}}>
                   block
               </div>
               <div style={{width : 5}}>
                   :
               </div>
               <div >
                   {dataTT.block_height}
               </div>
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div style={{width : 120}}>
                   from-address
               </div>
               <div style={{width : 5}}>
                   :
               </div>
               <div >
                   {dataTT.from_address}
               </div>
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div style={{width : 120}}>
                   to-address
               </div>
               <div style={{width : 5}}>
                   :
               </div>
               <div >
                   {dataTT.to_address}
               </div>
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div style={{width : 120}}>
                   value
               </div>
               <div style={{width : 5}}>
                   :
               </div>
               <div >
                   {Number(parseFloat(dataTT.value).toFixed(2)).toLocaleString()}
               </div>
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div style={{width : 120}}>
                   value in usd
               </div>
               <div style={{width : 5}}>
                   :
               </div>
               <div >
                   {"$ " +Number(dataTT.value_quote.toFixed(5)).toLocaleString()}
               </div>
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div style={{width : 120}}>
                   Gas spent usd
               </div>
               <div style={{width : 5}}>
                   :
               </div>
               <div >
                   {"$ " +Number(dataTT.gas_quote.toFixed(5)).toLocaleString()}
               </div>
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
               <div style={{width : 120}}>
               <WiredLink href={"https://explorer.rsk.co/tx/" + dataTT.tx_hash} target="_blank" >Learn more</WiredLink>
               </div>
               
           </div>
                    </>
                ) : ""
            }
           
        </div>
        <div >
            <WiredButton onClick={closeDialog} >Close</WiredButton>
        </div>
        </WiredDialog>
        </div>
    )
}

export default Transaction;