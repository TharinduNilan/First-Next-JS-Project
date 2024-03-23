import React from 'react'
import Link from 'next/link'
import styles from './vegies.module.css'

export default function page() {

  const vegies  = [
    {
      id:1,
      name:'Potato'
    },
    {
      id:2,name:"Carrot"
    },
    {
      id:3,name:"Onion"
    },
    {
      id:4,name:"Cucumber"
    },
    {
      id:5,name:"Tomato"
    }
  ]
  return (
    <div className={styles.container}>
        <h1 style={{marginTop:'20px', marginLeft:'50px'}}>Vegitables</h1>

        <div className={styles.card_container}>

          {/* <ul>
            {vegies.map((vegi) => {
              return(
                <li><Link href={`/products/vegies/${vegi.name}`}>{vegi.name}</Link></li>
              )
            })}
          </ul>  */}

          {
            vegies.map((vegi) => {
              return(
                // <div >
                  <Link className={styles.card} href={`/products/vegies/${vegi.name}`}>{vegi.name}</Link>
                // {/* </div> */}
              )
            })
          }

        </div>        
    </div>
  )
}
