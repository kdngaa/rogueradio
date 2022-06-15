import './PostCommentForm.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../store/comment";
import { useHistory } from 'react-router-dom';



function PostComment({ song }) {
    const dispatch = useDispatch()
    const history = useHistory()
    // const [userId, setUserId] = useState("")
    // const [songId, setSongId] = useState("")
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])

    const sessionUser = useSelector((state) => state.session.user)
    console.log(sessionUser, "=====>")


    useEffect(() => {
        const errors = []

        if (!content) errors.push("Please provide comment")

        setErrors(errors)
    }, [content])


    if (!sessionUser) {
        return null
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const comment = { userId: sessionUser.id, songId: song.id, content }

        await dispatch(postComment(comment))

        history.push(`/songs/${song.id}`)
        setContent("")
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <ul className="errors">
                    {errors.map((error, indx) => (
                        <li key={indx}>
                            {error}
                        </li>
                    ))}
                </ul>
                <textarea
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    placeholder='Type here...'
                    className='mainCommentSection'
                />
                <p>
                <button type="submit" className='commentBtn' disabled={errors.length > 0}>Submit Review</button>
                </p>
            </form>
        </section>
    )
}



export default PostComment;
