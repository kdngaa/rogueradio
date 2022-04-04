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
                        <p>{`Title: ${song.title}`}</p>
                        <p>{`Artist: ${song.artist}`}</p>
                        <p>{`Genre: ${song.genre}`}</p>
                        {/* <p>{`${song.songImg}`}</p> */}
                    </a>
                ))}
            </div>

            <ReactAudioPlayer
                src="https://res.cloudinary.com/dv3gxfdon/video/upload/v1649088018/yt5s.com_-_keshi_-_beside_you_Audio_128_kbps_q0v6l1.mp3"
                autoPlay
                controls

            />

        </>
    )
}


export default Splash;
