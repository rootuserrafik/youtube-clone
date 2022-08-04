import React from 'react';
import "./VideoRow.css";
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

function VideoRow({ thumbImages , title , channelName , verified , subs, views , timestamp , Description }) {
    return (
        <div className="Video__Row">
            <img className="VideoRow_Thumb" src={thumbImages} alt=""/>
            <div className="VideoRow__Text">
                <h4>{title}</h4>
                <p className="VideoRowText__Update">{channelName} • 
                    <span className="VideoRow__Subs">
                        <span className="VideoRow__NumberOfSubs">{subs}
                        </span> subscribers
                    </span>
                  • {views} • {timestamp}</p>
                <p className="VideoRowText__Description">{Description}</p>
            </div>
        </div>
    )
}

export default VideoRow
