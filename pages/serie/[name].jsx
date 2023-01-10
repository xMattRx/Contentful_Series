
import React from 'react'
import ImagePost from '../../components/atoms/Post/ImagePost/index.jsx'
import SerieContent from '../../components/organisms/SerieContent/index.jsx'
import useContentful from '../../hooks/useContentful.js'
import styles from './styles.module.scss'


export default function SeriePage(props) {
    console.log(props)
    return (
        <div className={styles[`serie`]}>
            <SerieContent title={props.title} description={props.description} category={props.category} seasons={props.seasons} year={props.year} />
            <ImagePost src={props.image} alt={props.title}/>
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