import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
  <footer className="footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white "> 

    <div className="container p-8 flex justify-between">
        
        <Link href='/'> VEEJAY </Link>
        
        
        <p className="text-slate-200">All rights reserved</p>
    </div>
  </footer>
  )
}

export default Footer