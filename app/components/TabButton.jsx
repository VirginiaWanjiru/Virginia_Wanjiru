import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active 
    ? 'text-white border-b border-purple-500' :
     'text-[#ADB7BE] border-b border-purple-500';
  return (
    <button onClick={selectTab} >
        <p className= {'mr-3 font-semibold  ${buttonClasses}'}>
            {children}
        </p>
    </button>
  )
}

export default TabButton