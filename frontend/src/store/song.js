import { csrfFetch } from './csrf';

const LOAD_SONGS = 'songs/load'

const ADD_SONG = 'songs/addSong'


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


// LOAD ALL SONGS
export const getSongs = () => async dispatch => {

    const res = await fetch('/api/songs')

    if (res.ok) {
        const songs = await res.json()
        dispatch(load(songs))
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
        default:
            return state
    }
}


export default songReducer;
