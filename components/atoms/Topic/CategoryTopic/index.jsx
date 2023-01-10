import React from 'react'
import styles from './styles.module.scss'

export default function CategoryTopic({type}) {
  return (
    <p className={styles[`category`]}>{type}</p>
  )
}
