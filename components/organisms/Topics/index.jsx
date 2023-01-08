import React from 'react'
import Topic from '../../molecules/Topic'
import styles from './styles.module.scss'

export function Topics({category,seasons,year}) {
  return (
    <div className={styles[`topicsContainer`]}>
        <Topic title="category" category={category} />
        <Topic title="seasons" category={seasons} />
        <Topic title="year" category={year} />
    </div>
  )
}
