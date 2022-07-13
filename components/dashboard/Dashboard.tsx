import React from 'react'
import styles from './Dashboard.module.scss'
import { Card, Searchbar, Follow } from 'components'
import { Publication } from '../publication/Publication';



export const Dashboard = () => {
    return (
        <div className={styles.container}>
            <section className={styles.config}>
                <p>Config</p>
            </section>
            <section className={styles.feed}>
                <Searchbar />
                {new Array(10).fill("").map((_, index) => (
                    <Publication key={index} index={index} />
                ))}
            </section>

            <section className={styles.related}>
                {new Array(10).fill("").map((_, index) => (
                    <Follow key={index} index={index} />
                ))}
            </section>

        </div>
    )
}
