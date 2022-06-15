import { getSongById, getSongs } from "../../store/song";
import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import './SingleSongPage.css';
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';
import { removeASong } from "../../store/song";
import { removeAComment, postComment, getCommentById, getComments } from "../../store/comment";
import PostComment from "../PostCommentForm";
import LoginFormModal from '../LoginFormModal';

function OneSong() {
    const { songId } = useParams();
    const song = useSelector((state) => state.song[songId])
    const comments = useSelector((state) => Object.values(state.comment))
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory()
    const [update, setUpdate] = useState(false)

    const state = {update, setUpdate}



    const handleDelete = async () => {
        window.confirm(`Are you sure you want to delete this song?`)
        await dispatch(removeASong(song.id))
        history.push("/")
    }


    useEffect(() => {
        dispatch(getComments(songId))
        // dispatch(getCommentById(songId))
        dispatch(getSongById(songId))
    }, [dispatch, update])

    if (!comments) {
        return null;
    }



    let loggedIn;
    if (sessionUser) {
        if (song) {
            loggedIn = (
                <>
                    <NavLink className="editBtn" to={`/songs/${song.id}/edit`}>
                        <a href="#"><img src='https://res.cloudinary.com/dv3gxfdon/image/upload/v1655267268/edit_3_sliotc.png' /></a>
                    </NavLink>
                    <button className="deleteBtn" id="removeSongBtn" onClick={handleDelete}
                    >
                        <a href="#">  <img src='https://res.cloudinary.com/dv3gxfdon/image/upload/v1655267269/trash-bin_1_jyrmfw.png' /> </a>
                    </button>
                </>
            )
        }
    } else {
        window.alert(`Please Sign Up or Log In to Access`)
        history.push('/')
        // <LoginFormModal />
    }



    return (
        <>
            {song && (<div className="singlePage">
                <div className="allInfo">
                    <img src={song.songImg} width='450px' height='450px' className="songImg1" />
                    <div className="songInformation">
                        <p className="title">{`${song.title}`}</p>
                        <p className="artist">{`${song.artist}`}</p>
                        <p className="genre">{`${song.genre}`}</p>
                    </div>
                </div>
                {sessionUser.id === song.userId && loggedIn}
                <p> <ReactAudioPlayer
                    src={`${song.audioFile}`}
                    controls
                    className="audioPlayer"
                /></p>
                <PostComment song={song} state={state}/>
            </div>)}
            <div className="commentSection">
                <h2 className="commentHead">REVIEWS</h2>
                {comments.map((comment, idx) => (
                    <>
                        <div className="subComment">
                            <p className="commentCreator">{sessionUser.username}:</p>
                            <p key={idx} className="commentContent">{comment.content}</p>
                            <>
                                {sessionUser.id === comment.userId && (
                                    <a><button onClick={(e) => dispatch(removeAComment(comment.id))}>Remove Comment</button></a>
                                )}
                            </>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default OneSong;
