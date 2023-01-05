
import React from 'react'
import useContentful from '../hooks/useContentful.js'




export default function ProductPage(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h2>{props.subheading}</h2>
        </div>
    )
}

export async function getStaticProps() {
    const product = await useContentful.getEntries()

    return {
        props: {
            ...product.items[0].fields
        }
    }
}