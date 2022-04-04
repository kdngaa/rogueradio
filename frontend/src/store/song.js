const loadSongs = 'songs/load'

const load = songs({
    type: loadSongs,
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
        case load:
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
