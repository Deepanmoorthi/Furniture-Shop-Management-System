import React from 'react'

const sectionHead = ({icon, title, className}) => {
  return (
    <div>
        <div className={`section_haed ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
               
        </div>
    </div>
  )
}

export default sectionHead
