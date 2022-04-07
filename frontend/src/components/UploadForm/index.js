import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './UploadForm.css'
import { postSong } from "../../store/song";
import { useHistory } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";

function Upload() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [songImg, setSongImg] = useState("")
    const [audioFile, setAudioFile] = useState(null)

    const [errors, setErrors] = useState([])

    const sessionUser = useSelector((state) => state.session.user)



    useEffect(() => {
        const errors = []

        if (!title) errors.push("Please provide song title")
        if (!artist) errors.push("Please provide artist's name")
        if (!genre) errors.push("Please provide song's genre")
        if (!audioFile) errors.push("Please include a valid audio link")
        if (songImg.length < 6) errors.push("Please include a valid image link")

        setErrors(errors)
    }, [title, artist, genre, audioFile, songImg])


    // if (!sessionUser) {  //if user is not log in, form will not show
    //     return null;
    // }


    const handleSubmit = (e) => {
        e.preventDefault()

        const song = { userId: sessionUser.id, title, artist, genre, songImg, audioFile }

        dispatch(postSong(song))

        history.push('/') //redirect to home after added
    }

    return (
        <section>
            <form className="uploadSongForm" onSubmit={handleSubmit}>
                <ul className="errors">
                    {errors.map((error, indx) => (
                        <li key={indx}>
                            {error}
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="fieldText"
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                    className="fieldText"
                />
                <input
                    type="text"
                    placeholder="Artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    required
                    className="fieldText"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={songImg}
                    onChange={(e) => setSongImg(e.target.value)}
                    required
                    className="fieldText"
                />
                <label className="fileHead">Please use Cloudinary for your MP3/MP4 files</label>
                <input
                    type="text"
                    placeholder="MP3/MP4"
                    value={audioFile}
                    onChange={(e) => setAudioFile(e.target.value)}
                    required
                    className="fileBtn"
                />
                <button className="updateBtn" type="Submit" disabled={errors.length > 0}>Post Song</button>
            </form>
        </section>
    )


}


export default Upload;
