import React, { ReactNode }  from 'react'
import Header from './_components/Header'
import {UserButton } from '@clerk/nextjs';
function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
    <Header/>
      {children}
    </div>
  )
}

export default DashboardLayout
