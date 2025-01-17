import React from 'react'

import {graphql} from 'gatsby'

import styles from '../styles/general.module.scss'

import Layout from '../Components/layout'
import SEO from '../Components/seo'

import "prism-themes/themes/prism-atom-dark.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const query = graphql`
    query($slug: String){
        markdownRemark (fields: { slug: {eq: $slug}}){
            excerpt
            frontmatter{
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <SEO title={props.data.markdownRemark.frontmatter.title} description={props.data.markdownRemark.excerpt} keywords={[`qudusayo`, `About qudusayo`, `qudusayo-blog`, `dev-qudusayo`, `Ayoola Abdulqudus`, `${props.data.markdownRemark.frontmatter.title}`]} />
            <div className={styles.blogTemplate}>
            <h1 className={styles.headings}>{props.data.markdownRemark.frontmatter.title}</h1>
            <div  className={styles.content} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}

export default Blog
