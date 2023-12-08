import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Service() {
  return (
    <div>
          <Link to="/service/s1">Service 1</Link>
            <Link to="/service/s2">Service 2</Link>
            <Link to="/service/s3">Service 3</Link>
            <Outlet/>
    </div>
  )
}

export default Service
