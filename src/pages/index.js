import React from "react"

import Layout from '../Components/layout'
import SEO from "../Components/seo"

import styles from '../styles/general.module.scss'

const IndexPage = () => {
    return  (
        <Layout>
            <SEO title="Home " keywords={[`qudusayo`, `About qudusayo`, `qudusayo-blog`, `dev-qudusayo`, `Ayoola Abdulqudus`]} />
            <div className={styles.homePage}>
                <h1 className="devTitle">Qudusayo</h1>
                <p className="devBadge">FullStack Developer</p>
            </div>
        </Layout>
    )
}

export default IndexPage;