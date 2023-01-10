import React from 'react'
import DescriptionPost from '../../atoms/Post/DescriptionPost'
import TitlePost from '../../atoms/Post/TitlePost'
import BackHome from '../../molecules/BackHome'
import Topics from '../Topics'
import styles from './styles.module.scss'

export default function SerieContent({title, description, category, seasons, year}) {
  return (
    <div className={styles[`content`]}>
        <BackHome/>
        <TitlePost name={title}/>
        <DescriptionPost text={description}/>
        <Topics category={category} seasons={seasons} year={year}/>
    </div>
  )
}
