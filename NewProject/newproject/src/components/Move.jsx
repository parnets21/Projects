import React from 'react'
import "../styles/move.css"
import { FaTruck } from "react-icons/fa6";
const Move = () => {
  return (
    <div>
     <marquee behavior="" direction="right"><img src="/Assets/truck.png" alt="" /></marquee>
     {/* <marquee behavior="" direction="right" scrollamount="10"><img src="/Assets/truck.png" alt="" /></marquee> */}
     <marquee behavior="scroll" direction="right" scrollamount="8"> <FaTruck className='truck' /></marquee>
    </div>
  )
}

export default Move
