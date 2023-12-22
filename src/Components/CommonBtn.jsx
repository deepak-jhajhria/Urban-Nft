import React from 'react'

const CommonBtn = (props) => {
  return (
    <div className='max-w-[320px] w-full'>
        <button className="btn bg-gold-gradient text-white shadow-[6px_4px_25px_0_rgba(229,156,62,0.34)] rounded-full w-full font-Inter font-medium text-sm py-2 px-4">{props.text}</button>
    </div>
  )
}

export default CommonBtn
