import React from 'react';
import './watch.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Watch = () => {
    return (
        <div className="watch">
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <video className="video" autoPlay progress controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"/>    
        </div>
    )
}

export default Watch
