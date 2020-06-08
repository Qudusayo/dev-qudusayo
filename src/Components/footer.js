import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import  footerStyles from './footer.module.scss'
function Footer() {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return (
        <div className={footerStyles.footer}>
        <a target="_blank" href="https://github.com/qudusayo">Github</a>
            <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
        </div>
    )
}

export default Footer
