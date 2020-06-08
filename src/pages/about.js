import React from 'react'

import Layout from '../Components/layout'
import SEO from "../components/seo"

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About " keywords={[`qudusayo`, `About qudusayo`, `qudusayo-blog`, `dev-qudusayo`, `Ayoola Abdulqudus`]} />
            <h1>About Me</h1>
            <h2>Who am i ?</h2>
            <p>
                I'm <b>Qudusayo</b> , a fullstack developer.<br />
                My stacks of development are SQL, ReactJS, Gatsby, NodeJS, GraphQL, HTML, HandleBars, CSS, SCSS, and Jquery, but my loved stacks for development are React and SCSS for frontend development and Node for backend development and SQL for database
            </p>

            <h2>My Loved Works</h2>
            <p>
                I loved algorithms and data structure most because I loved mathematics. I take challenges in some sites, so I loved <a href="https://" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}>Codility</a> over <a href="https://" target="_blank"  rel="noreferrer" style={{cursor: "pointer"}}>Hackerrank</a> because <a href="https://" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}>Codility</a> challenges with time and gives solution result in percentage due to the time complexity and test passed by the code.
            </p>

            <h2>Target</h2>
            <p>
                I'm working to be a great developer in future, still code  everyday.. 
            </p>

            <h2>Word For Programmers</h2>
            <p>
                Coding all night dosen't make you better than other, but focusing and practicing. Try to follow a scheme of practice and challenge
            </p>
        </Layout>
    )
}

export default AboutPage
