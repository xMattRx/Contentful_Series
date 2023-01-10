import React from 'react'
import styles from './styles.module.scss'

export default function ImagePost({src,alt}) {
  return (
    <img className={styles[`image`]} src={src} alt={alt} />
  )
}
