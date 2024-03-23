import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <h1>Profile Page</h1>
        <Link href='/profile/users'>Goto Users Page</Link>
    </div>
  )
}
