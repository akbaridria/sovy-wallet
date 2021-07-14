import { WiredTabs, WiredTab } from 'wired-elements-react';
import "../App.css"
import Portofolio from './Portofolio';
import SovSwap from './SovSwap';
const Tabs = ({dataTokens, datatransactions, dataSwap}) => {
    return (
        <>
            <WiredTabs selected="Portofolio">
            <WiredTab name="Portofolio">
            <Portofolio dataTok={dataTokens} dataTransact={datatransactions} />
            </WiredTab>
            <wired-tab name="Sov-Swap">
                <SovSwap dataSwap={dataSwap} />
            </wired-tab>
            </WiredTabs>
        </>
    )
}

export default Tabs;