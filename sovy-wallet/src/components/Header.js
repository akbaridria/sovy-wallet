import { WiredInput, WiredCard, WiredLink, WiredButton } from "wired-elements-react";
import React from "react"
import "../App.css"

const Header = () => {
    return (
            <div className="header">
                <WiredCard elevation="3">
                    <div className="insideHeader">
                        <h3 style={{fontFamily:"inherit", margin:0, padding:0}}>Sovy-Wallet</h3>
                        <p style={{fontFamily:"inherit", margin:0, padding:0, marginBottom:20}}>Powered <WiredLink href="https://www.covalenthq.com/" elevation="2" target="_blank" >@CovalentHQ</WiredLink></p>
                        <WiredInput placeholder="Search here"></WiredInput> <WiredButton >Get Data</WiredButton>
                    </div>
                </WiredCard>
            </div>
    )
}

export default Header