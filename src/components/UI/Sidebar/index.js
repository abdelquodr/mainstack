import React from 'react'
import { ReactiveImage } from '@/components'

const sidebarData = [
    {
      icon: 'product-1',
      desc: 'Link in Bio'
    },
    {
      icon: 'folder-2',
      desc: 'Store'
    },
    {
      icon: 'folder-1',
      desc: 'Media kit'
    },
    {
      icon: 'product-2',
      desc: 'Invoicing'
    }
  ]

export default function Sidebar() {
  return (
    <div className='fixed w-12 rounded-full h-48 bg-white shadow-lg left-5 top-60' >
    {
      sidebarData?.map((item, index) => <ReactiveImage key={index} icon={item?.icon} desc={item?.desc} size={36} /> )
    }
    </div>
  )
}
