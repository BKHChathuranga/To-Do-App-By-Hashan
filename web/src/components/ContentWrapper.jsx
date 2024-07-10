import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div
      className={`flex justify-center w-full`}
    >
      <div className="flex flex-col justify-center max-w-[1440px] md:px-20 px-5 mx-auto content-around">
        {children}
      </div>
    </div>
  )
}

export default ContentWrapper