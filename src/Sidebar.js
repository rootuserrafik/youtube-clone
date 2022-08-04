import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterkIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected SidebarIcon={HomeIcon} title="Home"/>
            <SidebarRow SidebarIcon={WhatshotIcon} title="Trending"/>
            <SidebarRow SidebarIcon={SubscriptionsIcon} title="Subscriptions"/>
       
            <hr/>
       
            <SidebarRow SidebarIcon={VideoLibraryIcon} title="Library"/>
            <SidebarRow SidebarIcon={HistoryIcon} title="History"/>
       
            <hr/>
            <SidebarRow SidebarIcon={OndemandVideoIcon} title="Watch Later"/>
            <SidebarRow SidebarIcon={WatchLaterkIcon} title="Watch Later"/>
            <SidebarRow SidebarIcon={ThumbUpAltOutlinedIcon} title="Liked"/>
            <SidebarRow SidebarIcon={ExpandMoreOutlinedIcon} title="Show More"/>

        </div>
    )
}

export default Sidebar
