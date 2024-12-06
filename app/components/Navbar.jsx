

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div className="flex  flex-wrap items-center justify-between mx-auto p-8">
            <Link href={'/'}>LOGO</Link>
            <div className="menu"></div>
        </div>
            
    </nav>
  )
}

export default Navbar