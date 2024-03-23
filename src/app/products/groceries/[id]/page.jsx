import React from 'react'

export default function page({params}) {
  return (
    <div>
        <h1>Groceries {params.id}</h1>
    </div>
  )
}
