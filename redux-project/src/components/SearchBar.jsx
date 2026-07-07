import React from 'react'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <div className="h-[10vh] w-full flex items-center justify-center p-4">
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className="flex w-full max-w-4xl gap-[10%]">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required 
                    type="text"
                    placeholder="Search Anything..."
                    className="w-[60%] rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-[30%] rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar