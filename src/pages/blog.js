import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import styles from '../styles/blog.module.scss'

import Layout from '../Components/layout'
import SEO from "../Components/seo"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
              ){
                edges{
                    node{
                        timeToRead
                        frontmatter{
                            title
                            date
                        }
                        excerpt
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Blog " keywords={[`qudusayo`, `About qudusayo`, `qudusayo-blog`, `dev-qudusayo`, `Ayoola Abdulqudus`]} />
            <h1 className={styles.title}>Blog</h1>
            <ol className={styles.orderedList}>
                {data.allMarkdownRemark.edges.map((edge, id) => {
                    return (
                        <li key={id} className={styles.list}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2  className={styles.blogtitle}>{edge.node.frontmatter.title}</h2>
                                <p className={styles.summary}>{edge.node.excerpt}</p>
                                <div>
                                    <p>{edge.node.frontmatter.date}</p>
                                    <p>{edge.node.timeToRead === 1? `${edge.node.timeToRead}min  read` : `${edge.node.timeToRead}mins read`}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
