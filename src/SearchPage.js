import React from 'react';
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneIcon from '@material-ui/icons/Tune';


function SearchPage() {
    return (
        <div className="Search__Page">
            <div className="searchPage__Filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            
            <ChannelRow
                image ="https://yt3.ggpht.com/a/AATXAJzxxCAjbTp4REiYb2YSOeIODVGlEBF6ngglse3k=s48-c-k-c0xffffffff-no-nd-rj"
                Channel = "Creative Programmer"
                verified
                subs = "659K"
                noOfVideos = {382}
                Description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium illo quibusdam corrupti?"
            />

            <hr/>

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/GJUUPexbpeY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCr5aJDSOuikVzk42cyrtHVNMkCSA"
                title = "🔴 Top UI/UX Design Trends (2020)"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "17K views"
                timestamp = "Streamed 1 day ago"
                Description = "FREE JavaScript Training ..."
            />

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/RPbynQsdl24/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCiQS5Wx3yfs8A4mlwZWSVPAOOZNA"
                title = "Why Stackoverflow Sucks (A Rant on Elitism in Coding)"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "8.2K views"
                timestamp = "1 day ago"
                Description = "There's a big problem in programming communities. A lot of beginners quit coding because some people in communities like ..."
            />

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/B-kxUMHBxNo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCh2GKbv3Kht31PR5CSo0EXuXhxkg"
                title = "🔴  Build a Facebook Clone with REACT JS for Beginners!"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "56K views"
                timestamp = "2 day ago"
                Description = "FREE JavaScript Training ..."
            />

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/GJUUPexbpeY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCr5aJDSOuikVzk42cyrtHVNMkCSA"
                title = "🔴 Top UI/UX Design Trends (2020)"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "17K views"
                timestamp = "Streamed 1 day ago"
                Description = "FREE JavaScript Training ..."
            />

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/RPbynQsdl24/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCiQS5Wx3yfs8A4mlwZWSVPAOOZNA"
                title = "Why Stackoverflow Sucks (A Rant on Elitism in Coding)"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "8.2K views"
                timestamp = "1 day ago"
                Description = "There's a big problem in programming communities. A lot of beginners quit coding because some people in communities like ..."
            />

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/B-kxUMHBxNo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCh2GKbv3Kht31PR5CSo0EXuXhxkg"
                title = "🔴  Build a Facebook Clone with REACT JS for Beginners!"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "56K views"
                timestamp = "2 day ago"
                Description = "FREE JavaScript Training ..."
            />

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/GJUUPexbpeY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCr5aJDSOuikVzk42cyrtHVNMkCSA"
                title = "🔴 Top UI/UX Design Trends (2020)"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "17K views"
                timestamp = "Streamed 1 day ago"
                Description = "FREE JavaScript Training ..."
            />

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/RPbynQsdl24/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCiQS5Wx3yfs8A4mlwZWSVPAOOZNA"
                title = "Why Stackoverflow Sucks (A Rant on Elitism in Coding)"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "8.2K views"
                timestamp = "1 day ago"
                Description = "There's a big problem in programming communities. A lot of beginners quit coding because some people in communities like ..."
            />

            <VideoRow 
                thumbImages = "https://i.ytimg.com/vi/B-kxUMHBxNo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCh2GKbv3Kht31PR5CSo0EXuXhxkg"
                title = "🔴  Build a Facebook Clone with REACT JS for Beginners!"
                channelName ="Clever Programmer"
                verified
                subs = "659K"
                views = "56K views"
                timestamp = "2 day ago"
                Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad expedita quasi mollitia, illo quisquam cupiditate explicabo itaque voluptate quam optio repudiandae! Quisquam rerum ipsa voluptate id quod. Perspiciatis, dolor distinctio quibusdam ut error ipsa, voluptates fuga vel unde..."
            />
        
        </div>
    )
}

export default SearchPage
