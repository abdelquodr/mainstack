"use client"

import { useState } from 'react';
import { Navbar, Table, Chart, Drawer, Sidebar } from '@/components/UI'
import { AppStateProvider } from '@/State/AppState';

export default function Home() {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const OpenDrawerHandler = () => {
    setIsDrawerActive(true)   
  }; 

  const closeDrawerHandler = () => {
    setIsDrawerActive(false)    
  }; 

  return (
    <AppStateProvider>
      <main className={`p-5 relative ${isDrawerActive && 'bg_effect'}`}>
        <Navbar />
        <div className='px-32 mt-28 z-0 relative'>
          <Sidebar />
          <Chart  />
          <Table  openDrawer={OpenDrawerHandler} />
          <Drawer isActive={isDrawerActive} closeDrawer={closeDrawerHandler} />
        </div>
      </main>
    </AppStateProvider>

  )
}
