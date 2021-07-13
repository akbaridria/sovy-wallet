import { WiredTabs, WiredTab } from 'wired-elements-react';
import "../App.css"
import Portofolio from './Portofolio';

const Tabs = ({dataTokens}) => {
    return (
        <>
            <WiredTabs selected="Portofolio">
            <WiredTab name="Portofolio">
            <Portofolio dataTok={dataTokens} />
            </WiredTab>
            <wired-tab name="Three">
                <h4>Card 3</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </wired-tab>
            </WiredTabs>
        </>
    )
}

export default Tabs;