import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4'>
            <div className='flex space-x-6 mb-2'>
                <a href="#"><RiFacebookFill /></a>
                <a href="#"><RiTwitterFill /></a>
                <a href="#"><RiInstagramFill /></a>
            </div>
            <p className='text-sm'>&copy; 2024 VastuSpaze. All rights reserved. Edited by mspark9</p>
        </div>
    </footer>
  )
}

export default Footer