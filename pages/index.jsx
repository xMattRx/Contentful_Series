import React, { useEffect, useState } from 'react';
import Card from '../components/molecules/Card';
import useContentful from '../hooks/useContentful';
import styles from '../styles/Home.module.scss';


export default function Home(props) {
  const [array,setArray] = useState([])

  function sortData(){
    var count = Object.keys(props).length;
    let array = []
  
    for (let index = 0; index < count; index++) {
      array.push(props[index])
    }
    array = array.sort((a,b)=>{
      return new Date(a.sys.createdAt) - new Date(b.sys.createdAt)}
    )
    return array
  }

  useEffect(() => {
    setArray(sortData())
  }, [])
  
  return (
    <main className={styles[`home`]}>
      {array ? <>
          {array.map((item, index) => {
            return (
              <Card id={`${item.fields.title.replace(/\s/g, '')}`} {...item.fields} key={index}/>
            )
          })}
      </> : <p>loading</p>
      }
    </main>
  )
}

export async function getStaticProps() {
  const product = await useContentful.getEntries()

  return {
      props: {
          ...product.items
      }
  }
}