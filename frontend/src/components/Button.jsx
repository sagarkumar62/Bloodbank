import React from 'react'


const Button = ({text}) => {
  return (
    <div>
        <button className="px-4 py-2 text-[1.1rem] text-white font-medium bg-[#E53935] rounded-[15px] active:scale-95">
            {text}
          </button>
    </div>
  )
}

export default Button