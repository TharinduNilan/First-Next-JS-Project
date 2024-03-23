import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import img1 from '../../../../../public/potato.png'

export default function page({params}) {
  return (
    <>
      <h1 style={{margin:'40px'}}>{params.id}</h1>
      <div style={{display:'flex', marginLeft:'40px'}}>
          <Image src={`/${params.id}.png`} width={650} height={400}/>
          <Link href='/products/vegies' style={{marginLeft:'50px'}}>Back</Link>
      </div>
    </>
  )
}

