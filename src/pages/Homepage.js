import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>This is Home
        <button>
        <Link to="/landingpage">click me</Link>
        </button>
    </div>
  )
}

export default Homepage