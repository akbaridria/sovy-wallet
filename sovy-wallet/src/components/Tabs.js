import { WiredTabs, WiredTab } from 'wired-elements-react';
import "../App.css"
import Portofolio from './Portofolio';
import SovSwap from './SovSwap';
const Tabs = ({dataTokens, datatransactions}) => {
    return (
        <>
            <WiredTabs selected="Portofolio">
            <WiredTab name="Portofolio">
            <Portofolio dataTok={dataTokens} dataTransact={datatransactions} />
            </WiredTab>
            <wired-tab name="Sov-Swap">
                <SovSwap />
            </wired-tab>
            </WiredTabs>
        </>
    )
}

export default Tabs;