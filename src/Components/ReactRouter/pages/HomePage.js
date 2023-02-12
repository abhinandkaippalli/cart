import React from 'react'
import Electronics from './Electronics'
import Books from './Books'
import Sports from './Sports'
import Kids from './Kids'

function HomePage() {
  
  return (
    <div style={{
      "overflowAnchor": "none"
      }}>
        <Electronics />
        <Books />
        <Sports />
        <Kids />
    </div >
  )
}

export default HomePage