import React from 'react'
import Card from '../../molecules/Card'

export default function Cards({series}) {
  console.log(series)
  return (
    <>
        {series.map((item, index) => {
          return (
              <Card {...item.fields} key={index}/>
            )
        })}
    </>
  )
}
