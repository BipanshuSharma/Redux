import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { clearResults, setError, setLoading, setResults } from '../redux/features/searchSlice'

const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

  useEffect(() => {
    const getData = async () => {
      if (!query.trim()) {
        dispatch(clearResults())
        return
      }

      dispatch(setLoading())

      try {
        let data
        if (activeTab === 'photos') {
          data = await fetchPhotos(query)
          dispatch(setResults(data.results || []))
        } else if (activeTab === 'videos') {
          data = await fetchVideos(query)
          dispatch(setResults(data.videos || []))
        }
      } catch (err) {
        dispatch(setError(err.message || 'Something went wrong'))
      }
    }

    getData()
  }, [query, activeTab, dispatch])

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {loading && <p className="text-center text-gray-300">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      {!loading && !error && results.length === 0 && query && (
        <p className="text-center text-gray-400">No results found.</p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg">
            {activeTab === 'photos' ? (
              <img
                src={item.urls?.small || item.urls?.regular}
                alt={item.alt_description || 'Search result'}
                className="h-56 w-full object-cover"
              />
            ) : (
              <video controls className="h-56 w-full object-cover">
                <source src={item.video_files?.[0]?.link} type="video/mp4" />
              </video>
            )}

            <div className="p-3">
              <p className="text-sm text-gray-300">
                {activeTab === 'photos'
                  ? item.user?.name || 'Unknown photographer'
                  : item.user?.name || 'Unknown creator'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultGrid