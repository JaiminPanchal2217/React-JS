import React, { useContext } from 'react'
import { data } from './ UseContext'

function ChildCompo() {
   const xyz = useContext(data)

  return (
    <div>
    Child1 hello
    </div>
  )
}

export default ChildCompo