import React, { useEffect } from 'react'
import Header from './Shared/Header/Header'
// import style from './layout.module.css'
import Sidebar from './Shared/Sidebar/Sidebar'
import { LayoutStyled } from './layoutStyled'
const Layout = (props: any) => {
  useEffect(() => {
    console.log("sdsd")
  }, [])
  return (
    <main style={{
      minHeight: '100vh'
    }}>
      <LayoutStyled>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main'>
          <Header />
          <div>{props.children}</div>
        </div>
      </LayoutStyled>
    </main>
  )
}

export default Layout