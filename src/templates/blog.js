import React from 'react'

import {graphql} from 'gatsby'

import styles from '../styles/blogtemplate.module.scss'

import Layout from '../Components/layout'

import "prism-themes/themes/prism-atom-dark.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const query = graphql`
    query($slug: String){
        markdownRemark (fields: { slug: {eq: $slug}}){
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
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog
