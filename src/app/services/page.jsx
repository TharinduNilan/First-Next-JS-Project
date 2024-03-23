import React from 'react'
import Link from 'next/link'
import styles from './services.module.css'

export default function page() {
  return (
    <div>
        <h1>Service Page</h1>
        <Link className={styles.link} href='/'>Back</Link>
    </div>
  )
}
