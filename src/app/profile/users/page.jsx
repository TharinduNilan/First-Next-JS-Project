import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <h1>Users Pages</h1>
        <Link href='/profile'>Back to Profile Page</Link>
    </div>
  )
}
