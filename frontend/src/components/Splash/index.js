import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';
import { getSongs } from '../../store/song.js'
// import { NavLink, Route, useParams } from 'react-router-dom';
import './Splash.css'

function Splash() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])

    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector(state => state.song);
    console.log(songs)
    const songInfo = Object.values(songs)


    return (
        <>
            <img src="RogueRadio.png" alt="image" className='logo' />
            <>
                <div className='songCard' >
                    {songInfo.map((song, idx) => (
                        <a href={`/songs/${song.id}`} key={idx}>
                            <img src={song.songImg} width='200px' height='200px' className="songImg" />
                            <p className="songText">{`Title: ${song.title}`}</p>
                            <p className="songText"><ReactAudioPlayer
                                src={`${song.audioFile}`}
                                controls
                            /></p>
                            {/* <p className="songText">{`Artist: ${song.artist}`}</p>
                            <p className="songText">{`Genre: ${song.genre}`}</p> */}
                        </a>
                    ))}
                </div>

            </>
        </>
    )
}


export default Splash;
