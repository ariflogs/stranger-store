import React from 'react'
import {Link} from "react-router-dom"
import "./button.scss"

const MainBtn = () => {
  return (
    <Link to="/chart" className="main-btn">
      Add to chart
    </Link>
  )
}

export default MainBtn