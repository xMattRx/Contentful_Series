import React from 'react'
import styles from './styles.module.scss'

export function CategoryTopic({type}) {
  return (
    <p className={styles[`category`]}>{type}</p>
  )
}
