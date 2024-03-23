import React from 'react'
import Link from 'next/link'
import styles from './products.module.css'

export default function page() {
  return (
    <div>
        <h1>Products</h1>
        <Link className={styles.link} href='/'>Back</Link>
    </div>
  )
}
