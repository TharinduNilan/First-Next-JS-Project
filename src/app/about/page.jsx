import React from 'react'
import Link from 'next/link'
import styles from './about.module.css'

export default function page() {
  return (
    <div>
        <h1>About</h1>
        <Link className={styles.link} href='/'>Back</Link>
    </div>
  )
}
