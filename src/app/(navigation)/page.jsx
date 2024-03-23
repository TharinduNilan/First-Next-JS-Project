import React from 'react'
import Link from 'next/link'
import style from './Navigation.module.css'

export default function () {
  return (
    <div className={style.container}>
        <div className={style.navigation_style}>
            <Link className={style.Link} href='/'>Home</Link>
            <Link className={style.Link} href='/services'>Services</Link>
            <Link className={style.Link} href='/products'>Products</Link>
            <Link className={style.Link} href='/about'>About</Link>
            <Link className={style.Link} href='/contact'>Contact Us</Link>
            <Link className={style.Link} href='/products/vegies'>Vegies</Link>
            <Link className={style.Link} href='/profile'>Profile</Link>
            <Link id={style.spacialLink} href='https://nextjs.org/' target="blank">Next Js web</Link>
        </div>
    </div>
  )
}
