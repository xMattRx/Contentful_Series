
import Link from 'next/link.js'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import useContentful from '../../hooks/useContentful.js'
import styles from './styles.module.scss'


export default function SeriePage(props) {
    return (
        <div className={styles[`serie`]}>
            <div className={styles[`content`]}>
                <div className={styles[`backContainer`]}>
                    <Link href={`/`}>
                        <BsArrowLeftShort size={20}/>
                        <p className={styles[`text`]}>BACK</p>
                    </Link>
                </div>
                <h1 className={styles[`title`]}>{props.title}</h1>
                <p className={styles[`description`]}>{props.description}</p>

                <div className={styles[`topicsContainer`]}>
                    <div className={styles[`topic`]}>
                        <h3 className={styles[`title`]}>category</h3>
                        <p className={styles[`category`]}>{props.category}</p>
                    </div>
                    <div className={styles[`topic`]}>
                        <h3 className={styles[`title`]}>seasons</h3>
                        <p className={styles[`category`]}>{props.seasons}</p>
                    </div>
                    <div className={styles[`topic`]}>
                        <h3 className={styles[`title`]}>year</h3>
                        <p className={styles[`category`]}>{props.year}</p>
                    </div>
                </div>
            </div>
            <img className={styles[`image`]} src={`${props.image}`} alt={`${props.title}`} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const product = await useContentful.getEntries({
        content_type: 'serie',
        limit: 1,
        "fields.title": context.params.name,
    })
    return {
        props: {
            ...product.items[0].fields
        }
    }
}