import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 10245,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return {...state, apiData : action.payload}
        },
        clearData: () => {
            return initialState
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        }
    }
})

async function getArtById(artId){
    const apiURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
}

export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions
// thunk action creator
export const fetchData = () => {
    // thunk about data
    const fetchDataThunk = async (dispatch, getState) => {
        // state that matters to be able to know what to do
        let state = getState()

        // side effects
        const apiURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
        const response = await fetch(`${apiURL}/${state.data.objectId}`)
        const rData = await response.json()
        // send that data to the store by
        // dispatching the 'setData' action with a payload of rData
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer