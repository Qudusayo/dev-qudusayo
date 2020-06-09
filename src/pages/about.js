import React from 'react'

import Layout from '../Components/layout'
import SEO from "../Components/seo"

import styles from '../styles/general.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About " keywords={[`qudusayo`, `About qudusayo`, `qudusayo-blog`, `dev-qudusayo`, `Ayoola Abdulqudus`]} />
            <h1 className={styles.aboutHeader}>About Me</h1>
            <h2 className={styles.aboutHeader}>Who am i ?</h2>
            <p>
                I'm <b>Qudusayo</b> , a fullstack developer.<br />
                My stacks of development are SQL, MongoDB, NodeJS, ReactJS, Gatsby, GraphQL, HTML, HandleBars, CSS, SCSS, JavaScript, and Jquery, but my loved stacks for development are React and SCSS for frontend development, Node for backend development and SQL for database
            </p>

            <h2 className={styles.aboutHeader}>My Loved Works</h2>
            <p>
                I loved algorithms and data structure due to my passion for mathematics. I do take challenges in some sites, so I prefer <a href="https://codility.app" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}>Codility</a> over <a href="https://hackerrank.com" target="_blank"  rel="noreferrer" style={{cursor: "pointer"}}>Hackerrank</a> because <a href="https://codility.app" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}>Codility</a> challenges with time and gives solution result in percentage due to the time complexity and test passed by the code.
            </p>

            <h2 className={styles.aboutHeader}>Target</h2>
            <p>
                I'm working to be a great developer in future, still code  everyday.. 
            </p>

            <h2 className={styles.aboutHeader}>Word For Programmers</h2>
            <p>
                Coding all night doesn't make you better than other, but focusing and practicing does . Try to follow a scheme of practice and challenge
            </p>
        </Layout>
    )
}

export default AboutPage
