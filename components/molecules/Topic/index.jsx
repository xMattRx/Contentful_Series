import React from 'react'
import  CategoryTopic  from '../../atoms/Topic/CategoryTopic'
import TitleTopic  from '../../atoms/Topic/TitleTopic'
import styles from './styles.module.scss'

export default function Topic({category, title}) {
  return (
    <div className={styles[`topic`]}>
        <TitleTopic name={title}/>
        <CategoryTopic type={category}/>
    </div>
  )
}
