import './PostCommentForm.css'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../store/comment";
import { useHistory } from 'react-router-dom';


function PostComment({ song }) {
    const dispatch = useDispatch()
    const history = useHistory()
    // const [userId, setUserId] = useState("")
    // const [songId, setSongId] = useState("")
    const [content, setContent] = useState("")

    const sessionUser = useSelector((state) => state.session.user)

    if (!sessionUser) {
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const comment = { userId: sessionUser, songId: song.id, content }

        dispatch(postComment(comment))

        history.push(`/songs/${song.id}`)
        setContent("")
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    placeholder='Comment here...'
                />
                <button type="submit" className='commentBtn'>Submit Comment</button>

            </form>
        </section>
    )
}



export default PostComment;
