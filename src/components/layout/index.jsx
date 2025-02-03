import React from 'react'

export default function index(props) {
  return (
    <div className='main'>
        <div className="main-wrap">
            {props.children}
        </div>
    </div>
  )
}
