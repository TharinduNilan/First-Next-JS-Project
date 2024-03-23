import React from 'react'

export default function page({params}) {
    console.log(params);
  return (
    <>
        <h1>catch all routes</h1>
        <ul>
            {params.dpath.map((item) => {
                return(
                    <li>{item}</li>
                )
            })}
        </ul>
    </>
  )
}
