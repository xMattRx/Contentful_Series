
import React from 'react'
import ImagePost from '../../components/atoms/Post/ImagePost/index.jsx'
import SerieContent from '../../components/organisms/SerieContent/index.jsx'
import useContentful from '../../hooks/useContentful.js'
import styles from './styles.module.scss'


export default function SeriePage(props) {
    return (
        <div className={styles[`serie`]}>
            <SerieContent title={props.title} description={props.description2} category={props.category2.fields.name} seasons={props.seasons} year={props.year} />
            <ImagePost src={props.imageHorizontal.fields.file.url} alt={props.title}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const product = await useContentful.getEntries({
        content_type: 'serie',
        limit: 1,
        "fields.slug": `${context.params.name}`,
    })
    return {
        props: {
            ...product.items[0].fields
        }
    }
}