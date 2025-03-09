import React from 'react'

export default function Button(props) {
    const { text,func,className } =props
  return (
    <button
    onClick={func} 
    className={`text-base text-gray-200 bg-indigo-600 font-medium px-3 py-1.5 rounded gap-x-1 hover:bg-indigo-600/70 ease-out duration-500 ${className}`}
  >
    <p>{text}</p>
  </button> 
  )
}
