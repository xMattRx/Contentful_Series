import React from 'react'
import styles from './styles.module.scss'

function TitleCard({name}) {
  return (
    <h3 className={styles[`Title`]}>{name}</h3>
  )
}

export default TitleCard