import { RevealWrapper } from 'next-reveal'
import Link from 'next/link'
import React from 'react'
import CategoryCard from '../../atoms/Card/CategoryCard'
import ShadowCard from '../../atoms/Card/ShadowCard'
import TitleCard from '../../atoms/Card/TitleCard'
import styles from './styles.module.scss'

export default function Card(props) {

  return (
        <Link href={`/serie/${props.title}`}>
          <RevealWrapper className="load-hidden" rotate={{x: 2,y:40,z:0}} origin='bottom' delay={200} duration={2000} distance='100px' reset={false} viewOffset={{top: 25, right:0, bottom: 10, left:5}}>
            <div style={{background: `url(${props.verticalImage})`} } className={styles[`Container`]}>
              <ShadowCard/>
              <CategoryCard type={props.category}/>
              <TitleCard name={props.title}/>
            </div>
          </RevealWrapper>
        </Link>
  )
}
