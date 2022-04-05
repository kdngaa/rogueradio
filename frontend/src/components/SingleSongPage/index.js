import { getSongs } from "../../store/song";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './SingleSongPage.css';
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';


function OneSong() {
    const { songId } = useParams();
    const songs = useSelector((state) => state.song)
    const song = songs[+songId]
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])


    let loggedIn;
    if (sessionUser) {

        loggedIn = (
            <>
                <button>
                    Edit Song
                </button>
                <button>
                    Delete Song
                </button>
            </>
        )

    }



    return (
        <>
            {song && (<div>
                <h1>Song Info</h1>
                <img src={song.songImg} width='200px' height='200px' />
                <p className="songText">{`Title: ${song.title}`}</p>
                <p className="songText">{`Artist: ${song.artist}`}</p>
                <p className="songText">{`Genre: ${song.genre}`}</p>
                <ReactAudioPlayer
                    src={`${song.audioFile}`}
                    controls
                />
                {sessionUser.id === song.userId && loggedIn}
            </div>)}
        </>
    )
}

export default OneSong;
