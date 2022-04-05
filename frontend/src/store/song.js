import { csrfFetch } from './csrf';

const LOAD_SONGS = 'songs/load'

const ADD_SONG = 'songs/addSong'

// const GET_SONG = 'songs/getSong'

const load = songs => ({
    type: LOAD_SONGS,
    songs
})


const addSong = song => {
    return {
        type: ADD_SONG,
        song
    }
}


// const getSong = song =>{
//     return{
//         type: GET_SONG,
//         song
//     }
// }



// LOAD ALL SONGS
export const getSongs = () => async dispatch => {

    const res = await fetch('/api/songs')

    if (res.ok) {
        const songs = await res.json()
        dispatch(load(songs))
        return res
    }
}


// ADD A SONG
export const postSong = (song) => async dispatch => {
    const res = await csrfFetch(`/api/songs`, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(song)
    })
    if (res.ok) {
        const info = await res.json()
        dispatch(addSong(info.song))
    }
}




// GET ONE SONG BY ID
export const getSongById = id => async(dispatch) => {
    const res = await fetch (`/api/songs/${id}`)

    const info = await res.json()
    dispatch(load(info))
    return res
}






// SONGS REDUCER
const initialState = { songs: [] }
const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SONGS:
            // const newState = {}
            // const songs = {}
            // action.songs.getAllSongs.forEach(song => {
            //     songs[song.id] = song
            // })
            // newState.songs=songs
            // return {...newState, ...state}

            const getSongs = {}
            action.songs.forEach(song => {
                getSongs[song.id] = song
            })

            return {
                ...getSongs,
                ...state.songs
            }

        case ADD_SONG:
            newState = { ...state, [action.song.id]: action.song }
            return newState
        // case GET_SONG:
        //     const getSong = {}
        //     action.songs.forEach(song => {
        //         getSong[song.id] = song
        //     })

        //     return {
        //         ...getSong,
        //         ...state.songs
        //     }
        default:
            return state
    }
}


export default songReducer;
