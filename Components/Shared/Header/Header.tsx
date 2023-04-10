import Link from 'next/link'
import React from 'react'
import { routeConstsnt } from '@/Constant/routeConstant'
import { HeaderStyled } from './HeaderStyled'
const Header = () => {
  return (
    <HeaderStyled>
      <div className='logo'>
        <Link href={"/"}>MOHD MIRAJ</Link>
      </div>
      <ul>
        <li><Link href={routeConstsnt.myWork}>My Work</Link></li>
        <li><Link href={routeConstsnt.experiance}>Experience</Link></li>
        <li><Link href={routeConstsnt.contact}>Contact</Link></li>
        <li><Link href={routeConstsnt.about}>About</Link></li>
        <li><Link href={routeConstsnt.about}>CV</Link></li>
      </ul>
    </HeaderStyled>
  )
}

export default Header;