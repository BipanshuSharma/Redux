import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTab(state, action) {
            state.activeTab = action.payload
        },
        setLoading(state, action) {
            state.loading = true
            state.error = null
        },
        setResults(state, action) {
            state.loading = false
            state.results = action.payload
        },
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearResults(state) {
            state.results = []
        }
    },
})

export const { setQuery,
    setActiveTab,
    setLoading,
    setResults,
    setError,
    clearResults } = searchSlice.actions
export default searchSlice.reducer