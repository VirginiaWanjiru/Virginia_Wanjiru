import React from 'react'

const ProjectTag = (name , onClick, isSelected) => {
    const buttonStyles = isSelected 
    ? "text-white bg-purple-500" :
      "text-[#ADB7BE] border-slate-600 hover:border-white"

  return (
    <button className={`${buttonStyles} rounded-xl border-2 px-4 py-4 text-xl cursor-pointer`}>All</button>
  )
}

export default ProjectTag
