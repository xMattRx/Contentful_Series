import React from 'react'
import styles from './styles.module.scss'

export default function TitlePost({name}) {
  return (
    <h1 className={styles[`title`]}>{name}</h1>
  )
}
