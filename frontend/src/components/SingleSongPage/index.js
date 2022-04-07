import { getSongs } from "../../store/song";
import React, { useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import './SingleSongPage.css';
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';
import { removeASong } from "../../store/song";
import { removeAComment, postComment, getCommentById, getComments } from "../../store/comment";
import PostComment from "../PostCommentForm";


function OneSong() {
    const { songId } = useParams();
    const song = useSelector((state) => state.song[songId])
    const comments = useSelector((state) => Object.values(state.comment))
    // console.log(comments, "==================================>")
    // const song = songs[+songId]
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory()
    // const songInfo = Object.values(song)

    //get the comment of that song by using the ID
    // const commentOfOneSong = comments.find(comment => {
    //     if (comment.songId === parseInt(songId)) {
    //         return { comment }
    //     }
    // })




    useEffect(() => {
        dispatch(postComment())
        dispatch(getComments())
        dispatch(getCommentById(songId))
    }, [dispatch])

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
                <img src={song.songImg} width='450px' height='450px' className="songImg" />
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
            <div>
                <h2>COMMENTS</h2>
                {comments.map((comment, idx) => (

                    <>
                        <p className="commentSection">{comment.User.username}</p>
                        <p key={idx} className="commentSection">{comment.content}</p>
                        <button className="deleteBtn grow" onClick={(e) => dispatch(removeAComment(comment.id))}>Delete Comment</button>
                    </>
                ))}
            </div>
        </>
    )
}

export default OneSong;
