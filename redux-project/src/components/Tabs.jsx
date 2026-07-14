import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
  const tabs = ['photo', 'video'];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className='flex justify-center gap-4 mt-4'>
      {tabs.map(function (elem, idx) {
        return (
          <button className={`${activeTab==elem ? "bg-blue-700" : "bg-pink-950"} m-2 p-2 uppercase font-bold active:scale-95 cursor-pointer rounded-2xl`}
            onClick={() => dispatch(setActiveTab(elem))}
            key={idx}>{elem}</button>
        )
      })}
    </div>
  )
}

export default Tabs