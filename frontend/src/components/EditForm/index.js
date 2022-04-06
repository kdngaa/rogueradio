import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EditForm.css'
import { useHistory, useParams } from "react-router-dom";
import {updateSong} from "../../store/song";

function EditSong() {
    const { songId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [songImg, setSongImg] = useState("")
    const [audioFile, setAudioFile] = useState("")

    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector((state) => state.song)

    const song = songs[+songId]

    if (!sessionUser) {  //if user is not log in, form will not show
        return null;
    }


    



    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = { ...song, userId:sessionUser.id, title, artist, genre, songImg, audioFile }

        await dispatch(updateSong(payload))

        history.push('/') //redirect to home after updated
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
                <button className="uploadBtn" type="Submit">Update Song</button>
            </form>
        </section>
    )


}


export default EditSong;
