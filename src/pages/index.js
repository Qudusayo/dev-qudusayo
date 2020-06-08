import React from "react"

import Layout from '../Components/layout'
import SEO from "../components/seo"

import styles from '../styles/indexd.module.scss'

const IndexPage = () => {
    return  (
        <Layout>
            <SEO title="Home " keywords={[`qudusayo`, `About qudusayo`, `qudusayo-blog`, `dev-qudusayo`, `Ayoola Abdulqudus`]} />
            <div className={styles.headerr}>
                <h1>Qudusayo</h1>
                <p>FullStack Developer</p>
            </div>
        </Layout>
    )
}

export default IndexPage;