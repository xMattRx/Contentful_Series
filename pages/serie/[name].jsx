
import React from 'react'
import useContentful from '../../hooks/useContentful.js'




export default function SeriePage(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={`${props.image}`} alt={`${props.title}`} />
            <h3>{props.category}</h3>
        </div>
    )
}

export async function getServerSideProps(context) {
    const product = await useContentful.getEntries({
        content_type: 'serie',
        limit: 1,
        "fields.title": context.params.name,
    })
    console.log('product:', product.items)
    console.log(context.params)
    return {
        props: {
            ...product.items[0].fields
        }
    }
}