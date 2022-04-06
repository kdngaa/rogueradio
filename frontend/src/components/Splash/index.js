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
            <img src="RogueRadio.png" alt="image" className='logo'/>
            <div className='songCard' >
                {songInfo.map((song, idx) => (
                    // let loggedIn;
                    // if (sessionUser) {
                    //     if (sessionUser.id === song.userId) {
                    //         loggedIn = (<div>
                    //             <button>Edit Song</button>
                    //             <button>Delete Song</button>
                    //         </div>)
                    //     }
                    // }
                    <a href={`/songs/${song.id}`} key={idx}>
                        <img src={song.songImg} width='130px' height='130px' className="songImg" />
                        {/* <p className="songText"><ReactAudioPlayer
                            src={`${song.audioFile}`}
                            // autoPlay
                            controls
                        /></p> */}
                        {/* <p className="songText">{`Title: ${song.title}`}</p>
                        <p className="songText">{`Artist: ${song.artist}`}</p>
                        <p className="songText">{`Genre: ${song.genre}`}</p> */}
                        {/* <p>{`${song.songImg}`}</p> */}
                        {/* {loggedIn} */}
                    </a>
                ))}
            </div>


        </>
    )
}


export default Splash;
