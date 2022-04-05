import React, { useState } from "react";
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

    const sessionUser = useSelector((state) => state.session.user)

    if (!sessionUser) {  //if user is not log in, form will not show
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const song = { title, artist, genre, songImg, audioFile }

        dispatch(postSong(song))

        history.push('/') //redirect to home after added
    }

    return (
        <section>
            <form className="uploadSongForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Song Image"
                    value={songImg}
                    onChange={(e) => setSongImg(e.target.value)}
                    required
                />
                {/* <label>Audio File</label>
                <input
                    type="file"
                    placeholder="Upload File"
                    value={audioFile}
                    onChange={(e) => setAudioFile(e.target.files)}
                    required
                /> */}
                <button className="uploadFile" type="Submit">Post Song</button>
            </form>
        </section>
    )


}


export default Upload;
