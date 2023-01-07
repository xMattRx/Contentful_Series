import React from 'react'
import styles from './styles.module.scss'

function Category({type}) {
  return (
    <div  className={styles[`Category`]}>
      {type}
    </div>
  )
}

export default Category