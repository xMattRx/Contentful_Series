import Link from 'next/link'
import React from 'react'
import TitleCard from '../../atoms/TitleCard'
import Category from '../../atoms/Category'
import styles from './styles.module.scss'
import Shadow from '../../atoms/Shadow'

export default function Card(props) {

  return (
    <Link href={`/serie/${props.title}`}>
        <div style={{background: `url(${props.verticalImage})`} } className={styles[`Container`]}>
                <Shadow/>
                <Category type={props.category}/>
                <TitleCard name={props.title}/>
        </div>
    </Link>
  )
}
