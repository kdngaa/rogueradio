import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './UploadForm.css'
import { postSong } from "../../store/song";
import { useHistory } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";

function UploadForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [songImg, setSongImg] = useState("")
    const [audioFile, setAudioFile] = useState(null)
    const [errorVisible, setErrorVisible] = useState(false)
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

        setErrorVisible(true)

        const song = { userId: sessionUser.id, title, artist, genre, songImg, audioFile }
        if (errors.length === 0) {
            dispatch(postSong(song))

            history.push('/') //redirect to home after added
        }
        setErrorVisible([])
    }

    return (
        <section>
            <form className="uploadSongForm solid" onSubmit={handleSubmit}>
                {errorVisible && (<ul>
                    {errors.map((error, indx) => (
                        <li key={indx} className="errors">
                            {error}
                        </li>
                    ))}
                </ul>)}
                <h1 className="signUpText">Upload Song</h1>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='uploadBox'
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className='uploadBox'
                />
                <input
                    type="text"
                    placeholder="Artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    className='uploadBox'
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={songImg}
                    onChange={(e) => setSongImg(e.target.value)}
                    className='uploadBox'
                />
                <label className="fileHead">Please use Cloudinary for your MP3/MP4 files</label>
                <input
                    type="text"
                    placeholder="MP3/MP4"
                    value={audioFile}
                    onChange={(e) => setAudioFile(e.target.value)}
                    className='uploadBox'
                />
                <p className="centerIt"><button className="upload-btn grow" type="Submit" >Post Song</button></p>
            </form>

        </section>
    )


}


export default UploadForm;
