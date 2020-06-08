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
        <a target="_blank" rel="noreferrer" href="https://github.com/qudusayo">Github</a>
            <p>&copy; {data.site.siteMetadata.author}, 2020</p>
        </div>
    )
}

export default Footer
