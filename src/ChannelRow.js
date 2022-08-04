import React from 'react';
import "./ChannelRow.css";
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({image , Channel , verified , subs , noOfVideos , Description}) {
    return (
        <div className="Channel__Row">
            <Avatar className="ChannelRow__avatar"
                alt={Channel}
                src={image}>
            </Avatar>
            <div className="ChannelRow__text">
                <h4>{Channel} {verified && <VerifiedIcon />} </h4>                
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{Description}</p>
            </div>
        </div>
    )
}

export default ChannelRow