import { csrfFetch } from './csrf';

const LOAD_COMMENTS = 'comments/load'

const ADD_COMMENT = 'comments/addComment'


const REMOVE_COMMENT = 'comments/removeComment'



const load = comments => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}


const addComment = comment => {
    return {
        type: ADD_COMMENT,
        comment
    }
}


const removeComment = comment => {
    return {
        type: REMOVE_COMMENT,
        comment
    }
}




// //GET ALL COMMENTS
export const getComments = (id) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${id}`)

    if (res.ok) {
        const comments = await res.json()
        return dispatch(load(comments))
    }
}







// POST A COMMENT
export const postComment = (comment) => async dispatch => {
    const res = await csrfFetch(`/api/comments`, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })
    if (res.ok) {
        const info = await res.json()
        dispatch(addComment(info))
    }
}




// // GET COMMENT BY ID
// export const getCommentById = id => async (dispatch) => {
//     const res = await fetch(`/api/comments/${id}`)

//     const info = await res.json()
//     dispatch(load(info))
//     return res
// }





//REMOVE COMMENT
export const removeAComment = id => async dispatch => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });

    if (res.ok) {
        const info = await res.json()
        await dispatch(removeComment(info));
    }
}



// COMMENTS REDUCER
// const initialState = { comments: [] }
const commentReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS:

            const getComments = {}
            action.comments.forEach(comment => {
                getComments[comment.id] = comment
            })

            return {
                ...getComments,
                ...state
            }

        case ADD_COMMENT:
            newState = { ...state, [action.comment.comment.id]: action.comment.comment }
            return newState;
        case REMOVE_COMMENT:
            newState = { ...state }
            delete newState[action.comment.id]
            return { ...newState }
        default:
            return state
    }
}

export default commentReducer;
