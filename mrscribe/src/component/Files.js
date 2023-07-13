import React from 'react'
import { Link } from 'react-router-dom'


function Files() {
  return (
    <div>
         <div className='navigation'>
       <div>
            <h1 className='navigation-head'>Mr. Scribe</h1>
        </div>
        <div className='navigation-bar'>
           <Link to='/' className='navigation-saved' >Re Generate</Link>
        </div>
       </div>
      <div className='heading'>
        <h1>Your Saved Files</h1>
      </div>
    </div>
  )
}

export default Files
