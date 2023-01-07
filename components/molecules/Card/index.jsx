import { RevealWrapper } from 'next-reveal'
import Link from 'next/link'
import React from 'react'
import Category from '../../atoms/Category'
import Shadow from '../../atoms/Shadow'
import TitleCard from '../../atoms/TitleCard'
import styles from './styles.module.scss'

export default function Card(props) {

  return (
    <RevealWrapper className="load-hidden" rotate={{x: 2,y:40,z:0}} origin='bottom' delay={200} duration={2000} distance='100px' reset={false} viewOffset={{top: 25, right:0, bottom: 10, left:5}}>
        <Link href={`/serie/${props.title}`}>
            <div style={{background: `url(${props.verticalImage})`} } className={styles[`Container`]}>
                    <Shadow/>
                    <Category type={props.category}/>
                    <TitleCard name={props.title}/>
            </div>
        </Link>
    </RevealWrapper>
  )
}
