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

    const songs = useSelector(state => state.song);
    console.log(songs)
    const songInfo = Object.values(songs)

    return (
        <>
            <h1> Welcome to Rogue Radio</h1>
            <div className='songCard'>
                {songInfo.map((song, idx) => (
                    <a href={`/songs/${song.id}`} key={idx}>
                        <img src={song.songImg} width='200px' height='200px' />
                        <p className="songText">{`Title: ${song.title}`}</p>
                        <p className="songText">{`Artist: ${song.artist}`}</p>
                        <p className="songText">{`Genre: ${song.genre}`}</p>
                        {/* <p>{`${song.songImg}`}</p> */}
                        <ReactAudioPlayer
                            src={`${song.audioFile}`}
                            autoPlay
                            controls
                        />
                    </a>
                ))}
            </div>


        </>
    )
}


export default Splash;
