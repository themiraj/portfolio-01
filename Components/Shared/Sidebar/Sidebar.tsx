import React from 'react'
import { SidebarStyled } from './SidebarStyled'
const Sidebar = () => {
    return (
        <SidebarStyled>
            <div className='profile'>
                <img src="https://images.unsplash.com/photo-1517940001917-1c03b8b1b85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2057&q=80" alt="" />
            </div>
            <div className='desigination'>
                frontend developer
            </div>
        </SidebarStyled>
    )
}

export default Sidebar