import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';
import { getSongs } from '../../store/song.js'
import './Splash.css';

function Splash() {
    const dispatch = useDispatch()


    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector(state => state.song);
    console.log(songs)
    const songInfo = Object.values(songs)

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch, songs])



    return (
        <>
            <img src="RogueRadio.png" alt="image" className='logo' />
            <img src="https://res.cloudinary.com/dv3gxfdon/image/upload/v1649577828/47af824852bb6fb9f31e13d3e76a86be_b3zokp.gif" alt="gif" className='gif' />
            <>
                <input type="text" placeholder="Search.." className="searchBar"></input>
                <h1 className="heading1">This Week's Top Streams</h1>
                <div className='songCard' >
                    {songInfo.map((song, idx) => (
                        <a href={`/songs/${song.id}`} key={idx}>
                            <img src={song.songImg} width='200px' height='200px' className="songImg" />
                            <p className="songText">{`Title: ${song.title}`}</p>
                            <p className="songText"><ReactAudioPlayer
                                src={`${song.audioFile}`}
                                controls
                            /></p>
                        </a>
                    ))}
                </div>


            </>
        </>
    )
}


export default Splash;
