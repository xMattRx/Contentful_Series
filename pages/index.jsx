import React, { useEffect, useState } from 'react';
import Cards from '../components/organisms/Cards';
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
      {array ? <Cards series={array}/> : <p>loading</p>}
    </main>
  )
}

export async function getStaticProps() {
  const product = await useContentful.getEntries({content_type: 'serie'})
  return {
      props: {
          ...product.items
      }
  }
}