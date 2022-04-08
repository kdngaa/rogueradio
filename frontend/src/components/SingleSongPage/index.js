import { getSongs } from "../../store/song";
import React, { useEffect } from "react";
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



    const handleDelete = async () => {
        window.confirm(`Are you sure you want to delete this song?`)
        await dispatch(removeASong(song.id))
        history.push("/")
    }


    useEffect(() => {
        dispatch(postComment())
        dispatch(getComments())
        dispatch(getCommentById(songId))
    }, [dispatch, comments])

    if (!comments) {
        return null;
    }



    let loggedIn;
    if (sessionUser) {
        if (song) {
            loggedIn = (
                <>
                    <NavLink to={`/songs/${song.id}/edit`}>
                        <button className="editBtn">Edit Song</button>
                    </NavLink>
                    <button className="deleteBtn" id="removeSongBtn" onClick={handleDelete}
                    >
                        Delete Song
                    </button>
                </>
            )
        }
    } else {
        history.push('/')
        window.alert(`Please Sign Up or Log In to Access`)
        // <LoginFormModal />
    }



    return (
        <>
            <h1 className="songInfoHeader">Song Info</h1>
            {song && (<div className="singlePage">
                <img src={song.songImg} width='450px' height='450px' className="songImg1" />
                <ReactAudioPlayer
                    src={`${song.audioFile}`}
                    controls
                />
                <p className="songText">{`Title: ${song.title}`}</p>
                <p className="songText">{`Artist: ${song.artist}`}</p>
                <p className="songText">{`Genre: ${song.genre}`}</p>
                <PostComment song={song} />
                {sessionUser.id === song.userId && loggedIn}
            </div>)}
            <div className="commentSection">
                <h2>COMMENTS</h2>
                {comments.map((comment, idx) => (
                    <>
                        <div className="subComment">
                            <p className="commentCreator">{comment.User.username} said:</p>
                            <p key={idx} className="commentContent">{comment.content}</p>
                        </div>
                        <div>
                            {sessionUser.id === comment.userId && (
                                <button className="deleteBtn grow" onClick={(e) => dispatch(removeAComment(comment.id))}>Remove Comment</button>
                            )}
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default OneSong;
