import React from 'react'
import styles from './styles.module.scss'

export function TitleTopic({name}) {
  return (
    <h3 className={styles[`title`]}>{name}</h3>
  )
}
