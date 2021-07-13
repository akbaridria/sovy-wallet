import "../App.css"
import React from "react";
import { WiredButton, WiredCard, WiredDialog } from "wired-elements-react";
const Transaction = () => {

    const [openDialog, setOpenDialog] = React.useState(false)
    
    
    function closeDialog() {
        console.log("pencetr")
        console.log(openDialog)
        setOpenDialog(false)
    }

    function openDialoge() {
        console.log("pencetr")
        console.log(openDialog)
        setOpenDialog(true)
    }

    return (
        <div className="Token">
        <WiredCard elevation="3">
            <div className="InsideToken">
                <div className="Tickers" >
                <p style={{margin:0, padding:0}}>0x87123u1823</p>
                <p style={{margin:0, padding:0, fontSize:12}}>2021-04-03</p>
                </div>
                <div className="Tickers" >
                <WiredButton onClick={openDialoge} >More</WiredButton>
                </div>
            </div>
        </WiredCard>
        <WiredDialog {...(openDialog ? {open:true} :{open:undefined} )}>
        <p>
            {openDialog ? "oke gan" : "enggak gan"}
        </p>
        <div >
            <WiredButton onClick={closeDialog} >Close dialog</WiredButton>
        </div>
        </WiredDialog>
        </div>
    )
}

export default Transaction;