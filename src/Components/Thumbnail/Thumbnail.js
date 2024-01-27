import React from 'react'
import './Thumbnail.css'
import img from "../../Assets/images/netflix-logo.png";

const Thumbnail = ({src}) => {
  return (
    <img className = "thumbnail" src = {src} alt= "thumbnail"></img>
  )
}

export default Thumbnail