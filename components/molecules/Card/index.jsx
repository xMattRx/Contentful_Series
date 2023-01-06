import Link from 'next/link'
import React, { useState } from 'react'
import styles from './styles.module.scss'

export default function Card(props) {
    const [width, setWidth] = useState(window.innerWidth)
    
    const handleResize = () => {
        setWidth(window.innerWidth);
      }
    React.useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);

  return (
    <Link href={`/serie/${props.title}`}>
        <div id={props.id} style={width <= 3025 ? {background: `url(${props.verticalImage})`} : {background: `url(${props.image})`} } className={styles[`Container`]}>
                <div className={styles[`Shadow`]}>
                </div>
                <div  className={styles[`Category`]}>
                    {props.category}
                </div>
                <h3 className={styles[`Title`]}>{props.title}</h3>
        </div>
    </Link>
  )
}
