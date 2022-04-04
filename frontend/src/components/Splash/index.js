import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';
import { useEffect } from "react/cjs/react.production.min";
import {getSongs} from '../../store/songs.js'

function Splash() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])

    const songs = useSelector(state => state.song);
    const songInfo = Object.values(songs)

    return (
        <div className='splash'>
            <h2> Welcome to Rogue Radio</h2>
            <div>

            <ReactAudioPlayer
                src="https://res.cloudinary.com/dv3gxfdon/video/upload/v1649088018/yt5s.com_-_keshi_-_beside_you_Audio_128_kbps_q0v6l1.mp3"
                autoPlay
                controls

            />
            </div>
        </div>
    )
}


export default Splash;
