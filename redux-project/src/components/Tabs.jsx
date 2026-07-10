import React from 'react'

const Tabs = () => {
    const tabs = ['photo', 'video'];
  return (
    <div className='flex justify-center gap-4 mt-4'>
        {tabs.map(function(elem,idx){
            return <button className='bg-pink-900 m-2 p-2 hover:bg-pink-950 uppercase font-bold active:scale-95 cursor-pointer rounded-2xl' key={idx}>{elem}</button>
        })}
    </div>
  )
}

export default Tabs