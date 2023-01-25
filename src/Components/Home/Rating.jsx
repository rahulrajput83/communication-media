import React from 'react'
import { BsStarFill } from 'react-icons/bs'

function Rating(props) {
  return (
    <BsStarFill className={props.className} />
  )
}

export default Rating