import React from 'react'


const Button = ({text}) => {
  return (
    <div>
        <button className="px-4 py-2 text-[1.1rem] text-white font-medium bg-[#FE6058] rounded-[15px]">
            {text}
          </button>
    </div>
  )
}

export default Button