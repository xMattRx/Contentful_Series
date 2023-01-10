import Link from 'next/link'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import styles from './styles.module.scss'

export default function BackHome() {
  return (
      <div className={styles[`backContainer`]}>
        <Link href={`/`}>
            <BsArrowLeftShort size={20}/>
        </Link>
        <Link href={`/`}>
            <p className={styles[`backContainer__text`]}>BACK</p>
        </Link>
      </div>
  )
}
