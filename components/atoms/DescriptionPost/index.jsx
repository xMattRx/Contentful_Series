import React from 'react'
import styles from './styles.module.scss'

export default function DescriptionPost({text}) {
  return (
    <p className={styles[`description`]}>{text}</p>
  )
}
