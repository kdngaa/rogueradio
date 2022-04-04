// import {csrfFetch} from './csrf';

const LOAD_SONGS = 'songs/load'

const load = songs =>({
    type: LOAD_SONGS,
    songs
})

// LOAD ALL SONGS
export const getSongs = () => async dispatch => {

    const res = await fetch('/api/songs')

    if(res.ok){
        const songs = await res.json()
        dispatch(load(songs))
    }
}

// SONGS REDUCER
const initialState = {songs:[]}
const songReducer = (state = initialState, action) => {
    switch(action.type){
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
            default:
                return state
    }
}


export default songReducer;
