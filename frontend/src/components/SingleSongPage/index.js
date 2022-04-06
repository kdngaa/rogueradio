import { getSongs } from "../../store/song";
import React, { useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import './SingleSongPage.css';
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';
import { removeASong } from "../../store/song";

function OneSong() {
    const { songId } = useParams();
    const song = useSelector((state) => state.song[songId])
    // const song = songs[+songId]
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory()


    // useEffect(() => {
    // dispatch(getSongs())
    // }, [dispatch])


    let loggedIn;
    if (sessionUser) {
        if (song) {
            loggedIn = (
                <>
                    <NavLink to={`/songs/${song.id}/edit`}>
                        Edit Song
                    </NavLink>
                    <button onClick={(e) => {
                        dispatch(removeASong(song.id))
                        return history.push('/')
                    }}>
                        Delete Song
                    </button>
                </>
            )
        }
    }



    return (
        <>
            <h1>Song Info</h1>
            {song && (<div className="singlePage">
                <img src={song.songImg} width='200px' height='200px' className="songImg" />
                <ReactAudioPlayer
                    src={`${song.audioFile}`}
                    controls
                />
                <p className="songText">{`Title: ${song.title}`}</p>
                <p className="songText">{`Artist: ${song.artist}`}</p>
                <p className="songText">{`Genre: ${song.genre}`}</p>
                {sessionUser.id === song.userId && loggedIn}
            </div>)}
        </>
    )
}

export default OneSong;
