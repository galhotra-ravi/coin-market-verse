import React, { useEffect } from 'react'

function Exhanges() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div className='text-white h-[calc(100vh_-_170px)] text-2xl w-full flex items-center justify-center'>Coming soon</div>
  )
}

export default Exhanges