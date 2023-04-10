import React from 'react'
import {ThreeCircles} from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='flex justify-center w-full'>
        <ThreeCircles
  height="400"
  width="400"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    </div>
  )
}

export default Spinner