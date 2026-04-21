import React, { useState } from 'react'
import Nav from '../components/Nav'

function Donate() {

  const [active, setActive] = useState('part1')

  return (
    <div>
      <Nav />
      <section>
        <div className='bg-amber-600 flex justify-between px-5 text-white'>
          
          <div
            onClick={() => setActive('part1')}
            className={`part1 cursor-pointer text-center w-full pb-3
              ${active === 'part1'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'border-b-2 border-transparent'}`}
          >
            All
          </div>

          <div
            onClick={() => setActive('part2')}
            className={`part2 cursor-pointer text-center w-full pb-3
              ${active === 'part2'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'border-b-2 border-transparent'}`}
          >
            Recent
          </div>

          <div
            onClick={() => setActive('part3')}
            className={`part3 cursor-pointer text-center w-full pb-3
              ${active === 'part3'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'border-b-2 border-transparent'}`}
          >
            Urgent
          </div>

        </div>
      </section>
    </div>
  )
}

export default Donate
