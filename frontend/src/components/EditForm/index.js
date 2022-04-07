import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EditForm.css'
import { useHistory, useParams } from "react-router-dom";
import { updateSong } from "../../store/song";

function EditSong({ song }) {
    const { songId } = useParams();
    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector((state) => state.song)
    song = songs[+songId]
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState(song.title)
    const [artist, setArtist] = useState(song.artist)
    const [genre, setGenre] = useState(song.genre)
    const [songImg, setSongImg] = useState(song.songImg)
    const [audioFile, setAudioFile] = useState(song.audioFile)
    const [errors, setErrors] = useState([])




    useEffect(() => {
        const errors = []

        if (!title) errors.push("Please provide song title")
        if (!artist) errors.push("Please provide artist's name")
        if (!genre) errors.push("Please provide song's genre")
        if (!audioFile) errors.push("Please include a valid audio link")
        if (songImg.length < 6) errors.push("Please include a valid image link")

        setErrors(errors)
    }, [title, artist, genre, audioFile, songImg])




    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = { ...song, userId: sessionUser.id, title, artist, genre, songImg, audioFile }

        await dispatch(updateSong(payload))

        history.push('/') //redirect to home after updated
    }


    if (!sessionUser) {  //if user is not log in, form will not show
        return null;
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
                <button className="uploadBtn" type="Submit" disabled={errors.length > 0}>Update Song</button>
            </form>
        </section>
    )


}


export default EditSong;
